import {
  getCurrentEmployers,
  profile,
  type ExperienceRole,
} from "@/content/profile";
import { CONTENT_UPDATED_AT, absoluteUrl, siteConfig } from "@/lib/seo/site";

type JsonLdObject = Record<string, unknown>;

function personId() {
  return `${siteConfig.url}/#person`;
}

function websiteId() {
  return `${siteConfig.url}/#website`;
}

function profilePageId() {
  return `${siteConfig.url}/#profilepage`;
}

function buildOccupationRole(role: ExperienceRole): JsonLdObject {
  return {
    "@type": "Role",
    roleName: role.title,
    startDate: role.startDate,
    ...(role.endDate ? { endDate: role.endDate } : {}),
    hasOccupation: {
      "@type": "Occupation",
      name: role.title,
      occupationLocation: {
        "@type": "City",
        name: profile.locationCity,
        addressCountry: profile.locationCountry,
      },
    },
    worksFor: {
      "@type": "Organization",
      name: role.company,
    },
    description: role.highlights.join(" "),
  };
}

export function buildPersonJsonLd(): JsonLdObject {
  const currentEmployers = getCurrentEmployers();

  return {
    "@type": "Person",
    "@id": personId(),
    name: profile.name,
    givenName: profile.firstName,
    familyName: profile.lastName,
    alternateName: [profile.shortName, profile.username],
    jobTitle: profile.title,
    description: siteConfig.description,
    url: siteConfig.url,
    email: profile.contact.email,
    telephone: profile.contact.phoneE164,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.images.portraitFallback),
      contentUrl: absoluteUrl(siteConfig.images.portraitFallback),
      width: siteConfig.images.width,
      height: siteConfig.images.height,
      caption: siteConfig.images.alt,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.locationCity,
      addressRegion: profile.locationCity,
      addressCountry: profile.locationCountry,
    },
    sameAs: [profile.contact.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.school,
    },
    worksFor: currentEmployers.map((role) => ({
      "@type": "Organization",
      name: role.company,
    })),
    hasOccupation: profile.experiences.map(buildOccupationRole),
    hasCredential: profile.certificates.map((certificate) => ({
      "@type": "EducationalOccupationalCredential",
      name: certificate.name,
      ...(certificate.year ? { dateCreated: certificate.year } : {}),
      ...(certificate.note ? { description: certificate.note } : {}),
    })),
    knowsAbout: [...profile.focusAreas, "Human Resources"],
    knowsLanguage: profile.languages.map((language) => ({
      "@type": "Language",
      name: language.name,
      description: language.detail,
    })),
  };
}

export function buildWebsiteJsonLd(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": personId() },
    author: { "@id": personId() },
  };
}

export function buildProfilePageJsonLd(): JsonLdObject {
  return {
    "@type": "ProfilePage",
    "@id": profilePageId(),
    name: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    inLanguage: siteConfig.language,
    dateModified: CONTENT_UPDATED_AT,
    isPartOf: { "@id": websiteId() },
    mainEntity: { "@id": personId() },
    about: { "@id": personId() },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.images.og),
      width: siteConfig.images.ogWidth,
      height: siteConfig.images.ogHeight,
      caption: siteConfig.images.alt,
    },
  };
}

/** Single @graph payload — preferred for linked entities. */
export function buildJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonJsonLd(),
      buildWebsiteJsonLd(),
      buildProfilePageJsonLd(),
    ],
  };
}

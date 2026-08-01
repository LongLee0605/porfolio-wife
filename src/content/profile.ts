export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type ExpertiseArea = {
  title: string;
  weight: string;
  points: string[];
};

export type ExperienceRole = {
  title: string;
  company: string;
  period: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
};

export type Education = {
  school: string;
  degree: string;
  gpa: string;
  gpaShort: string;
  period: string;
};

export type Language = {
  name: string;
  detail: string;
  /** Short label for About highlights (omit for native / UI-only). */
  highlight?: string;
};

export type Activity = {
  role: string;
  organization: string;
  period: string;
};

export type Certificate = {
  name: string;
  year?: string;
  note?: string;
};

export type AboutHighlight = {
  label: string;
  value: string;
};

export const profile = {
  name: "Van Thien Doan Trang",
  firstName: "Van Thien Doan",
  lastName: "Trang",
  /** Visual line break for the hero H1. */
  nameLines: ["Van Thien", "Doan Trang"] as const,
  shortName: "Trang Van",
  username: "trangvan15",
  title: "HR Executive",
  location: "Ho Chi Minh City, Vietnam",
  locationCity: "Ho Chi Minh City",
  locationCountry: "VN",
  tagline:
    "Building people-first workplaces through recruitment excellence, thoughtful HR operations, and meaningful employee experience.",
  objective:
    "Seeking a professional office role where HR expertise is valued and can meaningfully benefit the organization — with a focus on the HR department.",
  /** Shared by hero ticker, keywords, and Person JSON-LD knowsAbout. */
  focusAreas: [
    "Talent Acquisition",
    "Full-cycle Recruitment",
    "HR Operations",
    "Employee Relations",
    "Learning & Development",
    "Employer Branding",
    "People Experience",
  ],
  contact: {
    phone: "0969 834 116",
    phoneE164: "+84969834116",
    phoneHref: "tel:+84969834116",
    email: "doantrangvanthien@gmail.com",
    emailHref: "mailto:doantrangvanthien@gmail.com",
    linkedin: "https://www.linkedin.com/in/trangvan15/",
    linkedinLabel: "linkedin.com/in/trangvan15",
  },
  nav: [
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "expertise", label: "Expertise", href: "#expertise" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
  ] as NavItem[],
  education: {
    school: "University of Economics Ho Chi Minh City (UEH)",
    degree: "Bachelor of Human Resource Management",
    gpa: "GPA 8.37 (Distinction)",
    gpaShort: "GPA 8.37",
    period: "Aug 2019 – Mar 2023",
  } satisfies Education,
  languages: [
    { name: "Vietnamese", detail: "Native" },
    { name: "English", detail: "TOEIC 905 (2024)", highlight: "TOEIC 905" },
    { name: "Chinese", detail: "HSK4 (2025)", highlight: "HSK4" },
  ] satisfies Language[],
  experiences: [
    {
      title: "HR Executive",
      company: "Gleads VietNam",
      period: "June 2023 – Present",
      startDate: "2023-06",
      highlights: [
        "Own end-to-end recruitment across Technology, Marketing, and HR–Accounting roles.",
        "Partner with hiring managers to clarify needs, source creatively, and deliver high-quality hires with speed.",
        "Support employer branding and maintain pipeline integrity with data-driven stakeholder updates.",
      ],
    },
    {
      title: "HR Executive",
      company: "BBCIncorp JSC",
      period: "June 2023 – Present",
      startDate: "2023-06",
      highlights: [
        "Recruit for Customer Service, Legal, and Accounting functions including international and consulting roles.",
        "Manage onboarding/offboarding, labor contracts, and day-to-day HR operations with compliance focus.",
        "Strengthen employee relations through feedback systems, engagement planning, and internal communications.",
      ],
    },
    {
      title: "Talent Acquisition",
      company: "KMS Technology",
      period: "Mar 2023 – June 2024",
      startDate: "2023-03",
      endDate: "2024-06",
      highlights: [
        "Handled technical and non-technical hiring: Python, AI/ML, DevOps, Tester, BA, Front-end, Event, and L&D.",
        "Led sourcing, screening, interview coordination, and hiring progress oversight while building candidate databases.",
        "Supported L&D programs and campus events including career fairs, CV clinics, and university activities.",
      ],
    },
    {
      title: "Human Resource Intern",
      company: "Hoang Phuc International",
      period: "Jul 2022 – Dec 2022",
      startDate: "2022-07",
      endDate: "2022-12",
      highlights: [
        "Designed weekly employer branding posts and videos across varied topics.",
        "Ran full-cycle recruitment for Marketing, HR, Finance, and E-commerce from fresher to leadership levels.",
      ],
    },
  ] as ExperienceRole[],
  expertise: [
    {
      title: "Recruitment & Talent Acquisition",
      weight: "50–60%",
      points: [
        "Full recruitment cycle from JD creation to offer, onboarding, and post-hire follow-up",
        "Multi-channel sourcing and creative hiring approaches to hit headcount targets",
        "Hiring manager partnership, pipeline hygiene, and employer branding support",
      ],
    },
    {
      title: "Onboarding / Offboarding",
      weight: "10%",
      points: [
        "End-to-end paperwork, orientation, and exit interviews",
      ],
    },
    {
      title: "HR Operations",
      weight: "10%",
      points: [
        "Labor contract lifecycle: draft, renew, terminate, and monitor expiry",
        "Contract addenda for salary, title, term, and other conditions",
        "Employee records and labor-law compliance",
      ],
    },
    {
      title: "Employee Relations",
      weight: "10%",
      points: [
        "Improve relationships, morale, productivity, and retention with management and employees",
        "Handle inquiries and concerns promptly; establish Employee Feedback Form",
      ],
    },
    {
      title: "HR Policy & Process",
      weight: "10%",
      points: [
        "Employee data, reporting, and engagement planning",
        "Company handbook, process improvements, templates, and culture documentation",
      ],
    },
    {
      title: "Learning & Development",
      weight: "5%",
      points: [
        "Training needs assessment, new-hire orientation, and High-Potential Employee Program",
      ],
    },
    {
      title: "Engagement & Internal Communications",
      weight: "5%",
      points: [
        "Company trips, year-end celebrations, holidays, and internal event support",
      ],
    },
  ] as ExpertiseArea[],
  certificates: [
    { name: "TOEIC 905", year: "2024" },
    { name: "HSK4", year: "2025" },
    { name: "IELTS", year: "2019", note: "Expired" },
    { name: "IC3 Digital Literacy Certification GS5" },
  ] as Certificate[],
  tools: [
    "Microsoft Office",
    "Outlook",
    "Canva",
    "Mailchimp",
    "Mailmerge",
  ],
  softSkills: [
    "Leadership",
    "Communication & Presentation",
    "Research & Writing",
  ],
  activities: [
    {
      role: "Vice head of External Relations Department",
      organization: "HuReA Club",
      period: "Dec 2020 – Nov 2022",
    },
    {
      role: "Member of Human Resources Department",
      organization: "Travelgroup UEH",
      period: "May 2021 – Oct 2022",
    },
  ] as Activity[],
  recruitmentDomains: {
    gleads: [
      "Technology: Front-end, Back-end, DevOps, Network, QC, Business Analyst",
      "Marketing: Brand, Content, Account, Design (Graphic, UI/UX), SEO",
      "HR & Accounting: HR Executive, HR Admin, Accountant",
    ],
    bbc: [
      "Customer Service: Sales Executive, Sales Admin",
      "Legal: Legal Executive, Compliance Officer",
      "Accounting: International Accountant, Bookkeeping Leader, Accounting Consultant",
    ],
  },
} as const;

export type Profile = typeof profile;

/** About section stats — derived from profile to avoid content drift. */
export function getAboutHighlights(): AboutHighlight[] {
  const languageHighlights = profile.languages
    .filter((language): language is Language & { highlight: string } =>
      Boolean(language.highlight),
    )
    .map((language) => ({
      label: language.name,
      value: language.highlight,
    }));

  return [
    { label: "Professional focus", value: profile.title },
    ...languageHighlights,
    { label: "Education", value: profile.education.gpaShort },
  ];
}

export function getCurrentEmployers() {
  return profile.experiences.filter((role) => !role.endDate);
}

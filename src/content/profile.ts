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
  highlight?: string;
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
  nameLines: ["Van Thien", "Doan Trang"] as const,
  shortName: "Trang Van",
  username: "trangvan15",
  title: "HR Executive",
  roles: ["HR Executive", "Talent Acquisition", "People Partner"],
  location: "Ho Chi Minh City, Vietnam",
  locationCity: "Ho Chi Minh City",
  locationCountry: "VN",
  tagline:
    "Building people-first workplaces through recruitment excellence, thoughtful HR operations, and meaningful employee experience.",
  objective:
    "I am a motivated and versatile HR professional, always eager to take on new challenges. With a passion for people and process excellence, I am dedicated to delivering high-quality hiring and employee experience results.",
  focusAreas: [
    "Talent Acquisition",
    "Full-cycle Recruitment",
    "Compensation & Benefits",
    "HR Operations",
    "Learning & Development",
    "Employee Engagement",
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
    { id: "overview", label: "Overview", href: "#overview" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "expertise", label: "Expertise", href: "#expertise" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
  ] as NavItem[],
  skillGroups: [
    {
      title: "Core HR",
      items: [
        "Recruitment",
        "Talent Acquisition",
        "Onboarding / Offboarding",
        "Compensation & Benefits",
        "Payroll & Attendance",
        "Social / Health / Unemployment Insurance",
        "Personal Income Tax (PIT)",
        "Learning & Development",
        "Employee Engagement",
        "HR Operations & Compliance",
        "Labor Contracts",
        "HR Reporting",
      ],
    },
    {
      title: "Tools & Soft Skills",
      items: [
        "Microsoft Office",
        "Outlook",
        "Canva",
        "Leadership",
        "Communication",
        "Presentation",
        "Research & Writing",
        "Stakeholder Management",
      ],
    },
  ],
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
      company: "IMCD",
      period: "Present",
      startDate: "2025-01",
      highlights: [
        "Manage the full recruitment lifecycle for corporate and frontline roles — sourcing, assessment, offer negotiation, onboarding, and post-joining follow-up.",
        "Build and maintain talent pipelines through direct sourcing, recruitment platforms, professional networks, and agency partnerships.",
        "Manage monthly payroll and attendance with data accuracy and statutory compliance; administer SI/HI/UI participation and status changes.",
        "Handle PIT administration (dependent registration, tax documentation, employee inquiries) and deliver benefits per policy and employment contracts.",
        "Run the employee health insurance program: vendor coordination, contract negotiation, enrollment, claims support, and ongoing operations.",
        "Coordinate L&D — training needs assessments, annual plans, workshops/orientation, participation tracking, and management reporting.",
        "Plan engagement and culture initiatives (Year-End Party, team building, CSR, surveys) and drive follow-up actions from employee feedback.",
        "Prepare HR reports (headcount, turnover, attendance, movements) and ensure labor-law compliance across contracts, records, and statutory coordination.",
      ],
    },
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
      weight: "30%",
      points: [
        "Full recruitment lifecycle for corporate and frontline roles — sourcing through onboarding and post-joining follow-up",
        "Talent pipeline via direct sourcing, platforms, networks, and agency partners",
        "Hiring manager partnership and multi-industry recruitment delivery",
      ],
    },
    {
      title: "Compensation & Benefits",
      weight: "25%",
      points: [
        "Monthly payroll and attendance with statutory compliance and timely processing",
        "SI / HI / UI administration and personal income tax (PIT) support",
        "Employee benefits, health insurance programs, vendor coordination, and claims support",
      ],
    },
    {
      title: "Learning & Development",
      weight: "15%",
      points: [
        "Training needs assessment and annual L&D plan support",
        "Coordinate internal/external training, workshops, and orientation",
        "Track participation and effectiveness; maintain records and management reports",
      ],
    },
    {
      title: "Employee Engagement & Culture",
      weight: "15%",
      points: [
        "Year-End Party, team building, CSR, events, and internal communications",
        "Engagement surveys and follow-up action planning",
        "Initiatives that strengthen culture and employee experience",
      ],
    },
    {
      title: "HR Operations & Compliance",
      weight: "15%",
      points: [
        "HR reporting: headcount, turnover, attendance, and workforce movements",
        "Labor-law and policy compliance for contracts, records, and office regulations",
        "Coordination with departments, authorities, and service providers on statutory HR matters",
      ],
    },
  ] as ExpertiseArea[],
  certificates: [
    { name: "TOEIC 905", year: "2024" },
    { name: "HSK4", year: "2025" },
    { name: "IELTS", year: "2019", note: "Expired" },
    { name: "IC3 Digital Literacy Certification GS5" },
  ] as Certificate[],
  tools: ["Microsoft Office", "Outlook", "Canva"],
  softSkills: [
    "Leadership",
    "Communication & Presentation",
    "Research & Writing",
    "Stakeholder Management",
  ],
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

export function getAboutHighlights(): AboutHighlight[] {
  return [
    { label: "Based in", value: profile.locationCity },
    { label: "Experience", value: "3+ years HR" },
    { label: "Core strength", value: "Full-cycle HR" },
    { label: "Scope", value: "TA · C&B · L&D" },
  ];
}

export function getCurrentEmployers() {
  return profile.experiences.filter((role) => !role.endDate);
}

export type OverviewRole = {
  company: string;
  title: string;
  period: string;
};

/** Compact current-role rows for Overview (parent/subsidiary companies merged). */
export function getOverviewRoles(): OverviewRole[] {
  const current = getCurrentEmployers();
  const mergedKeys = new Set(["Gleads VietNam", "BBCIncorp JSC"]);
  const primary = current.filter((role) => !mergedKeys.has(role.company));
  const group = current.filter((role) => mergedKeys.has(role.company));

  const rows: OverviewRole[] = primary.map((role) => ({
    company: role.company,
    title: role.title,
    period: role.period,
  }));

  if (group.length) {
    const title = group[0]?.title ?? "HR Executive";
    const period = group[0]?.period ?? "";
    rows.push({
      company: "Gleads VietNam & BBCIncorp JSC",
      title,
      period,
    });
  }

  return rows;
}

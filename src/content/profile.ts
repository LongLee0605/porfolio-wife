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
    "Building people-first workplaces through recruitment excellence, effective HR operations, and meaningful employee experiences.",
  objective:
    "I am a motivated and versatile HR professional, always eager to take on new challenges. With a passion for people and process excellence, I am dedicated to delivering high-quality hiring and employee experience results.",
  focusAreas: [
    "Talent Acquisition",
    "Full-cycle Recruitment",
    "Compensation & Benefits",
    "Employee Engagement",
    "Learning & Development",
    "HR Operations",
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
      period: "Mar 2026 – Present",
      startDate: "2026-03",
      highlights: [
        "Recruitment: Manage the full recruitment lifecycle for corporate and frontline roles, including sourcing, assessment, offer management, onboarding, and post-joining follow-up.",
        "Build and maintain talent pipelines through direct sourcing, recruitment platforms, professional networks, and agency partnerships. Manage onboarding and offboarding processes and clearance.",
        "C&B: Manage monthly payroll and attendance in compliance with statutory requirements. Administer SI/HI/UI increases, decreases, and status changes.",
        "Handle PIT administration, including dependent registration, documentation, and employee inquiries, while ensuring benefits are delivered in accordance with company policies and employment contracts.",
        "Manage the employee health insurance program, including vendor coordination, contract negotiation, enrollment, claims support, and ongoing administration.",
        "L&D: Coordinate training needs assessments, annual training plans, workshops, orientations, participation tracking, and management reports.",
        "Engagement & Culture: Organize employee engagement activities and company events, conduct surveys, and follow up on action plans to enhance employee experience.",
        "HR Operations & Compliance: Prepare HR reports and ensure compliance with labor regulations, employment contracts, employee records, and statutory requirements. Coordinate with relevant authorities on HR-related matters.",
      ],
    },
    {
      title: "HR Executive",
      company: "Gleads VietNam",
      period: "June 2023 – Mar 2026",
      startDate: "2023-06",
      endDate: "2026-03",
      highlights: [
        "Own end-to-end recruitment across Technology, Marketing, and HR–Accounting roles.",
        "Partner with hiring managers to clarify needs, source creatively, and deliver high-quality hires with speed.",
        "Support employer branding and maintain pipeline integrity with data-driven stakeholder updates.",
      ],
    },
    {
      title: "HR Executive",
      company: "BBCIncorp JSC",
      period: "June 2023 – Mar 2026",
      startDate: "2023-06",
      endDate: "2026-03",
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
        "Manage the full recruitment lifecycle for corporate and frontline roles, including sourcing, assessment, offer management, onboarding, and post-joining follow-up.",
        "Build and maintain talent pipelines through direct sourcing, recruitment platforms, professional networks, and agency partnerships. Manage onboarding and offboarding processes and clearance.",
      ],
    },
    {
      title: "Compensation & Benefits",
      weight: "25%",
      points: [
        "Manage monthly payroll and attendance in compliance with statutory requirements. Administer SI/HI/UI increases, decreases, and status changes.",
        "Handle PIT administration, including dependent registration, documentation, and employee inquiries, while ensuring benefits are delivered in accordance with company policies and employment contracts.",
        "Manage the employee health insurance program, including vendor coordination, contract negotiation, enrollment, claims support, and ongoing administration.",
      ],
    },
    {
      title: "Learning & Development",
      weight: "15%",
      points: [
        "Coordinate training needs assessments, annual training plans, workshops, orientations, participation tracking, and management reports.",
      ],
    },
    {
      title: "Employee Engagement & Culture",
      weight: "15%",
      points: [
        "Organize employee engagement activities and company events, conduct surveys, and follow up on action plans to enhance employee experience.",
      ],
    },
    {
      title: "HR Operations & Compliance",
      weight: "15%",
      points: [
        "Prepare HR reports and ensure compliance with labor regulations, employment contracts, employee records, and statutory requirements. Coordinate with relevant authorities on HR-related matters.",
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
  workDomains: {
    imcd: [
      "Recruitment: Manage the full recruitment lifecycle for corporate and frontline roles, including sourcing, assessment, offer management, onboarding, and post-joining follow-up.",
      "Build and maintain talent pipelines through direct sourcing, recruitment platforms, professional networks, and agency partnerships. Manage onboarding and offboarding processes and clearance.",
      "C&B: Manage monthly payroll and attendance in compliance with statutory requirements. Administer SI/HI/UI increases, decreases, and status changes.",
      "Handle PIT administration, including dependent registration, documentation, and employee inquiries, while ensuring benefits are delivered in accordance with company policies and employment contracts.",
      "Manage the employee health insurance program, including vendor coordination, contract negotiation, enrollment, claims support, and ongoing administration.",
      "L&D: Coordinate training needs assessments, annual training plans, workshops, orientations, participation tracking, and management reports.",
      "Engagement & Culture: Organize employee engagement activities and company events, conduct surveys, and follow up on action plans to enhance employee experience.",
      "HR Operations & Compliance: Prepare HR reports and ensure compliance with labor regulations, employment contracts, employee records, and statutory requirements. Coordinate with relevant authorities on HR-related matters.",
    ],
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
    { label: "Engagement", value: "Employee Engagement" },
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

/** Compact current-role rows for Overview (parent/subsidiary companies merged when both current). */
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

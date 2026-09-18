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
    "Employee Engagement",
    "Compensation & Benefits",
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
    { id: "skill", label: "Skill", href: "#skill" },
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
        "Lead recruitment for corporate and frontline roles across the full hiring cycle.",
        "Own C&B operations covering payroll, attendance, insurance, and PIT.",
        "Support L&D, engagement & culture, and day-to-day HR operations & compliance.",
      ],
    },
    {
      title: "HR Executive",
      company: "Gleads VietNam & BBCIncorp JSC",
      period: "June 2023 – Mar 2026",
      startDate: "2023-06",
      endDate: "2026-03",
      highlights: [
        "Ran end-to-end recruitment for Gleads (Tech, Marketing, HR–Accounting) and BBCIncorp (Customer Service, Legal, Accounting).",
        "Managed onboarding/offboarding, labor contracts, and multi-entity HR operations.",
        "Supported employer branding, employee relations, and hiring-manager partnerships.",
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
      {
        label: "Recruitment",
        details: [
          "Manage the full recruitment lifecycle for corporate and frontline roles, including sourcing, assessment, offer management, onboarding, and post-joining follow-up.",
          "Build and maintain talent pipelines through direct sourcing, recruitment platforms, professional networks, and agency partnerships. Manage onboarding and offboarding processes and clearance.",
        ],
      },
      {
        label: "C&B",
        details: [
          "Manage monthly payroll and attendance in compliance with statutory requirements. Administer SI/HI/UI increases, decreases, and status changes.",
          "Handle PIT administration, including dependent registration, documentation, and employee inquiries, while ensuring benefits are delivered in accordance with company policies and employment contracts.",
          "Manage the employee health insurance program, including vendor coordination, contract negotiation, enrollment, claims support, and ongoing administration.",
        ],
      },
      {
        label: "L&D",
        details: [
          "Coordinate training needs assessments, annual training plans, workshops, orientations, participation tracking, and management reports.",
        ],
      },
      {
        label: "Engagement & Culture",
        details: [
          "Organize employee engagement activities and company events, conduct surveys, and follow up on action plans to enhance employee experience.",
        ],
      },
      {
        label: "HR Operations & Compliance",
        details: [
          "Prepare HR reports and ensure compliance with labor regulations, employment contracts, employee records, and statutory requirements. Coordinate with relevant authorities on HR-related matters.",
        ],
      },
    ],
    gleadsBbc: [
      {
        label: "Technology",
        roles: [
          "Front-end",
          "Back-end",
          "DevOps",
          "Network",
          "QC",
          "Business Analyst",
        ],
      },
      {
        label: "Marketing",
        roles: [
          "Brand",
          "Content",
          "Account",
          "Design (Graphic, UI/UX)",
          "SEO",
        ],
      },
      {
        label: "HR & Accounting",
        roles: ["HR Executive", "HR Admin", "Accountant"],
      },
      {
        label: "Customer Service",
        roles: ["Sales Executive", "Sales Admin"],
      },
      {
        label: "Legal",
        roles: ["Legal Executive", "Compliance Officer"],
      },
      {
        label: "Accounting",
        roles: [
          "International Accountant",
          "Bookkeeping Leader",
          "Accounting Consultant",
        ],
      },
    ],
    gleadsBbcNote:
      "Multi-entity HR support across Gleads VietNam and BBCIncorp JSC (parent–subsidiary)",
  },
} as const;

export type Profile = typeof profile;

export function getAboutHighlights(): AboutHighlight[] {
  return [
    { label: "Based in", value: profile.locationCity },
    { label: "Experience", value: "4+ years HR" },
    { label: "English", value: "TOEIC 905" },
    { label: "Chinese", value: "HSK4" },
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

/** Compact current-role rows for Overview. */
export function getOverviewRoles(): OverviewRole[] {
  return getCurrentEmployers().map((role) => ({
    company: role.company,
    title: role.title,
    period: role.period,
  }));
}

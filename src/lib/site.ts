export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Author = {
  name: string;
  self?: boolean;
};

export type Publication = {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint" | "thesis";
  href?: string;
};

export const site = {
  name: "Samuel Abedu",
  title: "Samuel Abedu",
  description:
    "PhD student in Software Engineering at Concordia University. Research on LLMs, mining software repositories, and software engineering for AI systems.",
  url: "https://sabedu.github.io",
  tagline: "Software engineering research for reliable AI systems",
  role: "PhD Researcher · Concordia University",
  location: "Montreal, QC",
  lab: {
    name: "DAS Lab",
    href: "https://das.encs.concordia.ca/members/samuel-abedu",
  },
  email: "samuel.abedu@mail.concordia.ca",
  alternateEmail: "s_abedu@encs.concordia.ca",
  profileImage: "/images/profile.png",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about/", label: "About" },
    { href: "/publications/", label: "Publications" },
    { href: "/projects/", label: "Projects" },
  ] satisfies NavItem[],
  social: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=xUIPO3gAAAAJ&hl=en",
    },
    { label: "GitHub", href: "https://github.com/sabedu" },
    { label: "DAS Lab", href: "https://das.encs.concordia.ca/members/samuel-abedu" },
    { label: "ORCID", href: "https://orcid.org/0009-0000-0472-4514" },
    { label: "X", href: "https://x.com/samwisegh" },
  ] satisfies SocialLink[],
  scholar: {
    citations: 98,
    hIndex: 5,
    i10Index: 4,
  },
  researchAreas: [
    "Empirical software engineering",
    "Mining software repositories",
    "Software engineering for AI systems",
    "Explainable AI for software engineering",
  ],
  bio: {
    intro:
      "I am a Software Engineering PhD student under Dr. Emad Shihab's supervision at Concordia University, working in the Data-driven Analysis of Software (DAS) Lab.",
    education: [
      "PhD in Software Engineering (ongoing), Concordia University",
      "MSc, University of Ghana",
      "BSc, University of Cape Coast",
    ],
    background:
      "Before starting my PhD, I worked as a software engineer, involved in planning, designing, developing, and deploying software products.",
  },
  awards: [
    "Concordia University International Tuition Award of Excellence, 2022",
    "Concordia Conference and Exposition Allowance, 2024",
  ],
  publications: [
    {
      title:
        "Synergizing LLMs and Knowledge Graphs: A Novel Approach to Software Repository-Related Question Answering",
      authors: [
        { name: "S. Abedu", self: true },
        { name: "S. Khatoonabadi" },
        { name: "E. Shihab" },
      ],
      venue: "ACM Transactions on Software Engineering and Methodology",
      year: 2026,
      type: "journal",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:IjCSPb-OGe4C",
    },
    {
      title:
        "Developer Challenges in the Adoption of Model Context Protocol in AI Agent Development",
      authors: [
        { name: "O. Oyelayo" },
        { name: "S. Abedu", self: true },
        { name: "S. Khatoonabadi" },
        { name: "E. Shihab" },
      ],
      venue:
        "Proceedings of the 2026 IEEE/ACM 7th International Workshop on Bots and Agents in Software Engineering (BoatSE)",
      year: 2026,
      type: "workshop",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:eQOLeE2rZwMC",
    },
    {
      title:
        "Experiences Developing an AI Chatbot in the Pharmaceutical Industry",
      authors: [
        { name: "S. Abedu", self: true },
        { name: "S. Owolabi" },
        { name: "M. S. Ruiz Rodriguez" },
        { name: "A. Yuen" },
        { name: "C. Lim Ah Tock" },
        { name: "A. Zaraket" },
        { name: "A. Abdellatif" },
        { name: "E. Shihab" },
        { name: "N. Nasseri" },
      ],
      venue:
        "Proceedings of the 2026 IEEE/ACM 7th International Workshop on Bots and Agents in Software Engineering (BoatSE)",
      year: 2026,
      type: "workshop",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:YsMSGLbcyi4C",
    },
    {
      title:
        "The Impact of Large Language Models (LLMs) on Code Review Process",
      authors: [
        { name: "A. Collante" },
        { name: "S. Abedu", self: true },
        { name: "S. H. Khatoonabadi" },
        { name: "A. Abdellatif" },
        { name: "E. Alor" },
        { name: "E. Shihab" },
      ],
      venue: "arXiv preprint arXiv:2508.11034",
      year: 2025,
      type: "preprint",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:W7OEmFMy1HYC",
    },
    {
      title:
        "RepoChat: An LLM-Powered Chatbot for GitHub Repository Question-Answering",
      authors: [
        { name: "S. Abedu", self: true },
        { name: "L. Menneron" },
        { name: "S. H. Khatoonabadi" },
        { name: "E. Shihab" },
      ],
      venue:
        "Proceedings of the 2025 IEEE/ACM 22nd International Conference on Mining Software Repositories (MSR)",
      year: 2025,
      type: "conference",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:Tyk-4Ss8FVUC",
    },
    {
      title:
        "LLM-Based Chatbots for Mining Software Repositories: Challenges and Opportunities",
      authors: [
        { name: "S. Abedu", self: true },
        { name: "A. Abdellatif" },
        { name: "E. Shihab" },
      ],
      venue:
        "Proceedings of the 28th International Conference on Evaluation and Assessment in Software Engineering (EASE)",
      year: 2024,
      type: "conference",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:9yKSN-GCB0IC",
    },
    {
      title: "An Exploratory Study on Machine Learning Model Management",
      authors: [
        { name: "J. Latendresse" },
        { name: "S. Abedu", self: true },
        { name: "A. Abdellatif" },
        { name: "E. Shihab" },
      ],
      venue: "ACM Transactions on Software Engineering and Methodology",
      year: 2024,
      type: "journal",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:UeHWp8X0CEIC",
    },
    {
      title:
        "An Empirical Study on Small-Sized Datasets Based on Eubank's Optimal Spacing Theorem",
      authors: [
        { name: "S. Abedu", self: true },
        { name: "S. Mensah" },
        { name: "F. Boafo" },
      ],
      venue: "SN Computer Science",
      year: 2024,
      type: "journal",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:zYLM7Y9cAGgC",
    },
    {
      title:
        "An Optimal Spacing Approach for Sampling Small-sized Datasets for Software Effort Estimation",
      authors: [
        { name: "S. Abedu", self: true },
        { name: "S. Mensah" },
        { name: "F. Boafo" },
        { name: "E. Bushel" },
        { name: "E. Akuafum" },
      ],
      venue:
        "Proceedings of the International Conference on Software Engineering and Information Systems",
      year: 2023,
      type: "conference",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:2osOgNQ5qMEC",
    },
    {
      title: "DeepLaBB: A Deep Learning Framework for Blocking Bugs",
      authors: [
        { name: "S. A. Brown" },
        { name: "B. A. Weyori" },
        { name: "A. F. Adekoya" },
        { name: "P. K. Kudjo" },
        { name: "S. Mensah" },
        { name: "S. Abedu", self: true },
      ],
      venue:
        "2021 International Conference on Cyber Security and Internet of Things (ICSIoT)",
      year: 2021,
      type: "conference",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:d1gkVwhDpl0C",
    },
    {
      title:
        "Machine Learning Algorithms on Small-Sized Datasets in Software Effort Estimation: A Comparative Study",
      authors: [{ name: "S. Abedu", self: true }],
      venue: "MSc Thesis, University of Ghana",
      year: 2021,
      type: "thesis",
    },
  ] as Publication[],
  cvUrl: "/files/cv.pdf",
} as const;

export const publicationTypeLabels: Record<Publication["type"], string> = {
  journal: "Journal",
  conference: "Conference",
  workshop: "Workshop",
  preprint: "Preprint",
  thesis: "Thesis",
};

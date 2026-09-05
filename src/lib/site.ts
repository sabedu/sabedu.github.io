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

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint" | "thesis";
  links: PublicationLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  organization?: string;
  year?: number;
  problem: string;
  contribution: string;
  outcome: string;
  technologies: string[];
  links: ProjectLink[];
};

export type Role = {
  title: string;
  organization: string;
  period?: string;
};

export const site = {
  name: "Samuel Abedu",
  title: "Samuel Abedu",
  description:
    "PhD Candidate and software engineer building reliable AI systems for developers. Research on LLMs, mining software repositories, and software engineering for AI systems.",
  url: "https://sabedu.github.io",
  tagline:
    "PhD Candidate and Software Engineer Building Reliable AI Systems for Developers",
  lead:
    "I research, develop and evaluate LLM-based systems that help developers understand, maintain and review software repositories.",
  role: "PhD Candidate in Software Engineering · Concordia University",
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
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samuel-abedu/",
    },
    { label: "DAS Lab", href: "https://das.encs.concordia.ca/members/samuel-abedu" },
    { label: "ORCID", href: "https://orcid.org/0009-0000-0472-4514" },
    { label: "X", href: "https://x.com/s_abedu" },
  ] satisfies SocialLink[],
  researchAreas: [
    "Empirical software engineering",
    "Mining software repositories",
    "Software engineering for AI systems",
    "LLM-based developer tools",
  ],
  bio: {
    intro:
      "I am a PhD Candidate in Software Engineering at Concordia University, supervised by Dr. Emad Shihab in the Data-driven Analysis of Software (DAS) Lab.",
    education: [
      "PhD Candidate in Software Engineering, Concordia University",
      "MPhil, University of Ghana",
      "BSc, University of Cape Coast",
    ],
    background:
      "Alongside my research, I build and deploy AI systems in industry. I have worked as a software engineer at Hubtel, contributed to an AI chatbot deployed with Sandoz in the pharmaceutical sector, and currently intern at the National Bank of Canada.",
  },
  currentRoles: [
    {
      title: "PhD Candidate",
      organization: "Concordia University",
    },
    {
      title: "Intern",
      organization: "National Bank of Canada",
      period: "August 2026 – present",
    },
    {
      title: "Program Committee Member",
      organization: "MSR 2027",
    },
    {
      title: "Reviewer",
      organization: "Information and Software Technology",
    },
  ] satisfies Role[],
  service: [
    "Program Committee, Mining Software Repositories (MSR) 2026",
    "Program Committee, Mining Software Repositories (MSR) 2027",
    "Reviewer, Information and Software Technology (IST)",
  ],
  awards: [
    "MSR 2026 Distinguished Junior PC Reviewer Award",
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
      links: [
        {
          label: "Paper",
          href: "https://das.encs.concordia.ca/pdf/abedu_TOSEM2026.pdf",
        },
        { label: "DOI", href: "https://doi.org/10.1145/3796510" },
        {
          label: "Code",
          href: "https://github.com/sabedu/knowledge_graph_llm_synergy",
        },
        {
          label: "Dataset",
          href: "https://zenodo.org/records/14271490",
        },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:eQOLeE2rZwMC",
        },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:YsMSGLbcyi4C",
        },
        { label: "Demo", href: "https://thedrug.guru" },
      ],
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
      links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2508.11034" },
        { label: "DOI", href: "https://arxiv.org/abs/2508.11034" },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://das.encs.concordia.ca/pdf/abedu2025repochat.pdf",
        },
        { label: "DOI", href: "https://doi.org/10.1109/MSR66628.2025.00126" },
        { label: "Code", href: "https://github.com/sabedu/repositoryChat" },
        {
          label: "Dataset",
          href: "https://zenodo.org/records/14673950",
        },
        { label: "Demo", href: "https://repochattool.streamlit.app/" },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://das.encs.concordia.ca/pdf/abedu2024llm.pdf",
        },
        { label: "DOI", href: "https://doi.org/10.1145/3661167.3661218" },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://seyviour.github.io/assets/pdf/jlatmodelmanagement.pdf",
        },
        { label: "DOI", href: "https://doi.org/10.1145/3688841" },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:zYLM7Y9cAGgC",
        },
      ],
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
        "Proceedings of the International Conference on Software Engineering and Knowledge Engineering (SEKE)",
      year: 2023,
      type: "conference",
      links: [
        {
          label: "Paper",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:2osOgNQ5qMEC",
        },
      ],
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
      links: [
        {
          label: "Paper",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:d1gkVwhDpl0C",
        },
      ],
    },
    {
      title:
        "Machine Learning Algorithms on Small-Sized Datasets in Software Effort Estimation: A Comparative Study",
      authors: [{ name: "S. Abedu", self: true }],
      venue: "MPhil Thesis, University of Ghana",
      year: 2021,
      type: "thesis",
      links: [],
    },
  ] as Publication[],
  projects: [
    {
      title: "Drug Information Chatbot",
      organization: "Sandoz",
      year: 2025,
      problem:
        "Healthcare professionals and patients need fast, reliable access to drug and pharmaceutical information, but existing tools are often fragmented and difficult to use in practice.",
      contribution:
        "Led development of an AI-powered chatbot that answers drug-information questions for real users in the pharmaceutical industry, from design through deployment.",
      outcome:
        "Deployed a production chatbot used to support drug-information access, with experiences documented in a peer-reviewed industry case study.",
      technologies: ["LLMs", "RAG", "Python", "Cloud deployment"],
      links: [
        { label: "Live demo", href: "https://thedrug.guru" },
        {
          label: "Paper",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUIPO3gAAAAJ&citation_for_view=xUIPO3gAAAAJ:YsMSGLbcyi4C",
        },
      ],
    },
    {
      title: "RepoChat",
      organization: "DAS Lab · Concordia University",
      year: 2025,
      problem:
        "Developers and non-technical stakeholders struggle to extract insights from GitHub repositories because repository data is spread across commits, issues, files, and metadata.",
      contribution:
        "Built a web-based chatbot that synergizes LLMs with knowledge graphs to translate natural-language questions into graph queries and return repository answers.",
      outcome:
        "Achieved 90% accuracy on a user study of 40 repository-related questions and released an open-source tool and replication package.",
      technologies: [
        "Python",
        "LangChain",
        "Neo4j",
        "GitHub GraphQL",
        "Streamlit",
      ],
      links: [
        { label: "Live demo", href: "https://repochattool.streamlit.app/" },
        { label: "Code", href: "https://github.com/sabedu/repositoryChat" },
        {
          label: "Paper",
          href: "https://das.encs.concordia.ca/pdf/abedu2025repochat.pdf",
        },
        { label: "DOI", href: "https://doi.org/10.1109/MSR66628.2025.00126" },
        {
          label: "Dataset",
          href: "https://zenodo.org/records/14673950",
        },
      ],
    },
  ] as Project[],
  cvUrl: "/files/cv.pdf",
} as const;

export const publicationTypeLabels: Record<Publication["type"], string> = {
  journal: "Journal",
  conference: "Conference",
  workshop: "Workshop",
  preprint: "Preprint",
  thesis: "Thesis",
};

export const publicationTypeStyles: Record<Publication["type"], string> = {
  journal: "bg-indigo-100 text-indigo-800",
  conference: "bg-emerald-100 text-emerald-800",
  workshop: "bg-violet-100 text-violet-800",
  preprint: "bg-amber-100 text-amber-900",
  thesis: "bg-slate-200 text-slate-700",
};

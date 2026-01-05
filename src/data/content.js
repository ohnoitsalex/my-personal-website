export const personalInfo = {
  name: "Alexander Onofrei",
  title: "Solutions Architect",
  degrees: "M.Sc & B.Eng",
  tagline: "Trilingual software engineer focused on cybersecurity, distributed and full-stack systems, and the design of scalable, mission-critical software. Equally driven by building reliable systems and pushing limits outdoors through running, climbing, and endurance sports.",
  email: "alexonofrei@hotmail.com",
  contactEmail: "alexonofrei@hotmail.com",
  linkedin: "https://www.linkedin.com/in/alexander-onofrei-60885b179"
};

export const skills = {
  languages: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'SQL', 'ProB'],
  frameworks: ['Spring Integration', 'Django', 'Angular', 'React', 'Node.js', 'Docker', 'Kubernetes', 'Git', 'Maven'],
  specializations: [
    "Object-Oriented & Procedural-Oriented architecture",
    "Highly distributed software design and architecture",
    "Solution architecture and system integration design",
    "Security Risk Assessments and Information Security Governance (OWASP, GDPR, ISO/IEC 27001 & 27005)",
    "Cryptography protocols (SSL/TLS, SSH, S/MIME, X.509), PKIs, Digital Signatures, PQC",
    "Network protocols (TCP/IP, UDP, HTTPS, SIP, SDP, MSRP, HELD)",
    "Automation and testing (JUnit, PyTest, Behave, Embunit)",
    "Messaging interfaces (HTTP/REST, SMS, WebSocket)",
    "Deployment tools (Azure DevOps, Kubernetes, Docker)",
    "Web service technologies (REST, SOAP, JSON, XML)",
    "Software operating systems: LINUX operating systems (UBUNTU, RedHat)"
  ]
};

export const experiences = [
  {
    title: "Solutions Architect",
    company: "Nav Canada",
    period: "Apr 2025 - Present",
    location: "Ottawa, ON",
    points: [
      "Architect and design scalable air traffic management solutions within the CAATS (Canadian Automated Air Traffic System) project",
      "Collaborate with cross-functional teams to define system requirements, interfaces, and technical specifications for mission-critical aviation systems",
      "Act as a liaison between engineering teams and stakeholders to ensure successful integration and deployment of new features",
      "Architect test design for project solutions",
      "Implement Agile Scrum development methodologies for all prototype development tasks"
    ]
  },
  {
    title: "Lead Engineer & Stakeholder",
    company: "Rezify",
    period: "Jan 2025 - Present",
    location: "Remote",
    points: [
      "Designed, implemented, and tested a production-grade web application and customer-facing landing page using JavaScript (React, Node.js)",
      "Built and integrated backend services with MongoDB for data persistence and application state management",
      "Deployed, hosted, and maintained the platform using Vercel (frontend) and Heroku (backend services)",
      "Defined, managed, and validated system and software requirements across the full development lifecycle",
      "Led a small team of software engineers, coordinating architecture decisions, task planning, and code reviews",
      "Gathered and managed client requirements, translating business needs into technical solutions in a fast-paced startup environment"
    ]
  },
  {
    title: "Software Developer & Security System Engineer",
    company: "MDA Space",
    period: "Sept 2023 - Mar 2025",
    location: "Ottawa, ON",
    points: [
      "Design secure software systems by developing security architecture, conducting risk assessments, and implementing controls aligned with OWASP, GDPR, and NIST standards to protect against threats and to reduce regulatory compliance",
      "Manage client requirements and worked with development teams, DevOps, and other stakeholders to integrate security best practices into the software lifecycle",
      "Design, develop, and test software components that support commercial satellite imagery and its related acquisition planning systems (CSIAPS) with the use of programming languages such as Java (Spring), Python, C++, build automation tools such as MAVEN and geospatial data handling with GDAL",
      "Deploy and manage Tomcat, Wildfly and Gitlab servers to support different process environments"
    ]
  },
  {
    title: "Software Engineer",
    company: "Motorola Solutions",
    period: "Jan 2021 - Aug 2022",
    location: "Gatineau, QC",
    points: [
      "Design, develop, and test SMS prototype supporting next-generation 911 SMS communication applications, incorporating SIP, SDP, and MSRP protocols. Utilized Spring Boot, Redis, C++, and Erlang",
      "Design, develop, and test full-stack cloud simulators for distributed systems, encouraging UML design, API design, endpoint design and front-end design. Employed Spring Boot, Angular, and MongoDB",
      "Containerize and deploy full-stack applications and prototypes in a cloud environment using Azure DevOps, Kubernetes, and Docker"
    ]
  },
  {
    title: "Software Engineer – Research Assistant",
    company: "3IT",
    period: "Sept 2021 - Dec 2021",
    location: "Sherbrooke, QC",
    points: [
      "Designed Python applications to collect data from solar panel sensors",
      "Built and managed PostgreSQL databases and Docker containers for Big Data"
    ]
  },
  {
    title: "Support Technician",
    company: "Shared Services Canada",
    period: "May 2020 - Aug 2020",
    location: "Ottawa, ON",
    points: [
      "Provided technical support for the development, integration, deployment, and maintenance of IT infrastructure components",
      "Processed large text files and extracted critical data using AWK and UNIX shell scripting",
      "Performed hardware and software inventory and kept records up to date",
      "Updated backup and recovery processes and procedures",
      "Assessed impact of hardware and software changes on the IT environment",
      "Supported IT asset acquisition and lifecycle management"
    ]
  }
];

export const publications = [
  {
    type: "Master's Thesis",
    title: "Cryptographic Agility in TLS Implementations",
    authors: "Alexander Onofrei",
    venue: "University of Sherbrooke",
    date: "December 1, 2024",
    description: "Research on automated testing methodologies for TLS implementations with focus on cryptographic agility and post-quantum readiness.",
    link: "https://usherbrooke.scholaris.ca/items/00b84bd3-31f2-411b-b660-be57a10b6b4d"
  },
  {
    type: "Conference Paper",
    title: "Model-Based Testing of Non-Deterministic Systems",
    authors: "Alexander Onofrei, Marc Frappier, Émilie Bernard",
    venue: "ABZ Conference",
    location: "Düsseldorf, Germany",
    date: "June 2025",
    description: "Automated approach to generate non-deterministic tests using model-based methodologies for identifying flaws in TLS implementations.",
    link: "https://dl.acm.org/doi/10.1007/978-3-031-94533-5_21"
  }
];

export const education = [
  {
    degree: "Master of Science",
    field: "Software Engineering & Cybersecurity",
    school: "University of Sherbrooke, Sherbrooke, QC"
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering - COOP Program",
    school: "University of Ottawa, Ottawa, ON",
    honors: "Magna Cum Laude • Dean's List Honouree"
  },
  {
    degree: "Google Cybersecurity Certificate",
    field: "Google - Online"
  }
];

export const projects = [
  {
    badge: "HACKATHON CHALLENGE DESIGN",
    title: "UOttawaHack 2026 - Nav Canada Challenge",
    subtitle: "University of Ottawa Hackathon 2026",
    description: "Partnered with Nav Canada to design and deliver the main hackathon challenge for UOttawaHack 2026. Crafted a real-world aviation systems problem that challenged participants to develop innovative solutions for air traffic management. Defined comprehensive technical requirements, evaluation criteria, and constraints that balanced complexity with accessibility for diverse skill levels. Provided technical mentorship and guidance to hackathon teams throughout the event, offering insights into aviation systems, distributed architectures, and industry best practices.",
    technologies: ["Challenge Design", "Aviation Systems", "Mentorship", "Nav Canada Partnership", "Technical Leadership"]
  },
  {
    badge: "FULL-STACK WEB APPLICATION",
    title: "Rezify - Property Management Platform",
    subtitle: "rezify.ca",
    link: "https://rezify.ca",
    description: "Production-grade property management web application featuring tenant onboarding, lease management, and maintenance tracking. Designed and implemented a modern full-stack architecture with React frontend and Node.js backend, integrated with MongoDB for scalable data persistence. Deployed using industry-standard cloud infrastructure: Vercel for frontend hosting with automatic deployments, and Heroku for backend services. Led end-to-end development including requirements gathering, system design, implementation, testing, and deployment. Managed a small engineering team, coordinating sprint planning, code reviews, and architectural decisions in a fast-paced startup environment.",
    technologies: ["React", "Node.js", "MongoDB", "Vercel", "Heroku", "Full-Stack Development"]
  },
  {
    badge: "CYBERSECURITY",
    title: "TLS Protocol Testing Framework",
    description: "Automated Java application using model-based methodologies to generate non-deterministic tests for TLS implementations. Reverse engineered OpenSSL to evaluate crypto-agility and identify design patterns for protocol resilience. Collaborated with Entrust, the Canadian National Quantum-Readiness Group, and the Canadian Forum for Digital Infrastructure Resilience.",
    technologies: ["Java", "Cryptography", "OpenSSL", "Model-Based Testing", "Post-Quantum Cryptography"]
  },
  {
    badge: "EMBEDDED SYSTEMS",
    title: "Drone-Mountable Cellular Frequency Scanner",
    subtitle: "University of Ottawa – Capstone Project",
    description: "Designed, implemented, and tested a drone-mountable cellular frequency scanner capable of operating in remote environments to detect and localize ping signals emitted by mobile phones. Developed the system to support search and rescue operations in areas without cellular network coverage, improving victim localization capabilities. Designed and implemented a server-side application to collect telemetry and detection data from the drone-mounted scanner and dispatch actionable information to ground-based rescue teams.",
    technologies: ["Arduino", "Spring Boot", "React", "Embedded Systems", "RF Detection", "Search & Rescue"]
  }
];

export const photographyImages = {
  featured: [
    "/images/photography/_DSC2608.JPG",
    "/images/photography/_DSC2213.JPG"
  ],
  grid: [
    "/images/photography/_DSC2271.JPG",
    "/images/photography/_DSC2368.JPG",
    "/images/photography/_DSC2844.JPG"
  ],
  asymmetric: [
    "/images/photography/_DSC2039.JPG",
    "/images/photography/DSC01439.jpeg"
  ],
  squares: [
    "/images/photography/DSC01448.jpeg",
    "/images/photography/DSC01455.jpeg",
    "/images/photography/DSC01485.jpeg",
    "/images/photography/DSC01306.jpg"
  ],
  carousel: [
    "/images/photography/caroussel/DSC01369.jpeg",
    "/images/photography/caroussel/DSC01479.jpeg",
    "/images/photography/caroussel/DSC02584.jpg",
    "/images/photography/caroussel/DSC02593.jpg",
    "/images/photography/caroussel/_DSC2132.JPG",
    "/images/photography/caroussel/_DSC2339.JPG",
    "/images/photography/caroussel/_DSC2503.JPG",
    "/images/photography/caroussel/_DSC2511.JPG"
  ]
};

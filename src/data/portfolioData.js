export const personalInfo = {
  name: "Kanishka N",
  title: "Computer Science & Engineering Student",
  institution: "Chennai Institute of Technology",
  year: "2nd Year Undergraduate",
  tagline: "Building intelligent systems, solving algorithmic puzzles, and crafting modern web experiences.",
  typewriterTitles: [
    "Aspiring Software Engineer",
    "AI & Machine Learning Enthusiast",
    "Data Science & Analytics Practitioner",
    "Competitive Problem Solver (412+ DSA)"
  ],
  statusBadge: "Available for Software Engineering & AI Internships",
  bio: "2nd-year Computer Science & Engineering undergraduate at Chennai Institute of Technology with a strong foundation in full-stack web development, data analysis, and algorithmic problem solving. Passionate about transforming complex problems into elegant, reliable applications.",
  avatar: "/profile.jpg",
  email: "kanishkan.cse2025@citchennai.net",
  phone: "+91 9444623779",
  location: "Chennai, Tamil Nadu, India",
  socials: {
    github: "https://github.com/x-Kani-x",
    linkedin: "https://www.linkedin.com/in/kanishka-nandha-22429a376/",
    leetcode: "https://leetcode.com/",
    codeforces: "https://codeforces.com/",
  },
  metrics: [
    { label: "CGPA (First Year)", value: "8.52", sub: "Chennai Institute of Technology" },
    { label: "DSA Problems Solved", value: "412+", sub: "LeetCode, Skillrack, Codeforces" },
    { label: "Featured Projects", value: "5+", sub: "AI, ML, Security & Web" },
    { label: "Certifications & Badges", value: "8+", sub: "Oracle, Google Cloud, DataCamp" },
  ]
};

export const educationList = [
  {
    institution: "Chennai Institute of Technology",
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    period: "2024 – 2028 (Currently in 2nd Year)",
    score: "CGPA: 8.52 (First Year)",
    badge: "Undergraduate",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Consistent academic performer with focus on Core Computer Science foundations.",
      "Key subjects: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems.",
      "Active participant in technical symposiums, hackathons, and competitive coding clubs."
    ]
  },
  {
    institution: "Velammal Vidhyashram, Surapet",
    degree: "Central Board of Secondary Education (CBSE) – Class 12",
    period: "Completed",
    score: "Score: 415 / 500 (83.0%)",
    badge: "Senior Secondary (12th)",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Specialized in Physics, Chemistry, Mathematics, and Computer Science streams.",
      "Developed early aptitude for programming logic and computational problem solving."
    ]
  },
  {
    institution: "Velammal Vidhyashram, Surapet",
    degree: "Central Board of Secondary Education (CBSE) – Class 10",
    period: "Completed",
    score: "Score: 456 / 500 (91.2%)",
    badge: "Secondary School (10th)",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Achieved distinction with 91.2% overall aggregate.",
      "Excellence in Mathematics and Science foundations."
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages used for problem solving and backend application logic.",
    skills: [
      { name: "Python", level: "Advanced", tag: "Primary" },
      { name: "C++", level: "Proficient", tag: "DSA & CP" },
      { name: "C", level: "Proficient", tag: "Foundations" },
      { name: "JavaScript (ES6+)", level: "Intermediate", tag: "Web" }
    ]
  },
  {
    category: "Web & Modern Frontend",
    icon: "Layout",
    description: "Frameworks and technologies for responsive, interactive user interfaces.",
    skills: [
      { name: "React", level: "Intermediate", tag: "Frontend" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
      { name: "HTML5 & CSS3", level: "Advanced", tag: "Markup" },
      { name: "Responsive UI Design", level: "Proficient", tag: "Design" }
    ]
  },
  {
    category: "Developer Tools & Platforms",
    icon: "Wrench",
    description: "Workflow utilities, version control, and development environments.",
    skills: [
      { name: "Git", level: "Proficient", tag: "Version Control" },
      { name: "GitHub", level: "Proficient", tag: "Collaboration" },
      { name: "Visual Studio Code", level: "Advanced", tag: "Editor" },
      { name: "Snowflake SQL", level: "Intermediate", tag: "Cloud Data" }
    ]
  },
  {
    category: "Core Computer Science Concepts",
    icon: "Cpu",
    description: "Algorithmic thinking and fundamental computer science principles.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Proficient", tag: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", tag: "Architecture" },
      { name: "Machine Learning Fundamentals", level: "Intermediate", tag: "AI/ML" },
      { name: "Cybersecurity Basics", level: "Intermediate", tag: "Security" }
    ]
  },
  {
    category: "Professional & Soft Skills",
    icon: "Sparkles",
    description: "Key behavioral qualities that drive team success and individual execution.",
    skills: [
      { name: "Problem-Solving & Analytical Thinking", level: "Core", tag: "Mindset" },
      { name: "Team Collaboration & Communication", level: "Core", tag: "People" },
      { name: "Adaptability & Rapid Learning", level: "Core", tag: "Growth" },
      { name: "Time Management & Self-Motivation", level: "Core", tag: "Discipline" },
      { name: "Creative Thinking & Attention to Detail", level: "Core", tag: "Design" }
    ]
  }
];

export const projectsList = [
  {
    title: "Hexashield – Cybersecurity Assistant",
    category: "Cybersecurity",
    badgeColor: "bg-red-50 text-red-600 border-red-200",
    description: "An intelligent cybersecurity assistant designed to educate and protect users against potential digital threats, vulnerabilities, and unauthorized intrusions.",
    highlights: [
      "Provides real-time security guidance and risk assessment for everyday digital users.",
      "Helps identify suspicious anomalies and recommends mitigation best practices.",
      "Engineered with clean architectural separation for modular security rule definitions."
    ],
    techStack: ["Python", "Cybersecurity", "Threat Analysis", "VS Code"],
    githubUrl: "https://github.com/x-Kani-x"
  },
  {
    title: "CyberShield AI – Scam Detection",
    category: "Artificial Intelligence",
    badgeColor: "bg-brand-50 text-brand-600 border-brand-200",
    description: "An AI-powered conceptual framework that actively analyzes message contents, URLs, and communication patterns to flag potential phishing scams and malicious activities.",
    highlights: [
      "Identifies deceptive patterns in online messages and fraudulent phishing hooks.",
      "Employs heuristic parsing and AI-driven classification techniques.",
      "Focuses on safeguarding unsuspecting internet users from digital financial fraud."
    ],
    techStack: ["Artificial Intelligence", "Python", "Pattern Detection", "NLP Concepts"],
    githubUrl: "https://github.com/x-Kani-x"
  },
  {
    title: "Stock Market Trend Prediction",
    category: "Machine Learning",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    description: "A machine learning pipeline that predicts short-term stock market price movements and momentum based on historical NIFTY 50 financial datasets.",
    highlights: [
      "Executed comprehensive data preprocessing, moving averages, and feature engineering on NIFTY 50 data.",
      "Trained and evaluated regression and classification models to benchmark prediction accuracy.",
      "Visualized indicators, trends, and backtested performance using Python data science libraries."
    ],
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "NIFTY 50 Data"],
    githubUrl: "https://github.com/x-Kani-x"
  },
  {
    title: "Multilingual OCR Verification",
    category: "Deep Learning / ML",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    description: "A deep learning OCR pipeline that extracts, normalizes, and verifies printed and scanned textual information across multiple languages.",
    highlights: [
      "Accurately extracts multilingual typography from various document formats and noisy scans.",
      "Implements text validation and post-processing heuristics to ensure high character recognition fidelity.",
      "Enables automated verification pipelines for identity and document processing."
    ],
    techStack: ["Deep Learning", "Python", "OCR", "Computer Vision", "Text Processing"],
    githubUrl: "https://github.com/x-Kani-x"
  },
  {
    title: "SmartSpend – AI Expense Tracker",
    category: "Personal Finance AI",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
    description: "An intelligent personal finance manager featuring automated expense categorization, real-time overspending alerts, and visual budget optimization.",
    highlights: [
      "Automatically groups expenditures into essential vs discretionary buckets.",
      "Generates proactive real-time notifications when category spending thresholds are breached.",
      "Provides intuitive analytical charts to help users manage personal savings and budgeting goals."
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Data Analytics", "Personal Finance"],
    githubUrl: "https://github.com/x-Kani-x"
  }
];

export const experienceList = [
  {
    company: "Thiranex",
    role: "Data Analyst Intern",
    period: "4 Weeks Internship",
    location: "Remote / Hybrid",
    badge: "Industry Internship",
    description: "Hands-on data analytics internship focused on end-to-end data processing, exploratory analysis, and visualization.",
    responsibilities: [
      "Worked on real-world data analysis tasks utilizing Python and its data analysis ecosystem (Pandas, NumPy).",
      "Conducted exploratory data analysis (EDA) to uncover trends, outliers, and meaningful business patterns.",
      "Gained practical exposure to data cleaning, preprocessing workflows, and presenting visual data summaries."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Data Visualization", "EDA"]
  },
  {
    company: "AICTE & EduSkills Academy",
    role: "Python Full Stack Developer Virtual Internship",
    period: "10-Week Virtual Internship (Oct – Dec 2025)",
    location: "AICTE Virtual Internship Portal",
    badge: "Government & Academy Recognized",
    description: "Comprehensive 10-week intensive training program endorsed by AICTE, Ministry of Education, and EduSkills.",
    responsibilities: [
      "Completed full stack development modules covering Python fundamentals, OOP, and web architectures.",
      "Built structured modules integrating front-end templates with backend Python logic and database operations.",
      "Earned internship certificate of accomplishment backed by AICTE and EduSkills Academy."
    ],
    technologies: ["Python", "Full Stack Development", "Web Services", "Database Integration"]
  }
];

export const certificationsList = [
  {
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle University",
    date: "September 17, 2026",
    badge: "Oracle Certified Associate",
    category: "Artificial Intelligence & Database",
    icon: "Database",
    color: "from-rose-500 to-red-600"
  },
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "September 17, 2026",
    badge: "Oracle Certified Associate",
    category: "Cloud AI & Infrastructure",
    icon: "Cloud",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    issuer: "Google Cloud",
    date: "Introductory Skill Badge",
    badge: "Google Cloud Skill Badge",
    category: "Generative AI",
    icon: "Bot",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Create Your First Gemini Enterprise Application",
    issuer: "Google Cloud",
    date: "Introductory Skill Badge",
    badge: "Google Cloud Skill Badge",
    category: "Enterprise AI",
    icon: "Sparkles",
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Introduction to Snowflake, SQL & Data Modeling",
    issuer: "DataCamp",
    date: "September 12, 2026",
    badge: "DataCamp Verified",
    category: "Cloud Data Warehousing",
    icon: "Server",
    color: "from-teal-500 to-emerald-600"
  },
  {
    title: "Python Essentials Part 1",
    issuer: "Cisco Networking Academy",
    date: "Verified Certification",
    badge: "Cisco Academy",
    category: "Python Programming",
    icon: "Terminal",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Data Science Certification",
    issuer: "WorldQuant University",
    date: "Verified Certification",
    badge: "WorldQuant",
    category: "Data Science & Quantitative Analysis",
    icon: "LineChart",
    color: "from-purple-500 to-brand-600"
  }
];

export const achievements = {
  totalSolved: 412,
  platforms: [
    {
      name: "LeetCode",
      count: "266",
      label: "Problems Solved",
      color: "from-amber-500 to-yellow-600",
      description: "Consistent practice covering Arrays, Strings, Two Pointers, Trees, Hash Maps, and Dynamic Programming.",
      url: "https://leetcode.com/"
    },
    {
      name: "Skillrack",
      count: "110",
      label: "Problems Solved",
      color: "from-brand-500 to-brand-700",
      description: "Fast logic building and algorithmic implementations in C, C++, and Python.",
      url: "#"
    },
    {
      name: "Codeforces",
      count: "36",
      label: "Problems Solved",
      color: "from-blue-500 to-indigo-600",
      description: "Competitive contest challenges emphasizing time-efficient implementations and mathematical logic.",
      url: "https://codeforces.com/"
    }
  ],
  stats: [
    { label: "Algorithms Solved", value: "412+" },
    { label: "Languages Used", value: "Python, C++, C" },
    { label: "College Standing", value: "Top Tier (8.52 CGPA)" },
    { label: "Certifications Earned", value: "8+ Industry Badges" }
  ]
};

export const careerInterests = [
  {
    title: "Software & Application Development",
    icon: "Layers",
    description: "Designing and engineering robust, scalable software architectures, modern full-stack web applications, and intuitive user experiences.",
    roles: ["Software Development Engineer (SDE)", "Full Stack Developer", "Backend Engineer"]
  },
  {
    title: "Data Science & Data Analytics",
    icon: "BarChart3",
    description: "Uncovering actionable business insights, building automated data processing pipelines, and crafting compelling data visualizations.",
    roles: ["Data Analyst", "Data Engineer", "Business Intelligence Specialist"]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: "Brain",
    description: "Leveraging generative models, predictive analytics, and computer vision to solve impactful real-world challenges.",
    roles: ["AI/ML Engineer", "Applied AI Developer", "Research Engineer"]
  },
  {
    title: "Cybersecurity & Digital Protection",
    icon: "ShieldCheck",
    description: "Exploring defense mechanisms, anomaly detection, secure software engineering practices, and digital threat prevention.",
    roles: ["Security Analyst", "Threat Intelligence Researcher", "Cybersecurity Specialist"]
  }
];

export const slidesMeta = [
  { id: "hero", title: "Home", subtitle: "Profile & Introduction" },
  { id: "about", title: "About & Education", subtitle: "Academics & Journey" },
  { id: "skills", title: "Skills Matrix", subtitle: "Technical & Soft Skills" },
  { id: "projects", title: "Projects", subtitle: "5 Featured Builds" },
  { id: "experience", title: "Experience", subtitle: "Internships & Industry" },
  { id: "certifications", title: "Certifications", subtitle: "Badges & Credentials" },
  { id: "achievements", title: "Achievements", subtitle: "Competitive Coding" },
  { id: "contact", title: "Contact", subtitle: "Connect & Inquire" }
];

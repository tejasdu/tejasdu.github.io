const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const portfolioData = {
  personal: {
    name: "Tejas Dumpeta",
    role: "Engineer",
    avatar: asset("/pfp-focus.jpg"),
    statusBadge: "Open to Software Engineering Roles",
    location: "Ann Arbor, MI • United States",
    shortBio: "Product and solutions-oriented software engineer who loves to identify ambiguous stakeholder needs and transform them into actionable execution plans to create real business impact.",
    extendedBio: "I recently completed a B.S. in Computer Science at the University of Michigan and am looking for the next step in my career. I thrive in environments where I can collaborate across teams, continuously learn, and problem-solve in fast-paced situations.",
    socials: {
      github: "https://github.com/tejasdu",
      linkedin: "https://www.linkedin.com/in/tejas-dumpeta/",
      email: "tejasd2022@gmail.com",
      phone: "+1 (734) 489-4824",
      resume: "https://drive.google.com/file/d/1xhnspHIxKwvVYdZ-IncYfYQGKHef3mAQ/view?usp=sharing",
    },
    bentoHighlights: [
      {
        title: "Education",
        value: "B.S. in Computer Science",
        subtext: "University of Michigan '26",
        badge: "Degree"
      },
      {
        title: "Focus Areas",
        value: "Real-Time Systems & Data Pipelines",
        subtext: "Scalable APIs & Cloud Infrastructure",
        badge: "Specialty"
      }
    ]
  },

  education: {
    degree: "B.S. in Computer Science",
    school: "University of Michigan - Ann Arbor",
    period: "August 2022 – May 2026",
    schoolLogo: asset("/logos/umich-its.png"),
    coursework: [
      {
        name: "Database Management Systems",
        topic: "Relational algebra, SQL query optimization, B+ tree indexing internals, and ACID concurrency control with write-ahead logging (WAL)."
      },
      {
        name: "Computer Networks",
        topic: "Socket programming, TCP flow & congestion control, packet routing algorithms (BGP/OSPF), and transport protocols across the network stack."
      },
      {
        name: "Data Structures & Algorithms",
        topic: "Advanced algorithmic paradigms including dynamic programming, graph traversals, balanced trees, heaps, and asymptotic runtime analysis."
      },
      {
        name: "Intro to Artificial Intelligence",
        topic: "Heuristic state-space search (A*), adversarial game trees (minimax/alpha-beta), Markov Decision Processes, and reinforcement learning."
      },
      {
        name: "Computer Organization",
        topic: "CPU microarchitecture, 5-stage instruction pipelining, multi-level cache hierarchies, virtual memory paging, and assembly linkage."
      },
      {
        name: "Computer Science Theory",
        topic: "Finite automata, Turing decidability, computational complexity classes (P vs. NP reductions), cryptography, and randomized algorithms."
      },
      {
        name: "Statistics & Data Analysis",
        topic: "Statistical inference, hypothesis testing, linear regression modeling, sampling distributions, and probabilistic data analysis in R."
      },
      {
        name: "User Interface Development",
        topic: "Event-driven front-end architectures, DOM state management, usability heuristics, accessibility standards, and responsive web design."
      },
      {
        name: "Digital Product Design",
        topic: "User-centered design methodologies, interactive Figma prototyping, design system architecture, and stakeholder problem discovery."
      },
      {
        name: "Software Engineering Principles",
        topic: "Large-scale software lifecycle management, mutation and integration testing, static code analysis, and automated CI/CD workflows."
      }
    ]
  },
  
  experiences: [
    {
      id: "exp-1",
      role: "Software Developer Intern",
      company: "University of Michigan - IT Services",
      companyUrl: "https://its.umich.edu",
      logo: asset("/logos/umich-its.png"),
      logoFit: "cover",
      logoBg: "bg-[#00274c]",
      period: "May 2025 – May 2026",
      location: "Ann Arbor, MI",
      summary: "Architected automated real-time ETL pipelines and high-throughput NDJSON streaming services across enterprise networks.",
      techStack: ["Python", "FastAPI", "NDJSON", "PostgreSQL", "AWS", "OpenShift", "Docker", "REST APIs"],
      achievements: [
        "Architected automated ETL pipelines integrating Sunbird DC Track and Netbox APIs to synchronize server inventory across 23,000+ network devices in real time.",
        "Redesigned Wi-Fi analytics backend by replacing legacy Splunk polling with FastAPI NDJSON streaming, enabling low-latency, real-time delivery of RADIUS queries."
      ]
    },
    {
      id: "exp-2",
      role: "Software Developer Intern",
      company: "Capoom",
      companyUrl: "https://www.capoom.com/",
      logo: asset("/logos/capoom.png"),
      logoFit: "cover-left",
      logoBg: "bg-zinc-950",
      period: "August 2025 – December 2025",
      location: "Ann Arbor, MI",
      summary: "Engineered high-throughput 3D reconstruction and synthetic data pipelines for autonomous vehicle simulation.",
      techStack: ["Python", "PyTorch", "Gaussian Splatting", "Semantic Segmentation", "Inpainting", "Computer Vision"],
      achievements: [
        "Engineered an end-to-end 3D reconstruction pipeline using Gaussian Splatting to process 18,000+ real-world images into an autonomous vehicle digital twin of the Mcity test track.",
        "Integrated semantic segmentation and inpainting workflows into the pipeline to enable dynamic object removal, insertion, and synthetic edge-case scenario generation."
      ]
    },
    {
      id: "exp-3",
      role: "Technical Solutions Consultant",
      company: "University of Michigan - IT Services",
      companyUrl: "https://its.umich.edu",
      logo: asset("/logos/umich-its.png"),
      logoFit: "cover",
      logoBg: "bg-[#00274c]",
      period: "July 2024 – May 2026",
      location: "Ann Arbor, MI",
      summary: "Provided frontline technical consulting and cross-system incident diagnostics across 19+ campus departments.",
      techStack: ["Technical Consulting", "Incident Management", "Stakeholder Triage", "Linux", "macOS", "Diagnostics"],
      achievements: [
        "Delivered frontline technical consulting and diagnostic resolutions for 50,000+ faculty and students across 19+ campus departments and 3 campus computing sites.",
        "Triaged and resolved complex system incidents across university enterprise software and macOS, Windows, and Linux environments."
      ]
    },
    {
      id: "exp-4",
      role: "Technology and Cybersecurity Intern",
      company: "Spire Investment Partners",
      companyUrl: "https://www.spireip.com/",
      logo: asset("/logos/spire.png"),
      logoFit: "cover-left",
      logoBg: "bg-white",
      period: "June 2024 – August 2024",
      location: "McLean, VA",
      summary: "Scoped identity architecture and engineered automated onboarding workflows across Microsoft cloud infrastructure.",
      techStack: ["Azure", "SQL", "REST APIs", "SDLC", "Security & Compliance", "Technical Documentation"],
      achievements: [
        "Built a centralized staff directory and identity verification pipeline via Azure and SQL REST APIs for 300+ employees, cutting onboarding approval time by 60%.",
        "Managed concurrent security and IT initiatives across the full SDLC, authoring system architecture documentation and rollout plans for executive stakeholders."
      ]
    },
    {
      id: "exp-5",
      role: "Research Intern",
      company: "Skylark Drones",
      companyUrl: "https://skylarkdrones.com/",
      logo: asset("/logos/skylark.png"),
      logoFit: "cover",
      logoBg: "bg-[#ea532a]",
      period: "June 2023 – August 2023",
      location: "Bengaluru, India",
      summary: "Optimized aerial dataset processing algorithms for enterprise geospatial 3D scene reconstruction.",
      techStack: ["Python", "Geospatial Data", "Image Processing", "Algorithms", "Optimization"],
      achievements: [
        "Built an aerial photo deduplication tool that accelerated post-mission image processing by 20% for enterprise 3D geospatial site reconstruction."
      ]
    }
  ],

  projects: [
    {
      id: "proj-pitwall",
      title: "F1 Pitwall Telemetry Engine",
      badge: "Real-Time Systems",
      category: "Systems & Infrastructure",
      tagline: "60 FPS real-time telemetry streaming engine broadcasting sub-frame synchronized spatial coordinates and powertrain metrics across 20 vehicles with <15ms client latency.",
      liveUrl: "https://pitwall-f1.live/",
      githubUrl: "https://github.com/tejasdu/pitwall-telemetry-engine",
      techStack: ["Python", "FastAPI", "WebSockets", "Docker", "Nginx", "OCI", "Pandas", "Pydantic"],
      highlights: [
        "Architected a 60 FPS real-time telemetry streaming engine using Python 3.12, FastAPI, and WebSockets broadcasting synchronized telemetry across 20 vehicles with <15ms latency.",
        "Synchronized multi-rate asynchronous time-series streams (~3–4 Hz GPS, ~10–20 Hz sensors) via binary search and linear temporal interpolation for jitter-free playback.",
        "Engineered an offline pre-warmed NVMe caching pipeline ingesting ~17 GB across 87 Grand Prix, deployed via Docker Compose on Oracle Cloud with Nginx."
      ],
      deepDive: {
        problem: "Multi-rate sensor streams (~3-4 Hz GPS vs. ~10-20 Hz powertrain sensors) produce temporal desynchronization and jitter across 20 simultaneous vehicles.",
        solution: "Decoupled sensor streams with vectorized binary search interpolation and an in-memory ring buffer, backed by pre-warmed NVMe caching with exponential backoff.",
        architecture: "Telemetry Ingestion (FastAPI/Pandas) → Binary Search Temporal Interpolator → WebSocket Ring Buffer (60 FPS, <15ms) → Nginx (OCI Arm64)."
      }
    },
    {
      id: "proj-selectaurant",
      title: "Selectaurant",
      badge: "Real-Time Multiplayer",
      category: "Full-Stack & Systems",
      tagline: "Real-time multiplayer decision engine that lets groups create private lobbies, filter restaurants via Google Places API, and vote via WebSockets.",
      liveUrl: "https://selectaraunt.up.railway.app/",
      githubUrl: "https://github.com/MishanGagnon/restaurant",
      techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Supabase", "Socket.io", "Google Places API"],
      highlights: [
        "Architected event-driven WebSocket communication layers with Socket.io to sync live lobby states and derived vote counts in real time.",
        "Developed Node.js APIs to handle lobby permissions and validate server-side votes in Supabase with an animated card carousel leaderboard."
      ],
      deepDive: {
        problem: "Group dining decisions suffer from analysis paralysis and slow asynchronous back-and-forth messaging.",
        solution: "A gamified, synchronous voting room with live WebSocket state updates and geo-filtered restaurant discovery.",
        architecture: "Next.js + Tailwind UI → Socket.io Event Bus → Node.js / Express API → Supabase PostgreSQL + Google Places API."
      }
    },
    {
      id: "proj-umazing",
      title: "UMazing • AI Academic Advisor",
      badge: "AI & Distributed Workflow",
      category: "AI & Systems",
      tagline: "Intelligent academic advisor with multi-step agentic tool calling to validate student transcripts against strict degree rules.",
      devpostUrl: "https://devpost.com/software/umazing",
      githubUrl: "https://github.com/MishanGagnon/mhacks2024",
      techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "FastAPI", "OpenAI", "Railway", "Vercel"],
      highlights: [
        "Scraped 500+ EECS course catalogs and built PDF transcript ingestion services with PostgreSQL caching for conversational continuity.",
        "Architected backend API routes integrating OpenAI multi-step tool calling to validate strict degree requirements and stream course recommendations."
      ],
      deepDive: {
        problem: "Academic degree audits are manual and error-prone, requiring hours of cross-referencing against complex prerequisites.",
        solution: "Automated transcript OCR combined with structured LLM agent tool-calling against verified EECS course catalog schemas.",
        architecture: "React + Next.js UI → FastAPI Python Backend → OpenAI Tool-Calling Agent → PostgreSQL Cache → Railway/Vercel."
      }
    },
    {
      id: "proj-neuroprosthetics",
      title: "Michigan Neuroprosthetics - Pediatric Device Interface",
      badge: "Hardware & Telemetry",
      category: "Mobile & Embedded Systems",
      tagline: "iOS application and backend telemetry hub interfacing with pediatric prosthetic arm firmware via Bluetooth Low Energy (BLE).",
      liveUrl: null,
      githubUrl: null,
      techStack: ["React Native", "Node.js", "Express.js", "BLE", "REST APIs", "Figma"],
      highlights: [
        "Designed iOS app flows in Figma and React Native, building Node.js APIs and Bluetooth Low Energy (BLE) pairing flows for pediatric patients.",
        "Integrated Bluetooth Low Energy communication protocols to establish persistent, low-latency device pairing and synchronize real-time motor telemetry."
      ],
      deepDive: {
        problem: "Pediatric prosthetic devices require rapid calibration and intuitive, low-latency motor feedback without complicated setup steps.",
        solution: "Low-overhead BLE communication protocol paired with an accessible, friendly mobile interface designed specifically for young patients.",
        architecture: "React Native iOS App → CoreBluetooth / BLE Protocol → Prosthetic Arm Firmware ⇄ Node.js / Express Auth API."
      }
    }
  ],

  skills: {
    categories: [
      {
        name: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Go", "R"]
      },
      {
        name: "Frameworks & Libraries",
        skills: ["FastAPI", "React", "Next.js", "Node.js", "Redis", "Socket.io", "PyTorch", "Pandas", "NumPy", "Tailwind CSS", "REST APIs"]
      },
      {
        name: "Systems & Platforms",
        skills: ["Docker", "Kubernetes", "OpenShift", "PostgreSQL", "Azure", "AWS", "Supabase", "Figma", "Vercel", "Railway", "CI/CD"]
      },
      {
        name: "Product & Engineering Strategy",
        skills: ["Requirement Scoping", "Stakeholder Discovery", "Technical Documentation", "Workflow Automation", "Cross-Functional Triage", "SDLC"]
      }
    ]
  }
}

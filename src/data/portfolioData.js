const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const portfolioData = {
  personal: {
    name: "Tejas Dumpeta",
    role: "Engineer",
    avatar: asset("/pfp-focus.jpg"),
    statusBadge: "Open to Software Engineering Roles",
    location: "Ann Arbor, MI • United States",
    shortBio: "Product and solutions-oriented engineer who loves the technical challenge of identifying ambiguous stakeholder needs and transforming them into actionable solutions to drive real business impact.",
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
        "Redesigned the backend of a Wi-Fi Usage Data analytics application by replacing a legacy Splunk polling with FastAPI NDJSON streaming, enabling low-latency, real-time delivery of RADIUS queries."
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
        "Delivered technical diagnostic resolutions on university-managed applications & software for faculty and students across 19+ campus departments and 3 campus computing sites to aid in smooth business operations.",
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
        "Built an aerial photo deduplication tool that accelerated post-drone mission image processing by 20% for worksite visualization in an enterprise 3D geospatial site analytics platform."
      ]
    }
  ],

  projects: [
    {
      id: "proj-pitwall",
      title: "F1 Pitwall Telemetry Engine",
      badge: "Real-Time Systems",
      category: "Systems & Infrastructure",
      tagline: "Real-time Formula 1 pit wall platform streaming live vehicle tracking and telemetry analytics for past F1 Grand Prix sessions.",
      liveUrl: "https://pitwall-f1.live/",
      githubUrl: "https://github.com/tejasdu/pitwall-telemetry-engine",
      techStack: ["Python", "FastAPI", "WebSockets", "Docker", "Nginx", "OCI", "Pydantic"],
      highlights: [
        "Built a 60 FPS race replay engine in Python and FastAPI, streaming live vehicle positions, speed, and powertrain telemetry across all 20 cars via WebSockets with <15ms latency.",
        "Fused asynchronous multi-rate sensor streams (low-frequency GPS with high-frequency car sensors) using temporal interpolation to ensure fluid, jitter-free car movement on track.",
        "Processed and cached ~17 GB of telemetry data across 87 Grand Prix sessions, deploying containerized production services with Docker and Nginx on Oracle Cloud."
      ],
      deepDive: {
        problem: "Cars broadcast GPS coordinates slowly (~3–4 times per sec), but engine sensors broadcast quickly (~10–20 times per sec). Merging these raw numbers directly caused cars to stutter and teleport across the track instead of moving smoothly at 60 FPS.",
        solution: "Built an asynchronous FastAPI pipeline that fills in timing gaps using linear interpolation. By pre-calculating smooth coordinates server-side into an in-memory ring buffer, we stream synchronized data for all 20 cars over a single low-latency WebSocket connection.",
        architecture: `[Historical F1 Data Feeds] (~17 GB across 87 Grand Prix)
          │
          ▼  (Async Ingestion + Polite Rate-Limit Pacing)
[FastAPI Telemetry Ingestion]
          │
          ▼  (Time-Alignment: 3 Hz GPS ⇄ 20 Hz Engine Sensors)
[Temporal Interpolator] ──(Linear Interpolation & Binary Search)
          │
          ▼  (Pre-calculated 60 FPS Frames)
[In-Memory Ring Buffer]
          │
          ▼  (Bidirectional WebSockets, <15ms Latency)
[Nginx Reverse Proxy]  (Hosted on Oracle Cloud Infrastructure / OCI)
          │
          ▼  (Real-Time Track Canvas & Live Telemetry Graphs)
[Client Pitwall UI (React)]`
      }
    },
    {
      id: "proj-selectaurant",
      title: "Selectaurant",
      badge: "Real-Time Multiplayer",
      category: "Full-Stack & Systems",
      tagline: "Real-time multiplayer voting app that eliminates group indecision when picking where to eat.",
      liveUrl: "https://selectaraunt.up.railway.app/",
      githubUrl: "https://github.com/MishanGagnon/restaurant",
      techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Supabase", "Socket.io", "Google Places API"],
      highlights: [
        "Architected live multiplayer voting lobbies with Socket.io WebSockets to synchronize member votes and real-time room states.",
        "Integrated Google Places API to dynamically filter nearby restaurants and built Node.js endpoints with Supabase for instant tallying."
      ],
      deepDive: {
        problem: "Picking a restaurant with a group of friends usually leads to endless group-chat debates and indecision. Standard voting apps feel slow and disconnected because participants can't see votes or card swipes happening in real time.",
        solution: "Built a live multiplayer room system where friends join via private 6-digit room codes. Using WebSockets, restaurant card swipes and live vote counts synchronize instantly across all devices, eliminating refreshes and locking in a winning pick automatically.",
        architecture: `[Lobby Host & Friends] ──(Join via 6-Digit Room Code)──▶ [Client Next.js App]
                                                                  │
                                                       (Location & Diet Filters)
                                                                  ▼
                                                      [Google Places API Engine]
                                                                  │
                                                       (Live Restaurant Deck)
                                                                  ▼
[Multiplayer Session Server] ◀──(Bi-directional WebSockets)── [Socket.io Event Bus]
          │
          ▼  (Real-Time Swipe Events & Vote Tallying)
[Supabase PostgreSQL]
          │
          ▼  (Instant Consensus & Winning Restaurant Reveal)
[All Connected Devices]`
      }
    },
    {
      id: "proj-umazing",
      title: "UMazing • AI Academic Advisor",
      badge: "AI & Distributed Workflow",
      category: "AI & Systems",
      tagline: "Conversational AI degree advisor that audits student transcripts and generates prerequisite-verified course recommendations.",
      devpostUrl: "https://devpost.com/software/umazing",
      githubUrl: "https://github.com/MishanGagnon/mhacks2024",
      techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "FastAPI", "OpenAI", "Railway", "Vercel"],
      highlights: [
        "Parsed 500+ EECS course catalogs and built PDF transcript ingestion services backed by PostgreSQL caching for conversational continuity.",
        "Architected backend API routes integrating OpenAI multi-step tool calling to validate strict degree requirements and stream custom React components to enhance course recommendation advice."
      ],
      deepDive: {
        problem: "Degree planning at U-M requires manually cross-referencing messy unofficial PDF transcripts against dozens of strict prerequisites, distribution requirements, and credit rules, which generic chatbots frequently hallucinate.",
        solution: "Built a deterministic validation pipeline that parses uploaded PDF transcripts, checks completed credits against a structured EECS catalog database, and uses multi-step LLM tool calling to stream prerequisite-verified schedule cards directly into the UI.",
        architecture: `[Student PDF Transcript]
          │
          ▼  (Text Extraction & Course Code Parsing)
[FastAPI Ingestion Service]
          │
          ▼  (Cross-Reference Against Degree Catalog)
[PostgreSQL Database] ──(500+ EECS Courses, Prerequisites & Core Rules)
          │
          ▼  (Verified History & Prerequisite Tree)
[OpenAI Agent Engine] ──(Multi-Step Tool Calling for Degree Audit)
          │
          ▼  (Server-Sent Events / SSE Stream)
[Interactive Course Cards UI] (Next.js & React on Vercel)`
      }
    },
    {
      id: "proj-neuroprosthetics",
      title: "Michigan Neuroprosthetics - Pediatric Device Interface",
      badge: "Hardware & Telemetry",
      category: "Mobile & Embedded Systems",
      tagline: "iOS companion app and telemetry interface connecting pediatric patients with smart prosthetic arm hardware.",
      liveUrl: null,
      githubUrl: null,
      techStack: ["React Native", "Node.js", "Express.js", "BLE", "REST APIs", "Figma"],
      highlights: [
        "Designed iOS app flows & User Journey Maps in Figma and React Native to scaffold the app UI.",
        "Integrated Bluetooth Low Energy (BLE) communication protocols & Node.js API pairing flows to establish persistent, low-latency device pairing with our prosthetic arm firmware and synchronize real-time motor telemetry."
      ],
      deepDive: {
        problem: "Calibrating prosthetic arms traditionally requires clinical software and tethered cables. For pediatric patients, these setups are intimidating, rigid, and fail to provide quick, encouraging visual feedback during motor grip training.",
        solution: "Engineered a wireless, child-friendly iOS companion app that automatically pairs with arm firmware over Bluetooth Low Energy (BLE). It streams real-time grip tension and sensor metrics into gamified calibration exercises that keep young patients engaged.",
        architecture: `[Smart Prosthetic Arm Hardware] (Grip Motors & Pressure Sensors)
          │
          ▼  (Wireless Advertising & Auto-Handshake)
[Bluetooth Low Energy (BLE)] ──(CoreBluetooth GATT Service)
          │
          ▼  (Live Grip Tension & Motor Telemetry Stream)
[React Native iOS Companion App]
          │
          ├────────────────────────────────────────┐
          ▼ (Real-time Visual Feedback)            ▼ (Auth & Calibration Profiles)
[Gamified Calibration UI]                 [Node.js / Express Backend]`
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

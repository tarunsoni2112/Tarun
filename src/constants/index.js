export const myProjects = [
  {
    id: 1,
    title: "AgentHub – AI Agent Showcase Platform",
    description:
      "A web platform that allows users to explore, share, and test open-source AI agents built using LangChain and GPT models. Designed to help developers and creators showcase and collaborate on modular AI workflows.",
    subDescription: [
      "Developed the complete frontend using React (Vite) and integrated dynamic routing for agent listings and demos.",
      "Implemented Supabase as the backend for authentication, database, and real-time updates, ensuring seamless multi-user access.",
      "Integrated LangChain APIs for connecting and testing various AI agent functionalities in a sandboxed environment.",
      "Designed an intuitive UI with TailwindCSS and Framer Motion animations for smooth, responsive interactions.",
    ],
    href: "https://agenthubs.netlify.app",
    logo: "",
    image: "/assets/projects/Agent Hub.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase-seeklogo.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Quizera – Gamified Learning Platform",
    description:
      "Transforms study material (PDFs) into interactive games and quizzes to make learning engaging and effective. Users upload PDFs and the system converts them into quizzes, leaderboards, and interactive modules.",
    subDescription: [
      "Developed a Flask-based app that converts study PDFs into interactive quizzes and games.",
      "Built dynamic UI with HTML, CSS, and JavaScript for gameplay and leaderboards.",
      "Handled PDF parsing, quiz generation, and scoring through lightweight backend APIs.",
      "Deployed as a modular web app for smooth and fast learning interactions."
    ],
    href: "https://github.com/tarunsoni2112/HACKATHON",
    logo: "",
    image: "/assets/projects/Quizerra.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-seeklogo.svg",
      },
      {
        id: 2,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Flask",
        path: "/assets/logos/Flask.svg",
      },
    ],
  },
  {
    id: 3,
    title: "EmoCare – AI Emotional Support App",
    description:
      "An AI-powered emotional support platform offering chat-based and voice-based interactions for users dealing with stress, loneliness, and relationship issues.",
    subDescription: [
      "Developed a cross-platform app using React Native and Python backend with Dolphin APIs.",
      "Integrated mood tracking, AI chat, and voice cloning for personalized user interaction.",
      "Implemented secure authentication and real-time chat flow via Supabase.",
      "Deployed the MVP version for live testing and feedback collection.",
    ],
    href: "https://client-lilac-chi.vercel.app/",
    logo: "",
    image: "/assets/projects/Emocare.jpg",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.JS",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase-seeklogo.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python-seeklogo.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, animated 3D portfolio site showcasing skills and projects using React, Three.js and motion effects.",
    subDescription: [
      "Built with React, React Three Fiber, Drei + TailwindCSS for 3D visuals and responsive layouts.",
      "Used Framer Motion to animate transitions and scroll interactions smoothly.",
      "Implemented contact form via EmailJS for direct messaging.",
      "Deployed using Vite for fast builds and lightweight performance.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "ThreeJS",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/logos/framer.svg",
      },
    ],
  },
  {
    id: 5,
    title: "EDITH – Modular AI Assistant",
    description:
      "A versatile AI assistant for voice/text tasks, automation, and decision-making with real-time data handling.",
    subDescription: [
      "Processes multi-intent queries using Python-based decision model.",
      "Supports speech-to-text and text-to-speech interactions.",
      "Executes automated tasks like opening apps or performing searches.",
      "Handles real-time queries with API integration for dynamic responses."
    ],
    href: "https://github.com/tarunsoni2112/EDITH",
    logo: "",
    image: "/assets/projects/EDITH.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-seeklogo.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/tarun-soni-a61642247/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tarun__soni_01/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    job: "Internship at Nexus Info",
    date: "2024",
    contents: [
      "Assisted in developing ML pipelines for data preprocessing and predictive modeling.",
      "Implemented Python scripts for automated data analysis and reporting.",
      "Developed applications for industrial automation.",
      "Collaborated on small-scale AI research projects to optimize model performance.",
      "Ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Research Paper – Facial Expression Recognition: Unveiling the Nuances of Human Emotion",
    job: "Research Paper",
    date: "May - 2024",
    contents: [
      "Co-authored a paper exploring deep learning techniques for facial expression recognition (FER).",
      "Proposed a hybrid feature extraction method combining VGG-FACE and Local Binary Patterns (LBP) for improved emotion classification.",
      "Achieved real-time FER performance with enhanced accuracy and robustness.",
      "Published in the Journal of Emerging Technologies and Innovative Research (JETIR), Volume 11, Issue 5",
    ],
  },
  {
    title: "Freelance Developer",
    job: "FluxVoid",
    date: "2024-Present",
    contents: [
      "An open-source AI business hub connecting startups, creators, and entrepreneurs.",
      "“Vesu AI” for idea discussions, daily featured news, and advanced creation tools.",
      "Integrated community features, content discovery, and AI-assisted startup guidance.",
      "Designed scalable architecture for web-based platform with modular AI tools.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

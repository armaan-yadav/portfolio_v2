import {
  RiFileTextLine,
  RiGithubLine,
  RiGitRepositoryLine,
  RiLinkedinLine,
  RiMailLine,
  RiTwitterXLine,
} from "react-icons/ri";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: string;
  link: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  websiteLink: string;
  endDate: string | null;
  startDate: string;
  currentlyWorking: boolean;
  technologies: string[];
}
export interface Certificate {  
  id: number;
  title: string;
  url: string;
  description: string;
}

export interface Education {
  schoolName: string;
  degree: string;
  duration: string;
}

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    title: "CodePencil",
    description:
      "Developed an online code editor where users can create profile, set avatar, practice their frontend skills, and save them. Currently 15+ active users.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Js",
      "Firebase",
      "Node Js",
      "Daisy UI",
      "Framer Motion",
    ],
    liveLink: "https://codepencil-swart.vercel.app/",
    githubLink: "https://github.com/armaan-yadav/codepencil",
  },
  {
    title: "Zomaggy",
    description:
      "A food delivery website with real-time fetching of user's location and restaurants based on that location. Integrated Firebase for authentication. Implemented veg-nonVeg filters in restaurants menu. Using Redux Toolkit, implemented the cart feature where users can add, update, delete, and read the items selected.",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit", "Js", "Firebase"],
    liveLink: "https://zomaggy.netlify.app/",
    githubLink: "https://github.com/armaan-yadav/Zomaggy",
  },
  {
    title: "Snapgram",
    description:
      "Developed a social media web app where users can drag and drop photos and upload them with Appwrite as a backend service.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Appwrite",
      "React Query",
      "Ts",
      "ShadCn",
    ],
    liveLink: "https://snapgram-by-armaan.vercel.app/",
    githubLink: "https://github.com/armaan-yadav/Snapgram",
  },
  {
    title: "YOUTUBE UI CLONE",
    description:
      "Provided live Youtube Data API. Implemented search functionality and infinite scroll feature in comments and videos.",
    technologies: ["React Js", "Context API", "Tailwind CSS"],
    liveLink: "https://yt-clone-react-weld.vercel.app/",
    githubLink: "https://github.com/armaan-yadav/yt-clone-react",
  },
];

export const edducation: Education[] = [
  {
    schoolName: "Indian Institute of Technology, Kanpur",
    degree: "Advanced Executive Certificate in Cybersecurity",
    duration: "December 2025 -  Present",
  },
  {
    schoolName: "Sigma Univeristy, Gujarat",
    degree: "Master of Computer Applications",
    duration: "October 2024 - May 2026",
  },
  {
    schoolName: "Kurukshetra Univeristy, Haryana",
    degree: "Bachelor of Computer Applications",
    duration: "August 2021 - July 2024",
  },
];
export const workExperiences: WorkExperience[] = [
  {
    company: "Freelance Software Developer",
    role: "Software Developer",
    description: `
    Built a custom video editor with AI-powered features including AI avatars and automated upload workflows using Next.js, Remotion, and Docker for scalable video generation and processing.
    Developed specialized tools for news media houses featuring AI-driven headline generation, script writing, anchor voiceover synthesis, and content paraphrasing to streamline newsroom workflows.
    Engineered a centralized content publishing system enabling simultaneous uploads to Instagram, Facebook, X (Twitter), and YouTube using n8n, Facebook Graph API, YouTube API, and Meta Business Suite for cross-platform automation.
    Delivered a full-stack NGO website with a custom admin panel built using React.js, Firebase, and Cloudinary for dynamic content management and media optimization.
    Developed a local workflow for generating custom talking AI avatars using open-source models, implementing text-to-video and text-to-speech pipelines for personalized video content creation.
    `,
    websiteLink: "",
    startDate: "September 2024",
    endDate: "Present",
    currentlyWorking: true,
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Remotion",
      "Docker",
      "n8n",
      "Firebase",
      "Python",
      "Facebook Graph API",
      "YouTube API",
      "Cloudinary",
    ],
  },
  {
    company: "Quantbug Technologies And Research LLP",
    role: "Software Developer",
    description: `
    Worked on multiple full-stack applications including news portals, chat applications, and college ERP systems, delivering scalable and user-centric solutions.
    Led the end-to-end development of a SEO-optimized news portal for a local media outlet — Yug Abhiyaan Times — using Next.js with SSR, dynamic routing, and responsive UI.
    Built a custom React.js-based admin panel featuring role-based access control, article and e-paper management, integrated thumbnail editor, and text-to-speech playback using Web Speech API.
    Developed a secure backend using Node.js, Express.js, and MongoDB Atlas, implementing REST APIs, JWT authentication, middleware validation, and modular architecture.
    Designed, developed, and deployed a mobile app and website from scratch using Flutter and React.js, including a robust admin panel with multi-role management.
    Deployed applications using Dockerized services on an Ubuntu VPS via Coolify, managing CI/CD pipelines, domain configuration, and uptime monitoring.
    Implemented analytics and performance tracking using Google Analytics and Search Console to improve indexing, visibility, and real-time performance insights.
    `,
    websiteLink: "https://yugabhiyaantimes.com/",
    startDate: "July 2024",
    endDate: "August 2025",
    currentlyWorking: false,
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Flutter",
      "Docker",
      "Coolify",
      "Appwrite",
      "Google Analytics",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: 3,
    title: "NAMASTE REACT",
    url: "https://drive.google.com/file/d/1d3v-UuH7hSszudURJGKKOyGyYdqVA16I/view?usp=drive_link",
    description:
      "Namaste Dev is an online platform to learn FrontEnd Development related course. I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course authorized by AkshaySaini(founder of Namaste Dev).",
  },
  {
    id: 2,
    title: "Programming Using C++ by Infosys SpringBoard",
    url: "https://drive.google.com/file/d/1lqBhUp8PXWxpvRPhH7Ri4FBm-SPq1VsH/view?usp=drive_link",
    description: "",
  },
];
export const skills: Skill[] = [
  {
    category: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "HTML5",
      "CSS3",
      "Dart",
    ],
  },
  {
    category: "Frameworks/Libraries",
    skills: [
      "React.js",
      "Redux",
      "RTK Query",
      "Node.js",
      "Express.js",
      "Tailwind",
      "Flutter",
      "Shadcn",
      "Material UI",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL","MongoDB", "Firestore", "MySQL", "Appwrite", ],
  },
  {
    category: "Developer Tools",
    skills: ["Docker","Git", "GitHub","Linux", "VS Code", "Android Studio", "Postman"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: RiMailLine,
    href: "mailto:yadavarmaan10@gmail.com",
  },
  {
    name: "Twitter",
    icon: RiTwitterXLine,
    href: "https://x.com/armaan_y10",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    href: "https://www.linkedin.com/in/armaan-yadav-a58805213/",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    href: "https://github.com/armaan-yadav",
  },
  { name: "Resume", icon: RiFileTextLine, href: "/resume/Armaan-Yadav.pdf" },
  {
    name: "Repository",
    icon: RiGitRepositoryLine,
    href: "https://github.com/armaan-yadav/portfolio02",
  },
];

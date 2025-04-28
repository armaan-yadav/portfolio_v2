import {
  RiMailLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
  RiGitRepositoryLine,
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
    schoolName: "Sigma Univeristy",
    degree: "Master of Computer Applications",
    duration: "2024 - 2026",
  },
  {
    schoolName: "Kurukshetra Univeristy",
    degree: "Bachelor of Computer Applications",
    duration: "2021 - 2024",
  },
];
export const workExperiences: WorkExperience[] = [
  {
    company: "Quantbug Technologies And Research LLP",
    role: "Software Developer",
    description: `
    Developed chat apps and college ERP systems, ensuring smooth functionality and user experience.
    Built and launched a website and mobile app from scratch using Flutter, with a multi-role admin panel.
    Designed and deployed a responsive static websites with HTML5, CSS3, JavaScript, and jQuery for optimal user experience.
    Managed deployment processes, server configurations, and domain management for seamless client interactions.
  `,

    websiteLink: "https://quantbug.in",
    startDate: "July 2024",
    endDate: "December 2024",
    currentlyWorking: false,
    technologies: [
      "Node.js",
      "React.js",
      "C-Panel",
      "Flutter",
      "Appwrite",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
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
    skills: ["MongoDB", "Firestore", "MySQL", "Appwrite"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"],
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
    icon: RiGitRepositoryLine, // You can choose a suitable icon
    href: "https://github.com/armaan-yadav/portfolio02",
  },
];

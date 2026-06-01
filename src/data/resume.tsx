import { Icons } from "@/components/icons";
import {
  BookOpenIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
  ArrowRight,
} from "lucide-react";
import { skills, skillsDetailed } from "./skills";

export const DATA = {
  name: "Sahithya Hegde",
  initials: "SH",
  url: "https://sahithya-hegde-portfolio.vercel.app",
  description:
    "Computer Engineering Student and Full Stack Developer passionate about building modern web experiences, exploring UI/UX design, and solving real-world problems through technology.",
  summary:
    "Passionate Full Stack Developer focused on building modern, scalable web applications and solving real-world problems through innovative technology. With a strong foundation in computer science and continuous learning mindset, I combine technical expertise with creative problem-solving to deliver high-impact solutions. I'm committed to open-source contributions, mentoring aspiring developers, and staying at the forefront of web development technologies.",
  aboutDetails: {
    intro:
      "I'm a Computer Engineering student and Full Stack Developer passionate about creating exceptional digital experiences.",
    journey:
      "My journey in tech started with a curiosity about how things work. Over the years, I've transformed that curiosity into practical expertise by building real-world applications, collaborating with talented teams, and continuously learning new technologies.",
    passion:
      "I'm particularly passionate about full-stack web development, modern UI/UX design, and creating platforms that make a difference. I love the challenge of taking complex problems and breaking them down into elegant, user-friendly solutions.",
    goals:
      "My goals include contributing to impactful open-source projects, mentoring the next generation of developers, and building products that scale globally while maintaining code quality and user experience.",
    interests:
      "Beyond code, I'm interested in design systems, developer productivity tools, cloud architecture, and the intersection of technology and business.",
  },
  skillsDetailed,
  experience: [
    {
      type: "internship" as const,
      title: "Web Development Intern",
      company: "Innovexis",
      position: "Web Development Intern",
      duration: "15 January 2026 – 15 April 2026 ",
      description:
        "Worked as a Web Development Intern at Innovexis, contributing to both frontend and backend development. Built responsive user interfaces using React and modern web technologies while also working on backend functionality, API integration, database operations, and application logic.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "GitHub",
      ],
    },
    {
      type: "education" as const,
      title: "Bachelor of Engineering in Computer Engineering",
      institution: "Bharati Vidyapeeth College of Engineering",
      degree: "B.E. Computer Engineering",
      duration: "2024 – 2028",
      cgpa: "7.94",
      description:
        "Currently pursuing a Bachelor of Engineering in Computer Engineering with a strong focus on software development, data structures and algorithms, web technologies, databases, and modern full-stack development. Actively learning and building projects using the MERN stack, participating in hackathons, open-source programs.",
    },
  ],
  avatarUrl: "/profile/me.png",
  skills,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/blog", icon: BookOpenIcon, label: "Blogs" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SahithyaHegde1706",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sahithya-hegde-8ab113359",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SahithyaHegde17",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  projects: [
    {
      title: "SkillBridge",
      href: "https://skillbridge-cyan.vercel.app/",
      dates: "",
      active: true,
      description:
        "SkillBridge is a full-stack freelance marketplace platform that connects clients with freelancers. Users can browse services, hire freelancers, manage orders, leave reviews, track earnings, and access role-based dashboards. The platform also includes an admin panel for managing users, gigs, orders, and platform analytics.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Chart.js",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://skillbridge-cyan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Details",
          href: "/projects/skillbridge",
          icon: <ArrowRight className="size-3" />,
        },
      ],
      image: "/projects/skillbridge/thumbnail.png",
      video: "/projects/skillbridge/demo.mp4",
    },
    {
      title: "Signly",
      href: "https://signly-signature.vercel.app/",
      dates: "",
      active: true,
      description:
        "Signly is a full-stack digital document signing platform that enables users to securely upload PDF documents, create digital signatures, place signatures using an interactive drag-and-drop interface, and finalize documents with complete audit tracking and role-based security.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://signly-signature.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Details",
          href: "/projects/signly",
          icon: <ArrowRight className="size-3" />,
        },
      ],
      image: "/projects/signly/thumbnail.png",
      video: "/projects/signly/demo.mp4",
    },
    {
      title: "CloudNest",
      href: "https://cloud-nest-i6jy.vercel.app/",
      dates: "",
      active: true,
      description:
        "CloudNest is a cloud-based file storage and management platform inspired by services like Google Drive. Users can securely upload, organize, preview, share, and manage files while benefiting from advanced features such as version history, secure sharing, storage management, and activity tracking.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Multer",
        "Axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://cloud-nest-i6jy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Details",
          href: "/projects/cloudnest",
          icon: <ArrowRight className="size-3" />,
        },
      ],
      image: "/projects/cloudnest/thumbnail.png",
      video: "/projects/cloudnest/demo.mp4",
    },
    {
      title: "TrackFlow",
      href: "https://trackflow-seven-eosin.vercel.app/",
      dates: "",
      active: true,
      description:
        "TrackFlow is a MERN-based project management and issue tracking platform that helps teams manage projects, track tasks, collaborate in real time, and monitor project progress through Kanban workflows, notifications, activity tracking, and team collaboration features.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Tailwind CSS",
        "Multer",
      ],
      links: [
        {
          type: "Website",
          href: "https://trackflow-seven-eosin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Details",
          href: "/projects/trackflow",
          icon: <ArrowRight className="size-3" />,
        },
      ],
      image: "/projects/trackflow/thumbnail.png",
      video: "/projects/trackflow/demo.mp4",
    },
  ],
} as const;

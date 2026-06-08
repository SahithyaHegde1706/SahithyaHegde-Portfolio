import type { ProjectCaseStudy } from "./project-case-study-page";

export const projectCaseStudies = {
  skillbridge: {
    imageSrc: "/projects/skillbridge/thumbnail.webp",
    imageAlt: "SkillBridge Project Screenshot",
    category: "Full Stack MERN Application",
    inspiredBy: "Fiverr, Upwork, Freelancer.com",
    websiteHref: "https://skillbridge-cyan.vercel.app/",
    technologies: [
      "React.js",
      "React Router DOM",
      "Chart.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Vercel",
      "MongoDB Atlas",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "SkillBridge is a full-stack freelance marketplace built to connect clients with freelancers through a cleaner end-to-end hiring flow. The platform brings together service discovery, gig creation, order management, reviews, and dashboard-driven account management in one place.",
          "It was designed as a complete product experience rather than a set of isolated screens, which made it a strong exercise in building a marketplace where multiple user roles interact with the same system in meaningful ways.",
        ],
      },
      {
        title: "Key Highlights",
        paragraphs: [
          "The project centers on a searchable gig marketplace, freelancer storefronts, order tracking, a review system, and role-aware dashboards for clients, freelancers, and admins. Each workflow was shaped around making trust, discovery, and ongoing project management feel straightforward.",
          "A major focus was responsive usability, with layouts and actions that stay clear across devices while supporting browsing services, publishing gigs, checking earnings, and monitoring activity without visual clutter.",
        ],
      },
      {
        title: "Technologies Used",
        paragraphs: [
          "SkillBridge uses React and Vite on the frontend, Node.js and Express on the backend, and MongoDB with Mongoose for data modeling. JWT-based authentication, password hashing, and chart-driven dashboard views support its account flows and analytics experience.",
          "Deploying on Vercel and MongoDB Atlas helped shape the project as a production-style build, while the split between frontend and API logic made it easier to reason about routing, state, and backend responsibilities.",
        ],
      },
      {
        title: "Challenges & Learnings",
        paragraphs: [
          "The biggest challenge was designing a system that serves multiple user roles without making the codebase or UI feel fragmented. Building SkillBridge reinforced the importance of planning data relationships early and keeping permission-driven experiences consistent.",
          "It also sharpened my understanding of marketplace workflows, authenticated full-stack architecture, and the discipline required to turn a broad product idea into a polished, portfolio-ready application.",
        ],
      },
    ],
  },
  signly: {
    imageSrc: "/projects/signly/thumbnail.webp",
    imageAlt: "Signly Project Screenshot",
    category: "Full Stack MERN Application",
    inspiredBy: "DocuSign, Adobe Sign",
    websiteHref: "https://signly-signature.vercel.app/",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Signly is a full-stack digital document signing platform that allows users to upload PDF documents, create custom signatures, place signatures through a drag-and-drop interface, and securely finalize documents.",
          "The platform also includes audit tracking, role-based authentication, and document management features, making it a strong case study in building a trust-focused workflow around secure document handling.",
        ],
      },
      {
        title: "Key Highlights",
        paragraphs: [
          "The core product experience includes JWT-based authentication, PDF handling, custom signature creation, drag-and-drop signature placement, audit history tracking, secure signing workflows, and role-based access control.",
          "A responsive interface was built around usability and document management, with an emphasis on keeping critical actions clear while supporting a more complex end-to-end signing flow.",
        ],
      },
      {
        title: "Technologies Used",
        paragraphs: [
          "Signly was built with React and TypeScript on the frontend, supported by Tailwind CSS for the interface layer, and powered by Node.js, Express, and MongoDB on the backend.",
          "JWT authentication, Axios-based API communication, and deployment on Vercel and Render helped shape the project into a practical full-stack application with clear production-style boundaries.",
        ],
      },
      {
        title: "Challenges & Learnings",
        paragraphs: [
          "Building Signly gave me hands-on experience with file handling, PDF workflows, authentication systems, secure document management, and audit tracking in a product where trust and traceability matter.",
          "It also strengthened my understanding of scalable full-stack architecture and taught me how to make technically complex workflows feel simpler through careful interface design.",
        ],
      },
    ],
  },
  cloudnest: {
    imageSrc: "/projects/cloudnest/thumbnail.webp",
    imageAlt: "CloudNest Project Screenshot",
    category: "Full Stack Web Application",
    inspiredBy: "Google Drive",
    websiteHref: "https://cloud-nest-i6jy.vercel.app/",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "Git",
      "GitHub",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "CloudNest is a cloud-based file storage and sharing platform inspired by services like Google Drive. It allows users to upload, organize, preview, manage, and securely share files through a modern responsive interface.",
          "The project brings together file handling, sharing, and account management in a way that feels product-oriented rather than purely technical, making it a strong portfolio example of cloud-inspired application design.",
        ],
      },
      {
        title: "Key Highlights",
        paragraphs: [
          "CloudNest includes file uploads, folder management, file previews, secure sharing links, version history, activity tracking, storage management, trash recovery, and role-based access control.",
          "The platform also focuses on secure authentication and efficient file management workflows, balancing a broad feature set with a cleaner user experience across different screen sizes.",
        ],
      },
      {
        title: "Technologies Used",
        paragraphs: [
          "The application was built with React, JavaScript, and Tailwind CSS on the frontend, alongside Node.js, Express, and MongoDB with Mongoose on the backend.",
          "JWT authentication and Multer-based file handling supported the platform's security and upload workflows, while Git and GitHub helped structure the project through iterative development.",
        ],
      },
      {
        title: "Challenges & Learnings",
        paragraphs: [
          "Through CloudNest, I learned more about file storage architecture, authentication systems, database design, secure sharing workflows, and the practical considerations behind cloud-style application behavior.",
          "It also strengthened my experience with large-scale CRUD operations and taught me how to organize complex file management features into a product that still feels approachable to use.",
        ],
      },
    ],
  },
  trackflow: {
    imageSrc: "/projects/trackflow/thumbnail.webp",
    imageAlt: "TrackFlow Project Screenshot",
    category: "Full Stack SaaS Application",
    inspiredBy: "Jira, Linear, Trello",
    websiteHref: "https://trackflow-seven-eosin.vercel.app/",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Multer",
      "Axios",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "TrackFlow is a full-stack project management and issue tracking platform inspired by Jira, Linear, and Trello. It enables teams to manage projects, organize tasks, track progress, and collaborate in real time.",
          "The product was shaped around modern team workflows, combining task planning, visibility, and collaboration into a single experience that feels closer to a production SaaS tool than a simple CRUD demo.",
        ],
      },
      {
        title: "Key Highlights",
        paragraphs: [
          "TrackFlow includes Kanban-based task management, real-time collaboration with Socket.io, role-based access control, notifications, activity tracking, file attachments, and project analytics.",
          "A major focus was designing a responsive workflow system that helps teams manage projects efficiently while keeping the interface clear enough for day-to-day use.",
        ],
      },
      {
        title: "Technologies Used",
        paragraphs: [
          "The platform was built with React and Tailwind CSS on the frontend, alongside Node.js, Express, and MongoDB on the backend, with Socket.io supporting real-time collaboration features.",
          "JWT authentication, Multer for attachments, Axios for API communication, and deployment through Vercel and Render helped turn the project into a realistic full-stack SaaS-style build.",
        ],
      },
      {
        title: "Challenges & Learnings",
        paragraphs: [
          "TrackFlow strengthened my understanding of real-time communication, project workflow design, scalable REST APIs, authentication systems, and team collaboration features working together in one product.",
          "It also gave me more experience in modern SaaS application architecture and reinforced how important clarity, permissions, and live feedback are in productivity tools.",
        ],
      },
    ],
  },
} satisfies Record<string, ProjectCaseStudy>;

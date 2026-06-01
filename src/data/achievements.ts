export type AchievementSummary = {
  slug: string;
  title: string;
  type: "Achievement" | "Participation";
  status: string;
  date: string;
  summary: string;
};

export type AchievementDetail = AchievementSummary & {
  certificateImage: string;
  certificateAlt: string;
  writeUp: readonly string[];
  storySections?: readonly {
    title: string;
    paragraphs: readonly string[];
  }[];
  learningPoints?: readonly string[];
  hideHeroIntro?: boolean;
  hideHeroBadges?: boolean;
  hideEventDetails?: boolean;
  hideTechnologies?: boolean;
  hideOutcome?: boolean;
  learningsTitle?: string;
  outcomeTitle?: string;
  eventDetails: readonly {
    label: string;
    value: string;
  }[];
  technologies: readonly string[];
  learnings: readonly string[];
  outcome: readonly string[];
};

export const achievementDetails = [
  {
    slug: "code-clash-2025",
    title: "Code Clash",
    type: "Achievement",
    status: "5th Rank",
    date: "15 September 2025",
    summary:
      "Secured 5th Rank in Code Clash, demonstrating problem-solving skills in a competitive environment.",
    certificateImage: "/achievements/code-clash.png",
    certificateAlt: "Code Clash certificate",
    storySections: [
      {
        title: "Overview",
        paragraphs: [
          "Code Clash was a competitive multi-round technical competition that challenged participants across problem-solving, programming fundamentals, databases, aptitude, and Data Structures & Algorithms. For me, it felt less like a standard event and more like a focused test of how well I could stay sharp, adaptable, and consistent under pressure.",
        ],
      },
      {
        title: "Round 1 - Online Qualification",
        paragraphs: [
          "The first round was conducted online and consisted of 50 multiple-choice questions to be completed within 50 minutes. The questions covered Data Structures & Algorithms, programming languages such as C, Java, and Python, SQL and database concepts, aptitude, logical reasoning, and general problem solving.",
          "Only the Top 30 candidates qualified for the offline round, so this stage demanded both speed and accuracy. I was able to perform well enough to secure a place among the shortlisted participants and move on to the finals.",
        ],
      },
      {
        title: "Round 2 - Offline Finals",
        paragraphs: [
          "The offline finals were divided into multiple stages, each designed to test a different part of technical problem solving. This phase felt more intense because every round required quick thinking, clear reasoning, and the ability to stay composed while the difficulty increased.",
        ],
      },
      {
        title: "Technical Problem Solving Round",
        paragraphs: [
          "The first offline round consisted of a mix of technical and logical questions that tested analytical thinking, programming knowledge, and problem-solving ability under pressure. It pushed me to stay focused and approach each challenge methodically rather than rushing into answers.",
        ],
      },
      {
        title: "SQL & Database Round",
        paragraphs: [
          "The second round focused on SQL queries, database concepts, data retrieval, and optimization problems. Accuracy and efficiency both mattered here, and performing well in this stage was important because only the Top 10 participants across the first two offline rounds advanced further.",
        ],
      },
      {
        title: "DSA Final Round",
        paragraphs: [
          "The final round centered on Data Structures & Algorithms and required strong analytical thinking along with efficient solution strategies. Reaching this round and finishing in the top ranks made the experience especially meaningful because it reflected consistency across every stage of the competition.",
        ],
      },
    ],
    hideHeroBadges: true,
    hideEventDetails: true,
    hideTechnologies: true,
    hideOutcome: true,
    learningsTitle: "Experience & Learnings",
    writeUp: [
      "Code Clash was a competitive multi-round technical competition designed to evaluate participants on problem-solving, programming fundamentals, databases, aptitude, and Data Structures & Algorithms. The event consisted of an online qualification round followed by an offline final round for shortlisted participants.",
      "The first round was conducted online and consisted of 50 multiple-choice questions to be completed within 50 minutes. Topics included Data Structures & Algorithms, Programming Languages such as C, Java, and Python, SQL and database concepts, aptitude and logical reasoning, and general problem solving. Participants were ranked based on their scores, and only the Top 30 candidates qualified for the offline round. I successfully secured a position among the shortlisted participants and advanced to the next stage.",
      "The offline stage was further divided into three rounds. The first offline round focused on technical problem solving through a mix of technical and logical questions designed to test analytical thinking, programming knowledge, and problem-solving ability under pressure.",
      "The second offline round focused on SQL queries, database concepts, data retrieval, and optimization problems. Participants were evaluated on both accuracy and efficiency, and based on the combined scores from the first two offline rounds, only the Top 10 participants advanced to the final round.",
      "The final round focused primarily on Data Structures & Algorithms. Participants were required to solve algorithmic and logical challenges while demonstrating strong analytical thinking and efficient problem-solving approaches.",
      "I successfully secured 5th Rank in the competition. The experience strengthened my understanding of Data Structures & Algorithms, SQL, aptitude-based problem solving, and competitive technical assessments while also improving my ability to perform under time constraints.",
    ],
    eventDetails: [
      { label: "Type", value: "Achievement" },
      { label: "Status", value: "5th Rank" },
      { label: "Date", value: "15 September 2025" },
      {
        label: "Focus Areas",
        value: "Data Structures & Algorithms, SQL, aptitude, programming fundamentals, problem solving",
      },
      {
        label: "Format",
        value: "Online qualification followed by a multi-round offline final",
      },
      {
        label: "Progression",
        value: "Top 30 qualified for offline round, Top 10 advanced to final round",
      },
    ],
    technologies: [],
    learnings: [
      "This competition strengthened my understanding of Data Structures & Algorithms, SQL, aptitude-based problem solving, and technical assessment patterns across multiple rounds.",
      "It also improved my ability to stay accurate, think analytically under pressure, and perform effectively within strict time limits.",
    ],
    outcome: [
      "Code Clash stands out as a strong milestone because I progressed through a competitive qualification process and secured 5th Rank in the final standings.",
      "The experience strengthened both my technical confidence and my ability to perform consistently across problem solving, SQL, aptitude, and DSA-focused evaluation rounds.",
    ],
  },
  {
    slug: "hackhive-2-0",
    title: "HackHive 2.0",
    type: "Participation",
    status: "Participant",
    date: "6 March 2026",
    summary:
      "Participated in HackHive 2.0, a team-based hackathon where we designed YojanaSathi to improve accessibility to government welfare schemes.",
    certificateImage: "/achievements/hackhive.png",
    certificateAlt: "HackHive 2.0 certificate",
    storySections: [
      {
        title: "Overview",
        paragraphs: [
          "HackHive 2.0 was a team-based hackathon focused on solving real-world problems through innovation and technology. Our team worked collaboratively to design and present a solution aimed at improving accessibility to government welfare schemes.",
        ],
      },
      {
        title: "Round 1 - Online Screening",
        paragraphs: [
          "The first round consisted of an online PPT submission. Teams were required to select a domain and problem statement from the organizers' provided list and propose an innovative solution.",
          "Our team selected the Smart Living & Consumer Tech domain and chose the problem statement Government Scheme Eligibility Discovery Tool. Out of all participating teams, only 27 teams were shortlisted for the offline round, and our solution successfully qualified for the next stage.",
        ],
      },
      {
        title: "Our Solution - YojanaSathi",
        paragraphs: [
          "We proposed YojanaSathi, a platform designed to help citizens discover government schemes they are eligible for through a simple and user-friendly process.",
          "The idea focused on quiz-based eligibility discovery, personalized scheme recommendations, multilingual support, a rule-based filtering system, and simplified access to welfare information. The goal was to reduce confusion around eligibility criteria and make government schemes more accessible to citizens, especially students, senior citizens, women, farmers, and low-income families.",
        ],
      },
      {
        title: "Technical Approach",
        paragraphs: [
          "The proposed solution was designed using React.js, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, and deployment platforms like Vercel and Render.",
          "At the core of the system was a rule-based engine that matched user responses with relevant government schemes and generated personalized recommendations in a structured and accessible way.",
        ],
      },
      {
        title: "Round 2 - Offline Hackathon",
        paragraphs: [
          "After qualifying through the PPT screening round, our team advanced to the offline stage where we presented the idea, discussed the implementation approach, and showcased the proposed solution.",
          "Although we did not secure a winning position, the experience gave me valuable exposure to team collaboration, idea validation, presentation skills, problem analysis, and solution design under competitive conditions.",
        ],
      },
    ],
    hideHeroBadges: true,
    hideEventDetails: true,
    hideTechnologies: true,
    hideOutcome: true,
    learningsTitle: "Learnings",
    writeUp: [
      "HackHive 2.0 was a team-based hackathon focused on solving real-world problems through innovation and technology. Our team worked collaboratively to design and present a solution aimed at improving accessibility to government welfare schemes.",
      "The first round consisted of an online PPT submission, where teams had to choose a domain and problem statement from the organizers' list and propose an innovative solution. We selected the Smart Living & Consumer Tech domain and worked on the Government Scheme Eligibility Discovery Tool problem statement. Out of all participating teams, only 27 teams were shortlisted for the offline round, and our solution qualified successfully.",
      "We proposed YojanaSathi, a platform designed to help citizens discover government schemes they are eligible for through a simple and user-friendly process. The concept included quiz-based eligibility discovery, personalized scheme recommendations, multilingual support, a rule-based filtering system, and simplified access to welfare information for users such as students, senior citizens, women, farmers, and low-income families.",
      "The proposed solution was designed using React.js, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, and deployment platforms like Vercel and Render. A rule-based engine was planned to match user responses with relevant government schemes and generate personalized recommendations.",
      "After qualifying through the PPT screening round, our team advanced to the offline hackathon stage where we presented the idea, discussed the implementation approach, and showcased the proposed solution. Even though we did not secure a winning position, the event gave me valuable exposure to collaboration, idea validation, presentation, problem analysis, and solution design under competitive conditions.",
    ],
    eventDetails: [
      { label: "Type", value: "Participation" },
      { label: "Status", value: "Participant" },
      { label: "Date", value: "6 March 2026" },
      {
        label: "Focus Areas",
        value: "Accessibility, product thinking, collaboration, solution design",
      },
      {
        label: "Domain",
        value: "Smart Living & Consumer Tech",
      },
      {
        label: "Problem Statement",
        value: "Government Scheme Eligibility Discovery Tool",
      },
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Vercel",
      "Render",
    ],
    learnings: [
      "HackHive 2.0 helped me improve team collaboration and communication while working through a shared problem-solving process.",
      "It also strengthened my ability to analyze problem statements, think in terms of product design, present ideas clearly, and plan real-world application architecture under competitive constraints.",
    ],
    outcome: [
      "HackHive 2.0 became a valuable learning experience that strengthened both my technical thinking and teamwork skills while working on a meaningful social-impact problem.",
      "The project gave me more confidence in combining problem analysis, solution design, and collaborative execution in a hackathon setting.",
    ],
  },
  {
    slug: "hack-with-mumbai-2-0",
    title: "Hack With Mumbai 2.0",
    type: "Participation",
    status: "Participant",
    date: "7-8 February 2026",
    summary:
      "Participated in Hack With Mumbai 2.0, where our team built City Shield, a smart civic issue reporting system for citizens and municipal authorities.",
    certificateImage: "/achievements/hack-with-mumbai.png",
    certificateAlt: "Hack With Mumbai 2.0 certificate",
    storySections: [
      {
        title: "Overview",
        paragraphs: [
          "Hack With Mumbai 2.0 was a 30-hour team-based hackathon where participants worked on solving real-world problems through technology. During the event, our team developed City Shield, a Smart Civic Issue Reporting System designed to improve communication between citizens and municipal authorities.",
        ],
      },
      {
        title: "Problem Statement",
        paragraphs: [
          "Many civic issues such as potholes, garbage accumulation, broken street lights, water leakage, and public safety concerns often go unreported or face delays because reporting systems are fragmented and inefficient.",
          "Our challenge was to design a centralized platform that would allow citizens to report issues efficiently while enabling authorities to track, prioritize, and resolve complaints more effectively.",
        ],
      },
      {
        title: "Our Solution - City Shield",
        paragraphs: [
          "City Shield is a web-based civic issue reporting platform that allows citizens to report civic issues, upload images as evidence, track complaint status, and receive updates on issue resolution.",
          "On the authority side, the platform supports a centralized dashboard where reports can be monitored, prioritized based on severity, and managed more efficiently throughout the resolution process.",
        ],
      },
      {
        title: "Mentorship & Development Process",
        paragraphs: [
          "Throughout the hackathon, multiple mentoring rounds were conducted. Mentors regularly reviewed our project's progress, evaluated our implementation approach, and provided suggestions for improvement.",
          "These sessions helped us refine the solution, improve our presentation, and better understand how to approach real-world problem statements within a limited timeframe.",
        ],
      },
    ],
    hideHeroIntro: true,
    hideEventDetails: true,
    hideOutcome: true,
    learningsTitle: "Learnings",
    writeUp: [
      "Hack With Mumbai 2.0 was a 30-hour team-based hackathon where participants worked on solving real-world problems through technology. During the event, our team developed City Shield, a Smart Civic Issue Reporting System designed to improve communication between citizens and municipal authorities.",
      "The problem we addressed focused on civic issues such as potholes, garbage accumulation, broken street lights, water leakage, and public safety concerns, which often go unreported or face delays because reporting systems are fragmented. Our goal was to design a centralized platform that would let citizens report issues efficiently while helping authorities track, prioritize, and resolve complaints more effectively.",
      "We proposed City Shield as a web-based civic issue reporting platform that allows citizens to report issues, upload images as evidence, track complaint status, and receive updates on resolution. Authorities could use a centralized dashboard to monitor reports, prioritize complaints based on severity, and manage issue resolution more efficiently.",
      "Throughout the hackathon, multiple mentoring rounds were conducted. Mentors regularly reviewed our progress, evaluated our implementation approach, and gave suggestions for improvement. These sessions helped us refine the solution, improve our presentation, and better understand how to approach real-world problem statements within a limited timeframe.",
    ],
    eventDetails: [
      { label: "Type", value: "Participation" },
      { label: "Status", value: "Participant" },
      { label: "Date", value: "7-8 February 2026" },
      {
        label: "Focus Areas",
        value: "Civic tech, real-world problem solving, collaboration, product planning",
      },
      {
        label: "Project",
        value: "City Shield - Smart Civic Issue Reporting System",
      },
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT Authentication",
      "Multer",
    ],
    learnings: [
      "Hack With Mumbai 2.0 gave me valuable experience in team collaboration under time constraints while building a solution for a real-world civic problem.",
      "It also strengthened my product planning, feature prioritization, ability to work with mentor feedback, and project presentation and communication skills.",
    ],
    outcome: [
      "Although our team did not secure a winning position, the hackathon was an excellent learning experience that strengthened both my technical and teamwork skills while building a meaningful solution.",
      "The experience gave me more confidence in turning a practical civic problem into a structured product idea under a tight timeline.",
    ],
  },
  {
    slug: "bv-hacks-1-0",
    title: "BV Hacks 1.0",
    type: "Participation",
    status: "Participant",
    date: "28 March 2025",
    summary:
      "BV Hacks 1.0 was my first-ever hackathon experience and a major milestone in my journey as a developer.",
    certificateImage: "/achievements/bv-hacks.png",
    certificateAlt: "BV Hacks 1.0 certificate",
    storySections: [
      {
        title: "Overview",
        paragraphs: [
          "BV Hacks 1.0 was my first-ever hackathon experience, making it a significant milestone in my development journey. The event brought together students to solve real-world challenges through innovation, teamwork, and technology.",
          "As my first hackathon, it introduced me to competitive problem-solving, collaborative development, and the process of transforming ideas into practical solutions within a limited timeframe.",
        ],
      },
      {
        title: "Problem Statement",
        paragraphs: [
          "Our team selected a problem statement under the Smart Campus and Student Services domain.",
          "The objective was to develop an innovative solution that could enhance campus life and improve student services through technology. The focus was on identifying challenges faced by students in their day-to-day academic journey and proposing a practical solution that could create a more connected, efficient, and student-friendly campus experience.",
        ],
      },
      {
        title: "Experience",
        paragraphs: [
          "As this was my first hackathon, the experience was both exciting and educational. Working alongside teammates, I participated in brainstorming sessions, idea validation, problem analysis, and solution planning.",
          "The event provided valuable exposure to the complete hackathon workflow, from understanding a problem statement and generating ideas to collaborating with a team and presenting a solution within a limited timeframe.",
        ],
      },
    ],
    learningPoints: [
      "Team collaboration and communication",
      "Problem-solving and critical thinking",
      "Idea generation and solution design",
      "Working under time constraints",
    ],
    hideHeroIntro: true,
    hideHeroBadges: true,
    hideEventDetails: true,
    hideOutcome: false,
    learningsTitle: "Learnings",
    outcomeTitle: "Reflection",
    writeUp: [
      "BV Hacks 1.0 was my first-ever hackathon experience, making it a significant milestone in my development journey. The event brought together students to solve real-world challenges through innovation, teamwork, and technology.",
      "As my first hackathon, it introduced me to competitive problem-solving, collaborative development, and the process of transforming ideas into practical solutions within a limited timeframe.",
      "Our team selected a problem statement under the Smart Campus and Student Services domain.",
      "The objective was to develop an innovative solution that could enhance campus life and improve student services through technology. The focus was on identifying challenges faced by students in their day-to-day academic journey and proposing a practical solution that could create a more connected, efficient, and student-friendly campus experience.",
      "As this was my first hackathon, the experience was both exciting and educational. Working alongside teammates, I participated in brainstorming sessions, idea validation, problem analysis, and solution planning.",
      "The event provided valuable exposure to the complete hackathon workflow, from understanding a problem statement and generating ideas to collaborating with a team and presenting a solution within a limited timeframe.",
      "Although our team did not secure a winning position, the experience helped me understand how hackathons operate and gave me confidence to participate in larger competitions in the future.",
    ],
    eventDetails: [
      { label: "Type", value: "Participation" },
      { label: "Status", value: "Participant" },
      { label: "Date", value: "28 March 2025" },
      {
        label: "Focus Areas",
        value: "Smart campus solutions, teamwork, problem solving, presentation",
      },
      {
        label: "Theme",
        value: "Smart Campus and Student Services",
      },
    ],
    technologies: [],
    learnings: [
      "Through BV Hacks 1.0, I gained valuable experience in team collaboration and communication, problem-solving, idea generation, and presenting solutions within a hackathon setting.",
    ],
    outcome: [
      "BV Hacks 1.0 marked the beginning of my hackathon journey. It introduced me to competitive problem-solving, collaborative development, and the excitement of building solutions for real-world challenges.",
      "The lessons I learned from this event motivated me to continue participating in hackathons and improving both my technical and teamwork skills.",
    ],
  },
  {
    slug: "ai-hackathon",
    title: "Build and Grow AI Hackathon 2.0",
    type: "Participation",
    status: "Participant",
    date: "25 January 2026",
    summary:
      "Participated in Build and Grow AI Hackathon 2.0, where our team proposed AI Study Companion for Students, an EduTech solution focused on personalized AI-assisted learning.",
    certificateImage: "/achievements/build-and-grow-ai.jpeg",
    certificateAlt: "Build and Grow AI Hackathon 2.0 certificate",
    storySections: [
      {
        title: "Overview",
        paragraphs: [
          "Build and Grow AI Hackathon 2.0 was a team-based hackathon focused on developing innovative AI-powered solutions for real-world problems. During the event, our team worked on an EduTech solution called AI Study Companion for Students, designed to help students improve their learning experience through personalized AI assistance.",
        ],
      },
      {
        title: "Problem Statement",
        paragraphs: [
          "Many students struggle with identifying what to study, how to revise effectively, and understanding why they are weak in specific topics. Traditional learning methods often lack personalization, making it difficult for students to focus on areas that need improvement.",
        ],
      },
      {
        title: "Our Solution - AI Study Companion for Students",
        paragraphs: [
          "We proposed an AI-powered web application that acts as a personal study assistant for students.",
          "The platform was designed to explain topics using AI, generate quizzes automatically, provide personalized study recommendations, and help students improve their understanding through interactive learning. The goal was to create a practical and scalable solution that could support students in their daily academic journey.",
        ],
      },
      {
        title: "MVP Features",
        paragraphs: [
          "The initial version of the platform included user authentication for login and signup, a topic input system, AI-powered topic explanations, automatic quiz generation, and a basic student dashboard.",
        ],
      },
      {
        title: "Future Enhancements",
        paragraphs: [
          "Planned future features included progress tracking, weak area detection, personalized daily study plans, and PDF notes upload with AI-generated summaries.",
        ],
      },
    ],
    hideHeroBadges: true,
    hideEventDetails: true,
    hideOutcome: true,
    learningsTitle: "Learnings",
    writeUp: [
      "Build and Grow AI Hackathon 2.0 was a team-based hackathon focused on developing innovative AI-powered solutions for real-world problems. During the event, our team worked on an EduTech solution called AI Study Companion for Students, designed to help students improve their learning experience through personalized AI assistance.",
      "Many students struggle with identifying what to study, how to revise effectively, and understanding why they are weak in specific topics. Traditional learning methods often lack personalization, making it difficult for students to focus on areas that need improvement.",
      "We proposed an AI-powered web application that acts as a personal study assistant for students. The platform was designed to explain topics using AI, generate quizzes automatically, provide personalized study recommendations, and help students improve their understanding through interactive learning.",
      "The initial MVP included user authentication, a topic input system, AI-powered topic explanations, automatic quiz generation, and a basic student dashboard. Planned future enhancements included progress tracking, weak area detection, personalized daily study plans, and PDF notes upload with AI-generated summaries.",
      "Through this hackathon, I gained experience in designing AI-powered products, problem analysis and solution planning, team collaboration, product thinking, and feature prioritization while building a practical EduTech solution.",
      "Although our team did not secure a winning position, the hackathon provided valuable exposure to AI product development and strengthened my understanding of how artificial intelligence can be used to solve educational challenges.",
    ],
    eventDetails: [
      { label: "Type", value: "Participation" },
      { label: "Status", value: "Participant" },
      { label: "Date", value: "25 January 2026" },
      {
        label: "Focus Areas",
        value: "AI-powered learning, EduTech, product design, team collaboration",
      },
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Artificial Intelligence APIs",
    ],
    learningPoints: [
      "Designing AI-powered products",
      "Problem analysis and solution planning",
      "Team collaboration",
      "Product thinking and feature prioritization",
      "Building practical EduTech solutions",
      "Valuable exposure to AI product development and how artificial intelligence can solve educational challenges, even though our team did not secure a winning position.",
    ],
    learnings: [
      "Build and Grow AI Hackathon 2.0 strengthened my understanding of AI product design, collaborative problem solving, and practical EduTech solution planning.",
      "The experience also gave me valuable exposure to feature prioritization and using artificial intelligence to address real educational challenges.",
    ],
    outcome: [],
  },
  {
    slug: "simverse-hackathon",
    title: "Simverse Hackathon",
    type: "Participation",
    status: "Participant",
    date: "9-10 January 2026",
    summary:
      "Participated in Simverse Hackathon, a fast-paced innovation challenge focused on rapid development, teamwork, and turning validated ideas into working solutions.",
    certificateImage: "/achievements/simverse-hackathon.png",
    certificateAlt: "Simverse Hackathon certificate",
    storySections: [
      {
        title: "Overview",
        paragraphs: [
          "Simverse Hackathon was a fast-paced innovation challenge where participants were required to transform ideas into working solutions within a short timeframe. The event focused on problem-solving, rapid development, teamwork, and product execution.",
          "The hackathon followed a multi-stage submission process, encouraging teams to move from idea validation to MVP development and final implementation.",
        ],
      },
      {
        title: "Hackathon Journey",
        paragraphs: [
          "Stage 1 - Problem Statement & Idea Submission: The first stage required teams to identify a problem, propose an innovative solution, and submit a presentation outlining the idea, implementation approach, and expected impact. This phase focused on problem analysis, solution design, and validating the feasibility of the proposed concept.",
          "Stage 2 - MVP Development: After idea submission, teams were required to develop a Minimum Viable Product demonstrating the core functionality of their solution. The submission included an MVP demonstration, a public GitHub repository, and a deployed application or demo video. This stage emphasized rapid prototyping, feature prioritization, and practical implementation.",
          "Stage 3 - Final Submission: The final stage involved submitting the completed solution along with demonstrations and deployment links. Teams were evaluated on implementation quality, functionality, execution, and overall presentation of the project.",
        ],
      },
      {
        title: "Experience",
        paragraphs: [
          "Participating in Simverse Hackathon provided valuable experience in building solutions under strict deadlines while collaborating with teammates and managing development priorities.",
          "The event encouraged quick decision-making, effective teamwork, and balancing innovation with practical implementation.",
        ],
      },
    ],
    hideHeroIntro: true,
    hideHeroBadges: true,
    hideEventDetails: true,
    hideOutcome: true,
    learningsTitle: "Learnings",
    writeUp: [
      "Simverse Hackathon was a fast-paced innovation challenge where participants were required to transform ideas into working solutions within a short timeframe. The event focused on problem-solving, rapid development, teamwork, and product execution.",
      "The hackathon followed a multi-stage submission process, encouraging teams to move from idea validation to MVP development and final implementation.",
      "The first stage required teams to identify a problem, propose an innovative solution, and submit a presentation outlining the idea, implementation approach, and expected impact. This phase focused on problem analysis, solution design, and validating the feasibility of the proposed concept.",
      "After idea submission, teams were required to develop a Minimum Viable Product demonstrating the core functionality of their solution. The submission included an MVP demonstration, a public GitHub repository, and a deployed application or demo video.",
      "The final stage involved submitting the completed solution along with demonstrations and deployment links. Teams were evaluated on implementation quality, functionality, execution, and overall presentation of the project.",
      "Participating in Simverse Hackathon provided valuable experience in building solutions under strict deadlines while collaborating with teammates and managing development priorities.",
      "Although our team did not secure a winning position, the hackathon was a valuable learning experience that strengthened my development workflow, teamwork skills, and ability to build and deliver solutions within limited time constraints.",
    ],
    eventDetails: [
      { label: "Type", value: "Participation" },
      { label: "Status", value: "Participant" },
      { label: "Date", value: "9-10 January 2026" },
      {
        label: "Focus Areas",
        value: "Problem-solving, rapid development, teamwork, product execution",
      },
    ],
    technologies: [],
    learningPoints: [
      "Product ideation and validation",
      "MVP development",
      "Rapid prototyping",
      "Team collaboration",
      "Project presentation",
      "Time management under pressure",
    ],
    learnings: [
      "Although our team did not secure a winning position, the hackathon was a valuable learning experience that strengthened my development workflow, teamwork skills, and ability to build and deliver solutions within limited time constraints.",
    ],
    outcome: [],
  },
] satisfies readonly AchievementDetail[];

export const achievementSummaries = achievementDetails.map(
  ({ slug, title, type, status, date, summary }) => ({
    slug,
    title,
    type,
    status,
    date,
    summary,
  })
) satisfies readonly AchievementSummary[];

export const featuredAchievementSummaries = achievementSummaries.slice(
  0,
  3
) satisfies readonly AchievementSummary[];

export function getAchievementBySlug(slug: string) {
  return achievementDetails.find((achievement) => achievement.slug === slug);
}

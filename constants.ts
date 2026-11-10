
import { Project, Skill, CareerContext } from './types';

export const CAREER_DATA: CareerContext = {
  name: "Barbara Kuffuor",
  role: "Senior Web/CMS Developer",
  bio: "Passionate developer building scalable web applications.",
  
  projects: [
    
    {
      id: "1",
      title: "Zabby Core",
      description: "Agency website for high-end web development, SEO, and digital marketing services.",
      tech: ["WordPress", "JavaScript", "Domain & Hosting", "UI/UX Design", "Animations", "Content Creation"],
      image: "https://i.postimg.cc/YSV5wbZ2/zabbycore.png",
      live: "https://www.zabbycore.com/",
      category: "Web"
    },
    {
      id: "2",
      title: "AI Literacy Program",
      description: "It introduces learners to AI Fundamentals, Tools & Practical Use, and Critical Thinking & Ethics.",
      tech: ["React", "Typescript", "Google Cloud", "UI/UX Design", "Illustrations", "Web Migration"],
      image: "https://i.postimg.cc/vHssPYJF/AI-Literacy-Course.png",
      live: "https://genai-literacy-101-for-students-683644106103.us-west1.run.app/",
      category: "Web"
    },
    {
      id: "3",
      title: "Digital Exhibits",
      description: "A touch enabled interaction of HBCU and AUC Digital Collections.",
      tech: ["React", "Typescript", "Google Cloud", "Chrome DEV Tools", "GitHub", "Adobe Photoshop"],
      image: "https://i.postimg.cc/BvMb3LGC/Digital-collections.png",
      live: "https://digital-collections-683644106103.us-west1.run.app/",
      category: "Web"
    },
    {
      id: "4",
      title: "Sealeg Towing",
      description: "We buy any car, in any condition, anywhere in GA.Get an instant offer over the phone.",
      tech: ["GitHub", "TypeScript", "Domain & Hosting", "Netlify", "Google Cloud", "Google Business"],
      image: "https://i.postimg.cc/3Jzq0tr5/tow.webp",
      live: "https://sealegtowing.com/",
      category: "Web"
    },
    {
      id: "5",
      title: "ZabbyWeekly",
      description: "A personal brand and lifestyle blog focusing on career growth, technology, and productivity.",
      tech: ["WordPress", "SEO", "Blog", "Migration","Custom Theme", "SSL Updates", "Google Analytics"],
      image: "https://i.postimg.cc/C1f70gDy/zabby.jpg",
      live: "https://zabbyweekly.com/",
      category: "Web"
    },
    {
      id: "6",
      title: "AUC Woodruff Library",
      description: "The digital gateway for the Atlanta University Center's library and research services.",
      tech: ["WordPress", "HTML/CSS", "Advance Custom Fields", "Content Migration", "Google Analytics"],
      image: "https://i.postimg.cc/6qgMRQX2/AUC-RWWL-1.jpg",
      live: "https://www.auctr.edu/",
      category: "Web"
    },
    {
      id: "7",
      title: "AlumniDirect",
      description: "A networking ecosystem for university alumni to connect, share resources, and discover opportunities.",
      tech: ["WordPress", "HTML/CSS", "Elementor Pro", "Responsiveness", "Membership Plugins"],
      image: "https://i.postimg.cc/QMzmvtF1/alumni.png",
      live: "https://alumnidirect.com/",
      category: "Web"
    },
    {
      id: "8",
      title: "WorldStrides",
      description: "Educational travel portal for students and educators, facilitating global learning experiences.",
      tech: ["WordPress", "HTML/CSS", "Bootstrap", "SalesForce CMS", "Page Builders", "Web Migration"],
      image: "https://i.postimg.cc/6QqzHRp9/worldstrides.png",
      live: "https://worldstrides.com/en-us",
      category: "Web"
    },
    {
      id: "9",
      title: "Merchant Advisory Services",
      description: "A robust financial platform delivering streamlined payment processing solutions and merchant services.",
      tech: ["WordPress", "Elementor Pro", "PHP", "SEO", "HTML/CSS3", "JavaScript", "Content Layout"],
      image: "https://i.postimg.cc/qR0VhjGQ/merchant.png",
      live: "https://merchantadvisoryservices.com/",
      category: "Web"
    },
    {
      id: "10",
      title: "StepKnock",
      description: "Real estate and sales optimization platform designed to empower door-to-door sales teams.",
      tech: ["WordPress", "MailChimp", "HTML/CSS", "Divi Theme", "Yoast SEO", "Content Creation"],
      image: "https://i.postimg.cc/rs0J8Ltb/stepknock.jpg",
      live: "https://stepknock.com/",
      category: "Web"
    },
    {
      id: "11",
      title: "Angel Hair Braiding",
      description: "Booking and portfolio platform for a professional hair styling salon specializing in braiding.",
      tech: ["WordPress", "Domain & Hosting", "Booking", "Responsiveness", "Image Optimization"],
      image: "https://i.postimg.cc/G23gnNKw/braids.avif",
      live: "https://angelhairbraiding.com/",
      category: "Web"
    },
  ],
  experience: [
    {
      company: "State Road & Tollway Authority",
      position: "Web Administrator",
      period: "2025 - Present",
      description: [
        "Perform routine maintenance on CMS and update plug-ins, etc.",
        "Manage website CMS (Content Management System) software and tools.",
        "Support the front end website upgrade through the design of all the Authorities’ websites."
      ]
    },
    {
      company: "AUC Robert W. Woodruff Library",
      position: "Web Services Coordinator",
      period: "2024 - 2026",
      description: [
        "Manage Google analytics to regularly measure the effectiveness of the website",
        "Identify and design new features, and tools to enhance libraries’ web presence.",
        "Manage web migrations on the AUC site, the GLAM portal and digital exhibit platforms."
      ]
    }
  ],
  skills: [
    { name: "React", level: 90, category: "Frontend" },
    { name: "CMS Platforms", level: 90, category: "Tools" },
    { name: "HTML/CSS/Js", level: 90, category: "Frontend" },
    { name: "UI/UX Design", level: 80, category: "Tools" },
    { name: "SEO", level: 75, category: "Backend" },
    { name: "Bootstrap", level: 85, category: "Frontend" },
    { name: "Digital Strategy", level: 75, category: "Frontend" },
    { name: "Cloud Deployment", level: 80, category: "DevOps" }
  ],
};


import { Project, Skill, CareerContext } from './types';

export const CAREER_DATA: CareerContext = {
  name: "Barbara Kuffuor",
  role: "Senior Web/CMS Developer",
  bio: "Passionate developer building scalable web applications.",
  
  projects: [
    
    {
      id: "1",
      title: "Zabby Web Solutions",
      description: "Agency website for high-end web development, SEO, and digital marketing services.",
      tech: ["WebFlow", "Domain& Hosting", "UI/UX Design", "Animations", "Content Creation"],
      image: "https://picsum.photos/seed/mas/800/500",
      live: "https://www.zabbywebsolutions.com/",
      category: "Web"
    },
    {
      id: "2",
      title: "B and E Towing",
      description: "Service-oriented website for a towing company featuring local SEO and click-to-dispatch functionality.",
      tech: ["WordPress", "Domain & Hosting", "Plugins", "Google Ads", "Google Business"],
      image: "https://picsum.photos/seed/mas/800/500",
      live: "https://b-and-etowingllc.com/",
      category: "Web"
    },
    {
      id: "3",
      title: "ZabbyWeekly",
      description: "A personal brand and lifestyle blog focusing on career growth, technology, and productivity.",
      tech: ["WordPress", "SEO", "Custom Theme", "SSL Updates", "Google Analytics"],
      image: "https://picsum.photos/seed/zabbyw/800/500",
      live: "https://zabbyweekly.com/",
      category: "Web"
    },
    {
      id: "4",
      title: "AUC Woodruff Library",
      description: "The digital gateway for the Atlanta University Center's library and research services.",
      tech: ["WordPress", "Google Analytics", "Advance Custom Fields", "Content Migration"],
      image: "https://picsum.photos/seed/auc/800/500",
      live: "https://www.auctr.edu/",
      category: "Web"
    },
    {
      id: "5",
      title: "AlumniDirect",
      description: "A networking ecosystem for university alumni to connect, share resources, and discover opportunities.",
      tech: ["React", "Firebase", "Social APIs"],
      image: "https://picsum.photos/seed/alumni/800/500",
      live: "https://alumnidirect.com/",
      category: "Web"
    },
    {
      id: "6",
      title: "WorldStrides",
      description: "Educational travel portal for students and educators, facilitating global learning experiences.",
      tech: ["WordPress", "Bootstrap", "SalesForce", "Page Builders", "Child Themes"],
      image: "https://picsum.photos/seed/world/800/500",
      live: "https://worldstrides.com/en-us",
      category: "Web"
    },
    {
      id: "7",
      title: "Merchant Advisory Services",
      description: "A robust financial platform delivering streamlined payment processing solutions and merchant services.",
      tech: ["WordPress", "Elementor PRO","PHP", "CSS3", "JavaScript"],
      image: "https://picsum.photos/seed/mas/800/500",
      live: "https://merchantadvisoryservices.com/",
      category: "Web"
    },
    {
      id: "8",
      title: "StepKnock",
      description: "Real estate and sales optimization platform designed to empower door-to-door sales teams.",
      tech: ["WordPress", "MailChimp", "HTML/CSS", "Divi Theme", "Yoast SEO"],
      image: "https://picsum.photos/seed/step/800/500",
      live: "https://stepknock.com/",
      category: "Web"
    },
    {
      id: "9",
      title: "Angel Hair Braiding",
      description: "Booking and portfolio platform for a professional hair styling salon specializing in braiding.",
      tech: ["WordPress", "Booking Systems", "Image Optimization"],
      image: "https://picsum.photos/seed/angel/800/500",
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
    { name: "WordPress", level: 90, category: "Tools" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Webflow", level: 80, category: "Tools" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Bootstrap", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "AWS", level: 60, category: "DevOps" }
  ],
};

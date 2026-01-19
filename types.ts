
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  category: 'Web' | 'Mobile' | 'AI';
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface CareerContext {
  name: string;
  role: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string[];
  }[];
}

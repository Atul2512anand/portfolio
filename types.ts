export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}
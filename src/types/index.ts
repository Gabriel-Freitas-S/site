type IconName = "Browser" | "FileTs" | "Code" | "Layout" | "FileCss" | 
  "BracketsCurly" | "GitBranch" | "Cube" | "CloudArrowUp" | "Gear" | 
  "Lock" | "TestTube" | "Cpu" | "Wrench"

export interface Technology {
  name: string;
  icon: IconName;
}

export interface Skill {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
  description?: string;
  icon: IconName;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Course {
  name: string;
  date: string;
  duration: string;
}

export interface Certification {
  title: string;
  hours: string;
  icon: IconName;
  courses: Course[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: Technology[];
  achievements: string[];
  companyIcon?: IconName;
}
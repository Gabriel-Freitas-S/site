export type SkillIconName = 
  | "React"
  | "TypeScript"
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Tailwind"
  | "Rust"
  | "Dart"
  | "Git"
  | "Docker"
  | "Cloud"
  | "Microservices"
  | "Tests"
  | "Security";

export interface Technology {
  name: string;
  icon: SkillIconName;
}

export interface Skill {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
  description?: string;
  icon: SkillIconName;
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
  icon: SkillIconName;
  courses: Course[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: Technology[];
  achievements: string[];
  companyIcon?: SkillIconName;
}
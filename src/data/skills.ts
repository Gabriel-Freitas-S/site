import { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        level: "Avançado",
        description: "Desenvolvimento com JavaScript/TypeScript, Context API, Styled Components",
        icon: "React"
      },
      {
        name: "TypeScript",
        level: "Avançado",
        description: "Tipagem estática, interfaces, generics",
        icon: "TypeScript"
      },
      {
        name: "HTML/CSS",
        level: "Avançado",
        description: "Flexbox, Grid, Responsividade, Mobile First",
        icon: "HTML"
      },
      {
        name: "Tailwind CSS",
        level: "Avançado",
        description: "Classes utilitárias, customização, responsividade",
        icon: "Tailwind"
      }
    ]
  },
  {
    name: "Backend & Linguagens",
    skills: [
      {
        name: "Rust",
        level: "Intermediário",
        description: "Programação performática e segura, tipos avançados",
        icon: "Rust"
      },
      {
        name: "JavaScript",
        level: "Avançado",
        description: "ES6+, Assíncrono, DOM, APIs",
        icon: "JavaScript"
      },
      {
        name: "Dart",
        level: "Intermediário",
        description: "Orientação a Objetos, Assincronismo, Null Safety",
        icon: "Dart"
      }
    ]
  },
  {
    name: "DevOps & Ferramentas",
    skills: [
      {
        name: "Git/GitHub",
        level: "Avançado",
        description: "Controle de versão, colaboração, Pull Requests",
        icon: "Git"
      },
      {
        name: "Docker",
        level: "Intermediário",
        description: "Criação e gerenciamento de containers",
        icon: "Docker"
      },
      {
        name: "CI/CD",
        level: "Intermediário",
        description: "Integração e entrega contínua",
        icon: "Cloud"
      }
    ]
  },
  {
    name: "Arquitetura & Qualidade",
    skills: [
      {
        name: "Microsserviços",
        level: "Intermediário",
        description: "Padrões de projeto, arquitetura distribuída",
        icon: "Microservices"
      },
      {
        name: "Testes",
        level: "Avançado",
        description: "TDD, BDD, E2E, Cypress, Robot Framework",
        icon: "Tests"
      },
      {
        name: "Segurança",
        level: "Intermediário",
        description: "OWASP Top 10, Security Misconfiguration",
        icon: "Security"
      }
    ]
  }
]
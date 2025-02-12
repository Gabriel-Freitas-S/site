import { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "React",
    skills: [
      {
        name: "React",
        description: "Desenvolvimento com JavaScript/TypeScript, Context API, Styled Components",
        icon: "React"
      },
      {
        name: "TypeScript",
        description: "Tipagem estática, interfaces, generics",
        icon: "TypeScript"
      },
      {
        name: "HTML/CSS",
        description: "Flexbox, Grid, Responsividade, Mobile First",
        icon: "HTML"
      },
      {
        name: "Tailwind CSS",
        description: "Classes utilitárias, customização, responsividade",
        icon: "Tailwind"
      }
    ]
  },
  {
    name: "Backend & Linguagens",
    icon: "JavaScript",
    skills: [
      {
        name: "Rust",
        description: "Programação performática e segura, tipos avançados",
        icon: "Rust"
      },
      {
        name: "JavaScript",
        description: "ES6+, Assíncrono, DOM, APIs",
        icon: "JavaScript"
      },
      {
        name: "Dart",
        description: "Orientação a Objetos, Assincronismo, Null Safety",
        icon: "Dart"
      }
    ]
  },
  {
    name: "DevOps & Ferramentas",
    icon: "Cloud",
    skills: [
      {
        name: "Git/GitHub",
        description: "Controle de versão, colaboração, Pull Requests",
        icon: "Git"
      },
      {
        name: "Docker",
        description: "Criação e gerenciamento de containers",
        icon: "Docker"
      },
      {
        name: "CI/CD",
        description: "Integração e entrega contínua",
        icon: "Cloud"
      }
    ]
  },
  {
    name: "Arquitetura & Qualidade",
    icon: "Microservices",
    skills: [
      {
        name: "Microsserviços",
        description: "Padrões de projeto, arquitetura distribuída",
        icon: "Microservices"
      },
      {
        name: "Testes",
        description: "TDD, BDD, E2E, Cypress, Robot Framework",
        icon: "Tests"
      },
      {
        name: "Segurança",
        description: "OWASP Top 10, Security Misconfiguration",
        icon: "Security"
      }
    ]
  }
]
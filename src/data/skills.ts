import { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        level: "Avançado",
        description: "Desenvolvimento com JavaScript/TypeScript, Context API, Styled Components",
        icon: "Browser"
      },
      {
        name: "TypeScript",
        level: "Avançado",
        description: "Tipagem estática, interfaces, generics",
        icon: "FileTs"
      },
      {
        name: "HTML/CSS",
        level: "Avançado",
        description: "Flexbox, Grid, Responsividade, Mobile First",
        icon: "Layout"
      },
      {
        name: "Tailwind CSS",
        level: "Avançado",
        description: "Classes utilitárias, customização, responsividade",
        icon: "FileCss"
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
        icon: "BracketsCurly"
      },
      {
        name: "JavaScript",
        level: "Avançado",
        description: "ES6+, Assíncrono, DOM, APIs",
        icon: "Code"
      },
      {
        name: "Dart",
        level: "Intermediário",
        description: "Orientação a Objetos, Assincronismo, Null Safety",
        icon: "Code"
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
        icon: "GitBranch"
      },
      {
        name: "Docker",
        level: "Intermediário",
        description: "Criação e gerenciamento de containers",
        icon: "Cube"
      },
      {
        name: "CI/CD",
        level: "Intermediário",
        description: "Integração e entrega contínua",
        icon: "CloudArrowUp"
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
        icon: "Gear"
      },
      {
        name: "Testes",
        level: "Avançado",
        description: "TDD, BDD, E2E, Cypress, Robot Framework",
        icon: "TestTube"
      },
      {
        name: "Segurança",
        level: "Intermediário",
        description: "OWASP Top 10, Security Misconfiguration",
        icon: "Lock"
      }
    ]
  }
]
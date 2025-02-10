import { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Alura",
    period: "2023 - Presente",
    description: "Desenvolvimento e manutenção de aplicações web modernas, focando em performance e experiência do usuário.",
    technologies: [
      {
        name: "TypeScript/React",
        icon: "Code"
      },
      {
        name: "Node.js",
        icon: "Browser"
      },
      {
        name: "Next.js",
        icon: "Browser"
      },
      {
        name: "Docker",
        icon: "Cube"
      },
      {
        name: "CI/CD",
        icon: "CloudArrowUp"
      },
      {
        name: "Git",
        icon: "GitBranch"
      },
      {
        name: "Testes",
        icon: "TestTube"
      }
    ],
    achievements: [
      "Implementação de microsserviços para melhor escalabilidade",
      "Otimização de performance em aplicações React",
      "Implementação de testes automatizados"
    ]
  }
]
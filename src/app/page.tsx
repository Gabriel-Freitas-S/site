import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const skillSummaries = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Rust", "Dart"],
  },
  {
    category: "DevOps",
    skills: ["Git", "Docker", "CI/CD"],
  },
]

const certificationHighlights = [
  {
    title: "Engenharia de Software",
    description: "Microserviços, DevOps, Testes e Qualidade",
    hours: "85h",
  },
  {
    title: "TypeScript e JavaScript",
    description: "Desenvolvimento Full Stack moderno",
    hours: "63h",
  },
  {
    title: "Rust",
    description: "Programação performática e segura",
    hours: "17h",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="flex flex-col items-center space-y-4">
          {/* A foto de perfil agora é um link para o GitHub */}
          <Link href="https://github.com/Gabriel-Freitas-S" target="_blank">
            <div className="rounded-full bg-secondary p-4 cursor-pointer">
              <Image
                src="https://github.com/Gabriel-Freitas-S.png"
                alt="Foto do Perfil no GitHub"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
          </Link>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Gabriel
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e escaláveis.
          </p>
          {/* Botões com ícones para redes sociais */}
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="https://github.com/Gabriel-Freitas-S" target="_blank">
                <FaGithub className="mr-2" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://www.linkedin.com/in/gabriel-freitas-souza/" target="_blank">
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/experience">Ver Experiência</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/skills">Ver Habilidades</Link>
          </Button>
        </div>
      </section>

      {/* Skills Summary Section */}
      <section className="container py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Principais Habilidades
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skillSummaries.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certification Highlights */}
      <section className="container py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Destaques de Certificações
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {certificationHighlights.map((cert) => (
            <Card key={cert.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <Badge variant="default" size="lg">
                    {cert.hours}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/certifications">Ver Todas Certificações</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

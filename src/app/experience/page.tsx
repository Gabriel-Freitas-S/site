import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experiences"
import { IconWrapper } from "@/components/custom/icon-wrapper"

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Experiência Profissional</h1>
      <div className="space-y-8">
        {Array.isArray(experiences) && experiences.map((exp, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{exp.description}</p>
              
              {/* Tecnologias */}
              <div className="space-y-2">
                <h3 className="font-medium">Tecnologias</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="flex items-center gap-1">
                      <IconWrapper 
                        icon={tech.icon}
                        className="w-4 h-4"
                        weight="duotone"
                      />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Conquistas */}
              <div className="space-y-2">
                <h3 className="font-medium">Principais Conquistas</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Nota sobre portfólio */}
      <div className="mt-12 text-center">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              Além das experiências profissionais, mantenho um portfólio ativo de projetos pessoais
              que demonstram minhas habilidades e interesses em desenvolvimento de software.
              Você pode conferir meus projetos no{" "}
              <a
                href="https://github.com/gabrielfreitasc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                GitHub
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
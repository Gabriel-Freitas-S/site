import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experiences"
import { IconWrapper } from "@/components/custom/icon-wrapper"

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Experiência Profissional</h1>
      <div className="space-y-8">
        {Array.isArray(experiences) && experiences.map((exp, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-sm sm:text-base">{exp.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {exp.description && (
                <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base">
                  {exp.description}
                </p>
              )}
              
              {/* Tecnologias - Só mostra se houver tecnologias */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-medium text-sm sm:text-base">Tecnologias</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="flex items-center gap-1 text-xs sm:text-sm py-1">
                        <IconWrapper
                          icon={tech.icon}
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Conquistas - Só mostra se houver conquistas */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-medium text-sm sm:text-base">Principais Conquistas</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
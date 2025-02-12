import { experiences } from "@/data/experiences"
import { PageLayout } from "@/components/custom/page-layout"
import { BadgeWithIcon } from "@/components/custom/badge-with-icon"
import { Card } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"

function ExperienceCard({ exp, index }: { exp: typeof experiences[0], index: number }) {
  return (
    <Card key={index} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <CardHeader>
        <div className="space-y-1">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">{exp.role}</h2>
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
        
        {exp.technologies && exp.technologies.length > 0 && (
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="font-medium text-sm sm:text-base">Tecnologias</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {exp.technologies.map((tech, i) => (
                <BadgeWithIcon
                  key={i}
                  icon={tech.icon}
                  text={tech.name}
                  variant="secondary"
                  size="sm"
                  className="py-1"
                />
              ))}
            </div>
          </div>
        )}

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
  )
}

export default function ExperiencePage() {
  return (
    <PageLayout title="Experiência Profissional">
      <div className="space-y-8">
        {Array.isArray(experiences) && experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </PageLayout>
  )
}
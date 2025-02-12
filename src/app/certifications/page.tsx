import { Badge } from "@/components/ui/badge"
import { certifications } from "@/data/certifications"
import { Suspense } from "react"
import { PageLayout } from "@/components/custom/page-layout"
import { GridLayout } from "@/components/custom/grid-layout"
import { CardWithIcon } from "@/components/custom/card-with-icon"

function CertificationCard({ cert, index }: { cert: typeof certifications[0], index: number }) {
  return (
    <CardWithIcon
      title={cert.title}
      icon={cert.icon}
      headerAction={
        <Badge variant="default" size="lg">
          {cert.hours}
        </Badge>
      }
    >
      <div className="space-y-4">
        {cert.courses.map((course, courseIndex) => (
          <div key={courseIndex} className="border-l-2 border-muted pl-4 py-2">
            <h3 className="font-medium">{course.name}</h3>
            <div className="text-sm text-muted-foreground mt-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Período:</span>
                <span>{course.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Duração:</span>
                <Badge variant="secondary" size="sm">
                  {course.duration}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardWithIcon>
  )
}

export default function CertificationsPage() {
  return (
    <PageLayout title="Certificações">
      <Suspense fallback={<div>Carregando certificações...</div>}>
        <GridLayout>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </GridLayout>
      </Suspense>
      <div className="mt-8 text-center">
        <a
          href="https://cursos.alura.com.br/user/gabrielfreitassouza/fullCertificate/f44f8ee40a1b11696e1cb75db4566045"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Ver certificado completo
        </a>
      </div>
    </PageLayout>
  )
}
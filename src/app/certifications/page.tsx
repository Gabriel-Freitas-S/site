import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { certifications } from "@/data/certifications"
import { IconWrapper } from "@/components/custom/icon-wrapper"
import { Suspense } from "react"

function CertificationCard({ cert, index }: { cert: typeof certifications[0], index: number }) {
  return (
    <Card key={index} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IconWrapper 
              icon={cert.icon} 
              className="w-6 h-6 text-primary" 
              weight="duotone"
            />
            <CardTitle>{cert.title}</CardTitle>
          </div>
          <Badge variant="default" size="lg">
            {cert.hours}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default function CertificationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Certificações</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Suspense fallback={<div>Carregando certificações...</div>}>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </Suspense>
      </div>
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
    </main>
  )
}
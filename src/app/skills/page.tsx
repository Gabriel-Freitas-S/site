import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"
import { IconWrapper } from "@/components/custom/icon-wrapper"
import { Suspense } from "react"
import { Skill, SkillCategory } from "@/types"

const getLevelVariant = (level: "Básico" | "Intermediário" | "Avançado") => {
  switch (level) {
    case "Avançado":
      return "success";
    case "Intermediário":
      return "info";
    default:
      return "secondary";
  }
};

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <IconWrapper 
            icon={skill.icon} 
            className="w-5 h-5 text-primary" 
            weight="duotone"
          />
          <h3 className="font-medium">{skill.name}</h3>
        </div>
        <Badge
          variant={getLevelVariant(skill.level)}
          size="lg"
        >
          {skill.level}
        </Badge>
      </div>
      {skill.description && (
        <p className="text-sm text-muted-foreground">
          {skill.description}
        </p>
      )}
    </div>
  )
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Habilidades</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Suspense fallback={<div>Carregando habilidades...</div>}>
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </Suspense>
      </div>
    </main>
  )
}
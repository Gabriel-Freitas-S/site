import { skillCategories } from "@/data/skills"
import { Suspense } from "react"
import { PageLayout } from "@/components/custom/page-layout"
import { GridLayout } from "@/components/custom/grid-layout"
import { SkillCategoryCard } from "./components/skill-category-card"

export default function SkillsPage() {
  return (
    <PageLayout title="Habilidades">
      <Suspense fallback={<div>Carregando habilidades...</div>}>
        <GridLayout>
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </GridLayout>
      </Suspense>
    </PageLayout>
  )
}
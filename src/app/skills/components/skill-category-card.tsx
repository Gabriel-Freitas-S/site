import { CardWithIcon } from "@/components/custom/card-with-icon"
import { SkillCategory } from "@/types"
import { SkillItem } from "./skill-item"

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <CardWithIcon 
      title={category.name}
      icon={category.icon}
    >
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillItem key={skillIndex} skill={skill} />
        ))}
      </div>
    </CardWithIcon>
  )
}
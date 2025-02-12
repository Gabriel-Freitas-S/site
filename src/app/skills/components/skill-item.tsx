import { IconWrapper } from "@/components/custom/icon-wrapper"
import { Skill } from "@/types"

export function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <IconWrapper 
          icon={skill.icon} 
          className="w-5 h-5 text-primary" 
        />
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      {skill.description && (
        <p className="text-sm text-muted-foreground">
          {skill.description}
        </p>
      )}
    </div>
  )
}
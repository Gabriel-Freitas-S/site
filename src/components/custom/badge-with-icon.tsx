import { Badge } from "@/components/ui/badge"
import { IconWrapper } from "./icon-wrapper"
import { SkillIconName } from "@/types"

interface BadgeWithIconProps {
  icon: SkillIconName
  text: string
  variant?: "default" | "secondary" | "destructive" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function BadgeWithIcon({ 
  icon, 
  text, 
  variant = "secondary",
  size = "default",
  className = ""
}: BadgeWithIconProps) {
  return (
    <Badge 
      variant={variant} 
      size={size}
      className={`flex items-center gap-1 ${className}`}
    >
      <IconWrapper
        icon={icon}
        className="w-3 h-3 sm:w-4 sm:h-4"
      />
      {text}
    </Badge>
  )
}
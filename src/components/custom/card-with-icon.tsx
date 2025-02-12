import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconWrapper } from "./icon-wrapper"
import { SkillIconName } from "@/types"

interface CardWithIconProps {
  title: string
  icon: SkillIconName
  children: React.ReactNode
  className?: string
  headerAction?: React.ReactNode
}

export function CardWithIcon({ 
  title, 
  icon, 
  children, 
  className = "",
  headerAction 
}: CardWithIconProps) {
  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IconWrapper 
              icon={icon} 
              className="w-6 h-6 text-primary" 
            />
            <CardTitle>{title}</CardTitle>
          </div>
          {headerAction}
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
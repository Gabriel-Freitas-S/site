"use client"

import { useEffect, useState } from "react"
import { iconMap } from "./icons-map"
import { type SkillIconName } from "@/types"

interface IconWrapperProps {
  icon: SkillIconName
  className?: string
}

export function IconWrapper({ icon, className = "h-6 w-6" }: IconWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)
  const Icon = iconMap[icon]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className={className} />
  }

  return (
    <div suppressHydrationWarning>
      <Icon className={className} />
    </div>
  )
}
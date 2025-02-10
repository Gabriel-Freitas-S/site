"use client"

import { useEffect, useState } from "react"
import { iconMap } from "./icons-map"

interface IconWrapperProps {
  icon: keyof typeof iconMap
  className?: string
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
}

export function IconWrapper({ icon, className, weight = "regular" }: IconWrapperProps) {
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
      <Icon className={className} weight={weight} />
    </div>
  )
}
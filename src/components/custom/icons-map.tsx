"use client"

import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRust,
  SiDart,
  SiGit,
  SiDocker
} from 'react-icons/si'
import { TbBoxMultiple, TbTestPipe } from 'react-icons/tb'
import { BiCloud } from 'react-icons/bi'
import { MdSecurity } from 'react-icons/md'
import { type SkillIconName } from '@/types'
import { IconType } from 'react-icons'

export const iconMap: Record<SkillIconName, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Tailwind: SiTailwindcss,
  Rust: SiRust,
  Dart: SiDart,
  Git: SiGit,
  Docker: SiDocker,
  Cloud: BiCloud,
  Microservices: TbBoxMultiple,
  Tests: TbTestPipe,
  Security: MdSecurity
}
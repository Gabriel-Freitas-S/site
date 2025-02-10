"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const routes = [
  { path: "/", label: "Início" },
  { path: "/experience", label: "Experiência" },
  { path: "/certifications", label: "Certificações" },
  { path: "/skills", label: "Habilidades" },
] as const

type Route = (typeof routes)[number]

interface NavLinkProps extends Pick<Route, 'path' | 'label'> {
  className?: string
  isActive?: boolean
}

const SOCIAL_LINKS = {
  github: "https://github.com/Gabriel-Freitas-S",
  linkedin: "https://www.linkedin.com/in/gabriel-freitas-souza/",
} as const

const NavLink = ({ path, label, className, isActive }: NavLinkProps) => (
  <Link
    href={path}
    className={cn(
      navigationMenuTriggerStyle(),
      "cursor-pointer bg-transparent transition-colors",
      isActive && "bg-accent text-accent-foreground",
      className
    )}
  >
    {label}
  </Link>
)

const SocialButton = ({ href, icon: Icon, label }: { 
  href: string
  icon: typeof FaGithub | typeof FaLinkedin
  label: string 
}) => (
  <Button variant="ghost" size="icon" asChild>
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  </Button>
)

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <NavLink 
                  {...route} 
                  isActive={pathname === route.path}
                />
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <SocialButton
            href={SOCIAL_LINKS.github}
            icon={FaGithub}
            label="GitHub"
          />
          <SocialButton
            href={SOCIAL_LINKS.linkedin}
            icon={FaLinkedin}
            label="LinkedIn"
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
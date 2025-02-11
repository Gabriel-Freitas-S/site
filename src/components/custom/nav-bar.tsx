"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
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

interface NavLinkProps extends Pick<Route, "path" | "label"> {
  className?: string
  isActive?: boolean
}

const SOCIAL_LINKS = {
  github: "https://github.com/Gabriel-Freitas-S",
  linkedin: "https://www.linkedin.com/in/gabriel-freitas-souza/",
} as const

const NavLink = ({ path, label, className, isActive, onClick }: NavLinkProps & { onClick?: () => void }) => (
  <Link
    href={path}
    onClick={onClick}
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

const SocialButton = ({
  href,
  icon: Icon,
  label,
}: {
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <NavLink {...route} isActive={pathname === route.path} />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex md:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <SocialButton href={SOCIAL_LINKS.github} icon={FaGithub} label="GitHub" />
          <SocialButton href={SOCIAL_LINKS.linkedin} icon={FaLinkedin} label="LinkedIn" />
          <ThemeToggle />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t p-4">
          <div className="flex flex-col space-y-2">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                {...route}
                isActive={pathname === route.path}
                className="block w-full text-center px-2 py-2 hover:bg-accent hover:text-accent-foreground rounded"
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
 "use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Button } from "@/components/ui/button"

const routes = [
  { path: "/", label: "Início" },
  { path: "/experience", label: "Experiência" },
  { path: "/certifications", label: "Certificações" },
  { path: "/skills", label: "Habilidades" },
]

interface NavLinkProps {
  path: string
  label: string
  className?: string
  isActive?: boolean
}

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
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Gabriel-Freitas-S" target="_blank">
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/gabriel-freitas-souza/" target="_blank">
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
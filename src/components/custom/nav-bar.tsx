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
      <div className="container flex h-14 items-center">
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
      </div>
    </nav>
  )
}
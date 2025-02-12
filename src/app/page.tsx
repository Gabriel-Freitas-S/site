import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Metadata } from "next"
import { ProfileImage } from "@/components/custom/profile-image"

export const metadata: Metadata = {
  title: "Gabriel Freitas Souza",
  description: "Gabriel Freitas Souza - Desenvolvedor de Software",
}

const SOCIAL_LINKS = {
  github: {
    url: "https://github.com/Gabriel-Freitas-S",
    label: "GitHub",
    icon: FaGithub,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/gabriel-freitas-souza/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
} as const

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="container flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="flex flex-col items-center space-y-4">
          <div className="overflow-hidden rounded-full bg-secondary p-4 transition-transform hover:scale-105">
            <ProfileImage />
          </div>

          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
            Gabriel Freitas Souza
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Desenvolvedor de Software
          </p>
          
          <div className="flex gap-4 mt-8">
            {Object.entries(SOCIAL_LINKS).map(([key, { url, label, icon: Icon }]) => (
              <Button
                key={key}
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-6 transition-colors hover:bg-secondary"
              >
                <Link 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

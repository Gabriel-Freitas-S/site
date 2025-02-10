import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="flex flex-col items-center space-y-4">
          {/* A foto de perfil agora é um link para o GitHub */}
          <Link href="https://github.com/Gabriel-Freitas-S" target="_blank">
            <div className="rounded-full bg-secondary p-4 cursor-pointer" suppressHydrationWarning>
              <Image
                src="https://github.com/Gabriel-Freitas-S.png"
                alt="Foto do Perfil no GitHub"
                width={128}
                height={128}
                className="rounded-full"
                style={{ color: "transparent" }}
                suppressHydrationWarning
              />
            </div>
          </Link>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Gabriel
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e escaláveis.
          </p>
          {/* Botões com ícones para redes sociais */}
          <div className="flex gap-4 mt-8">
            <Button asChild variant="outline" size="lg" className="text-lg px-6">
              <Link href="https://github.com/Gabriel-Freitas-S" target="_blank" suppressHydrationWarning>
                <FaGithub className="mr-2 h-5 w-5" suppressHydrationWarning />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-6">
              <Link href="https://www.linkedin.com/in/gabriel-freitas-souza/" target="_blank" suppressHydrationWarning>
                <FaLinkedin className="mr-2 h-5 w-5" suppressHydrationWarning />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

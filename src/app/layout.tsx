import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";
import { NavBar } from "@/components/custom/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL('https://gabriel-freitas-s.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: {
    template: "%s | Gabriel - Desenvolvedor Full Stack",
    default: "Gabriel - Desenvolvedor Full Stack",
  },
  description: "Portfólio profissional com experiências, certificações e habilidades em desenvolvimento de software",
  keywords: ["desenvolvedor", "full stack", "react", "node.js", "typescript", "next.js"],
  authors: [{ name: "Gabriel" }],
  creator: "Gabriel",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gabriel-freitas-s.vercel.app",
    title: "Gabriel - Desenvolvedor Full Stack",
    description: "Portfólio profissional com experiências, certificações e habilidades em desenvolvimento de software",
    siteName: "Gabriel - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel - Desenvolvedor Full Stack",
    description: "Portfólio profissional com experiências, certificações e habilidades em desenvolvimento de software",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body 
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <NavBar />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

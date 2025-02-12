interface PageLayoutProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function PageLayout({ title, children, className = "" }: PageLayoutProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className={className}>
        {children}
      </div>
    </main>
  )
}
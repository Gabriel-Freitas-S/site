interface GridLayoutProps {
  children: React.ReactNode
  columns?: number
  className?: string
}

export function GridLayout({ 
  children, 
  columns = 2,
  className = ""
}: GridLayoutProps) {
  return (
    <div 
      className={`grid gap-6 ${columns === 2 ? 'md:grid-cols-2' : `md:grid-cols-${columns}`} ${className}`}
    >
      {children}
    </div>
  )
}
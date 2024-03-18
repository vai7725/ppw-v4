import { ReactNode } from 'react'

export default function Container({
  className,
  children,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`max-w-7xl mx-auto p-4 ${className}`}>{children}</div>
}

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Container({
  className,
  children,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={twMerge('max-w-7xl mx-auto p-4', className)}>
      {children}
    </div>
  )
}

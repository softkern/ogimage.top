import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  iconClassName?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  iconClassName = "",
}: FeatureCardProps) {
  return (
    <div className={`rounded-2xl p-6 transition-all hover:scale-105 ${className}`}>
      <Icon className={`h-8 w-8 ${iconClassName}`} />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}


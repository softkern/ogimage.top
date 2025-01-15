import { Card } from '@/components/ui/card'

interface ToolLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        <Card className="p-6">
          {children}
        </Card>
      </div>
    </div>
  )
} 
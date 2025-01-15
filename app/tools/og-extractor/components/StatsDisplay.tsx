'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OGData } from '@/types/og'

interface StatsDisplayProps {
  data: OGData[]
}

export default function StatsDisplay({ data }: StatsDisplayProps) {
  const stats = {
    total: data.length,
    withImage: data.filter(item => item.ogImage?.[0]?.url).length,
    withDescription: data.filter(item => item.ogDescription).length,
    withTitle: data.filter(item => item.ogTitle).length,
    types: Object.entries(
      data.reduce((acc, item) => {
        const type = item.ogType || 'unknown'
        acc[type] = (acc[type] || 0) + 1
        return acc
      }, {} as Record<string, number>)
    ),
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Total URLs</dt>
            <dd className="text-2xl font-semibold">{stats.total}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">With Images</dt>
            <dd className="text-2xl font-semibold">{stats.withImage}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">With Description</dt>
            <dd className="text-2xl font-semibold">{stats.withDescription}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">With Title</dt>
            <dd className="text-2xl font-semibold">{stats.withTitle}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
} 
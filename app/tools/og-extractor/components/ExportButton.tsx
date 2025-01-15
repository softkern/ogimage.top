'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { OGData } from '@/types/og'
import { Download } from 'lucide-react'

interface ExportButtonProps {
  data: OGData | OGData[]
  filename?: string
}

export default function ExportButton({ data, filename = 'og-data' }: ExportButtonProps) {
  const exportAs = (format: 'json' | 'csv' | 'html') => {
    let content: string
    let type: string
    let extension: string

    switch (format) {
      case 'json':
        content = JSON.stringify(data, null, 2)
        type = 'application/json'
        extension = 'json'
        break
      case 'csv':
        const dataArray = Array.isArray(data) ? data : [data]
        const headers = ['Title', 'Description', 'URL', 'Image URL', 'Type', 'Site Name']
        const rows = dataArray.map(item => [
          item.ogTitle || '',
          item.ogDescription || '',
          item.ogUrl || '',
          item.ogImage?.[0]?.url || '',
          item.ogType || '',
          item.ogSiteName || ''
        ])
        content = [headers, ...rows].map(row => row.join(',')).join('\n')
        type = 'text/csv'
        extension = 'csv'
        break
      case 'html':
        const htmlData = Array.isArray(data) ? data : [data]
        content = htmlData.map(item => `
<meta property="og:title" content="${item.ogTitle || ''}" />
<meta property="og:description" content="${item.ogDescription || ''}" />
<meta property="og:url" content="${item.ogUrl || ''}" />
${item.ogImage?.[0]?.url ? `<meta property="og:image" content="${item.ogImage[0].url}" />` : ''}
${item.ogSiteName ? `<meta property="og:site_name" content="${item.ogSiteName}" />` : ''}
<meta property="og:type" content="${item.ogType || 'website'}" />`).join('\n\n')
        type = 'text/html'
        extension = 'html'
        break
    }

    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.${extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => exportAs('json')}>
          Export as JSON
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportAs('csv')}>
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportAs('html')}>
          Export as HTML
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
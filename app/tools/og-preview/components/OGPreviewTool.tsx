'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import MetaTagsDisplay from './MetaTagsDisplay'

interface OGData {
  [key: string]: string
}

export default function OGPreviewTool() {
  const [url, setUrl] = useState('')
  const [ogData, setOgData] = useState<OGData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  let title = ''
  let description = ''
  let image = ''
  let ogUrl = ''
  if (ogData) {
    title = ogData['twitter:title'] || ogData['og:title'] || ''
    description = ogData['twitter:description'] || ogData['og:description'] || ''
    image = ogData['twitter:image'] || ogData['og:image'] || ''
    ogUrl = ogData['og:url'] || ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/v1/ogdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setOgData(data)
    } catch (error) {
      console.error('Error fetching OG data:', error)
      setError('Failed to fetch OG data. Please check the URL and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="url"
          placeholder="Enter URL to preview, like https://www.example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isLoading ? 'Loading...' : 'Preview'}
        </Button>
      </form>

      {error && (
        <div className="text-red-500">{error}</div>
      )}

      {ogData && (
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Social Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {image && (
                <div className="relative aspect-[1.91/1] w-full mb-4">
                  <Image
                    src={image}
                    alt="Preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="text-xl font-semibold mb-2">{title}</div>
              <p className="text-muted-foreground mb-2">{description}</p>
              <p className="text-sm text-muted-foreground">{ogUrl}</p>
            </CardContent>
          </Card>
          <MetaTagsDisplay ogData={ogData} />
        </div>
      )}
    </div>
  )
}


'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

interface OGTags {
  title: string
  description: string
  url: string
  image: string
  type: string
  siteName: string
}

export default function OGTagsGenerator() {
  const [tags, setTags] = useState<OGTags>({
    title: '',
    description: '',
    url: '',
    image: '',
    type: 'website',
    siteName: ''
  })

  const generateMetaTags = () => {
    return `<!-- Primary Meta Tags -->
<title>${tags.title}</title>
<meta name="title" content="${tags.title}">
<meta name="description" content="${tags.description}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${tags.type}">
<meta property="og:url" content="${tags.url}">
<meta property="og:title" content="${tags.title}">
<meta property="og:description" content="${tags.description}">
<meta property="og:image" content="${tags.image}">
${tags.siteName ? `<meta property="og:site_name" content="${tags.siteName}">` : ''}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${tags.url}">
<meta property="twitter:title" content="${tags.title}">
<meta property="twitter:description" content="${tags.description}">
<meta property="twitter:image" content="${tags.image}">`
  }

  const [generatedTags, setGeneratedTags] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setGeneratedTags(generateMetaTags())
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedTags)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={tags.title}
              onChange={(e) => setTags({ ...tags, title: e.target.value })}
              placeholder="Your page title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="url"
              value={tags.url}
              onChange={(e) => setTags({ ...tags, url: e.target.value })}
              placeholder="https://example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={tags.description}
            onChange={(e) => setTags({ ...tags, description: e.target.value })}
            placeholder="Brief description of your page"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            type="url"
            value={tags.image}
            onChange={(e) => setTags({ ...tags, image: e.target.value })}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              className="w-full px-3 py-2 border rounded-md"
              value={tags.type}
              onChange={(e) => setTags({ ...tags, type: e.target.value })}
            >
              <option value="website">Website</option>
              <option value="article">Article</option>
              <option value="profile">Profile</option>
              <option value="book">Book</option>
              <option value="video">Video</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name (Optional)</Label>
            <Input
              id="siteName"
              value={tags.siteName}
              onChange={(e) => setTags({ ...tags, siteName: e.target.value })}
              placeholder="Your website name"
            />
          </div>
        </div>

        <Button type="submit">Generate Meta Tags</Button>
      </form>

      {generatedTags && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Generated Meta Tags</h3>
              <Button variant="outline" onClick={handleCopy}>
                Copy to Clipboard
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
              {generatedTags}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 
'use client'

import { Button } from "@/components/ui/button"
import { useOGStore } from "@/stores/opengraph-store"
import { Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function MetaTagsOutput() {
  const [metaTags, setMetaTags] = useState('')
  const { type, title, description, url, image, width, height } = useOGStore()

  useEffect(() => {
    const tags = `<!-- Open Graph -->
<meta property="og:type" content="${type || 'website'}" />
<meta property="og:title" content="${title || ''}" />
<meta property="og:description" content="${description || ''}" />
<meta property="og:url" content="${url || ''}" />
<meta property="og:image" content="${image || ''}" />
<meta property="og:image:width" content="${width || '1200'}" />
<meta property="og:image:height" content="${height || '630'}" />

<!-- Twitter/X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title || ''}" />
<meta name="twitter:description" content="${description || ''}" />
<meta name="twitter:image" content="${image || ''}" />
<meta name="twitter:image:width" content="${width || '1200'}" />
<meta name="twitter:image:height" content="${height || '630'}" />`

    setMetaTags(tags)
  }, [type, title, description, url, image, width, height])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(metaTags)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Open Graph Meta Tags</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </Button>
      </div>
      <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
        <code>{metaTags}</code>
      </pre>
    </div>
  )
}


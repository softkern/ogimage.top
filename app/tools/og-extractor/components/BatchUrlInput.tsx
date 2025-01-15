'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

interface BatchUrlInputProps {
  onSubmit: (urls: string[]) => void
  isLoading: boolean
}

export default function BatchUrlInput({ onSubmit, isLoading }: BatchUrlInputProps) {
  const [urls, setUrls] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const urlList = urls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url && url.startsWith('http'))

    onSubmit(urlList)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Enter one URL per line, for example:
https://example1.com
https://example2.com"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
        rows={5}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Extract All'}
        </Button>
      </div>
    </form>
  )
} 
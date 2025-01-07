'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { fetchOGData } from '../actions'

export default function OGPreviewForm() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await fetchOGData(url)
    setIsLoading(false)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="url"
        placeholder="Enter URL to preview"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="flex-grow"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Preview'}
      </Button>
    </form>
  )
}


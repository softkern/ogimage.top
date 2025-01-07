'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useOGStore } from "@/stores/opengraph-store"
import { Wand2 } from 'lucide-react'
import Link from "next/link"
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { updateOGData } from '../actions'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? 'Generating...' : 'Generate Tags'}
    </Button>
  )
}

export default function OGForm() {
  const [state, formAction] = useActionState(updateOGData, { message: '' })
  const { type, title, description, url, image, width, height, setField } = useOGStore()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.target instanceof HTMLElement && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault()
    }
  }

  return (
    <form action={formAction} onKeyDown={handleKeyDown} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Select name="type" value={type} onValueChange={(value) => setField('type', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="website">website</SelectItem>
            <SelectItem value="article">article</SelectItem>
            <SelectItem value="profile">profile</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setField('title', e.target.value)}
          placeholder="A guide to Open Graph meta tags"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setField('description', e.target.value)}
          placeholder="Open Graph meta tags are used to specify how a page should be represented on social media."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          name="url"
          type="url"
          value={url}
          onChange={(e) => setField('url', e.target.value)}
          placeholder="https://example.com/page"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <div className="flex gap-2">
          <Input
            id="image"
            name="image"
            type="url"
            value={image}
            onChange={(e) => setField('image', e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
          <Link href={"/"}>
            <Button type="button" variant="outline">
              <Wand2 className="w-4 h-4 mr-2" />
              Generate OG Image
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="width">Width (px)</Label>
          <Input
            id="width"
            name="width"
            type="number"
            value={width}
            onChange={(e) => setField('width', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="height">Height (px)</Label>
          <Input
            id="height"
            name="height"
            type="number"
            value={height}
            onChange={(e) => setField('height', e.target.value)}
          />
        </div>
      </div>

      {state.message && (
        <p className="text-sm text-green-600">{state.message}</p>
      )}
    </form>
  )
}


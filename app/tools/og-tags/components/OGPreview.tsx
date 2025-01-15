
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useOGStore } from "@/stores/opengraph-store"
import Image from 'next/image'

export default function OGPreview() {
  const { title, description, image, url } = useOGStore()

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Social Preview</h2>
      <Card className="overflow-hidden">
        {image && (
          <div className="relative aspect-[1.91/1] w-full">
            <Image
              src={image}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardContent className="p-4">
          {url && (
            <p className="text-sm text-muted-foreground truncate">
              {(() => {
                try {
                  return new URL(url).hostname
                } catch {
                  return url
                }
              })()}
            </p>
          )}
          {title && (
            <h3 className="font-semibold line-clamp-2">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


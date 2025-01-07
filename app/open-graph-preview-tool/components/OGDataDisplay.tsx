import { getOGData } from "@/app/open-graph-preview-tool/actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default async function OGDataDisplay() {
  const ogData = await getOGData()

  if (!ogData) return null

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Social Preview</CardTitle>
        </CardHeader>
        <CardContent>
          {ogData.image && (
            <div className="relative aspect-[1.91/1] w-full mb-4">
              <Image
                src={ogData.image}
                alt="Preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{ogData.title}</h3>
          <p className="text-muted-foreground mb-2">{ogData.description}</p>
          <p className="text-sm text-muted-foreground">{ogData.url}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Open Graph Data</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{JSON.stringify(ogData, null, 2)}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}


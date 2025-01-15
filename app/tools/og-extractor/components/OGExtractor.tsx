'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { OGData } from '@/types/og'
import { useState } from 'react'
import BatchUrlInput from './BatchUrlInput'
import ExportButton from './ExportButton'
import StatsDisplay from './StatsDisplay'

export default function OGExtractor() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [ogData, setOGData] = useState<OGData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [batchData, setBatchData] = useState<OGData[]>([])
  const [isBatchMode, setIsBatchMode] = useState(false)
  const [progress, setProgress] = useState(0)
  const [totalUrls, setTotalUrls] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/v1/og-extractor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error)
      }

      setOGData(data.data)
    } catch (err) {
      setError('获取OG数据失败，请检查URL是否正确')
      setOGData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBatchSubmit = async (urls: string[]) => {
    setIsLoading(true)
    setError(null)
    setTotalUrls(urls.length)
    setProgress(0)
    const results: OGData[] = []

    try {
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i]
        const response = await fetch('/api/v1/og-extractor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url }),
        })

        const data = await response.json()
        if (data.success) {
          results.push(data.data)
        }
        setProgress(((i + 1) / urls.length) * 100)
      }

      setBatchData(results)
    } catch (err) {
      setError('批量处理过程中出现错误')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="single" className="space-y-6">
        <TabsList>
          <TabsTrigger value="single">Single URL</TabsTrigger>
          <TabsTrigger value="batch">Batch Process</TabsTrigger>
        </TabsList>

        <TabsContent value="single">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="url"
                  placeholder="Enter URL (e.g., https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Extracting...' : 'Extract'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="batch">
          <Card>
            <CardContent className="pt-6">
              <BatchUrlInput onSubmit={handleBatchSubmit} isLoading={isLoading} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isLoading && totalUrls > 0 && (
        <div className="space-y-2">
          <Progress value={progress} />
          <p className="text-sm text-muted-foreground text-center">
            Processing {Math.round(progress)}% ({Math.floor((progress / 100) * totalUrls)}/{totalUrls})
          </p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">
          {error === '批量处理过程中出现错误' ? 'Error occurred during batch processing' : error}
        </div>
      )}

      {batchData.length > 0 && (
        <>
          <StatsDisplay data={batchData} />
          <div className="flex justify-end">
            <ExportButton data={batchData} filename="og-data" />
          </div>
        </>
      )}

      {ogData && !batchData.length && (
        <>
          <div className="flex justify-end">
            <ExportButton data={ogData} filename="og-data" />
          </div>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="json">JSON</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
            </TabsList>

            <TabsContent value="preview">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Title</h3>
                      <p className="text-muted-foreground">{ogData.ogTitle}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Description</h3>
                      <p className="text-muted-foreground">{ogData.ogDescription}</p>
                    </div>
                    {ogData.ogImage?.[0] && (
                      <div>
                        <h3 className="font-semibold mb-2">Image</h3>
                        <img
                          src={ogData.ogImage[0].url}
                          alt={ogData.ogImage[0].alt || ogData.ogTitle}
                          className="max-w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="json">
              <Card>
                <CardContent className="pt-6">
                  <pre className="bg-muted p-4 rounded-lg overflow-auto">
                    {JSON.stringify(ogData, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="html">
              <Card>
                <CardContent className="pt-6">
                  <pre className="bg-muted p-4 rounded-lg overflow-auto">
                    {`<meta property="og:title" content="${ogData.ogTitle || ''}" />
<meta property="og:description" content="${ogData.ogDescription || ''}" />
<meta property="og:url" content="${ogData.ogUrl || ''}" />
${ogData.ogImage?.[0]?.url ? `<meta property="og:image" content="${ogData.ogImage[0].url}" />` : ''}
${ogData.ogSiteName ? `<meta property="og:site_name" content="${ogData.ogSiteName}" />` : ''}
<meta property="og:type" content="${ogData.ogType || 'website'}" />`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
} 
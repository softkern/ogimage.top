import MetaTagsOutput from '@/app/open-graph-tags-generator/components/MetaTagsOutput'
import OGPreview from '@/app/open-graph-tags-generator/components/OGPreview'
import OGForm from '@/app/open-graph-tags-generator/components/OGTagForm'
import { Card } from "@/components/ui/card"
import { BASE_URL, siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
  ...siteConfig,
  title: "Open Graph Tags Generator",
  keywords: ["Open Graph Tags Generator"],
  openGraph: {
    title: "Open Graph Tags Generator",
    url: "/open-graph-tags-generator",
    description: "Generate Open Graph meta tags for your website.",
    images: [`${BASE_URL}/tag-og.webp`]
  },
  twitter: {
    title: "Open Graph Tags Generator",
    description: "Generate Open Graph meta tags for your website.",
    images: [`${BASE_URL}/tag-og.webp`]
  },
  alternates: {
    canonical: "/open-graph-tags-generator",
  },
}

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Open Graph Tag Generator</h1>
      <p className="text-muted-foreground">Fill in the form below to generate Open Graph meta tags.</p>

      <div className="grid gap-4">
        <Card className="p-6">
          <OGForm />
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <OGPreview />
          </Card>
          <Card className="p-6">
            <MetaTagsOutput />
          </Card>
        </div>
      </div>
    </main>
  )
}

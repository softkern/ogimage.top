import { BASE_URL, siteConfig } from '@/config/site'
import { Metadata } from 'next'
import OGDataDisplay from './components/OGDataDisplay'
import OGPreviewForm from './components/OGPreviewForm'

export const metadata: Metadata = {
  ...siteConfig,
  title: "Open Graph Preview",
  keywords: ["Open Graph Preview", "Open Graph Debug"],
  openGraph: {
    title: "Open Graph Preview",
    url: "/open-graph-tags-generator",
    description: "Preview how your website's Open Graph will be presented on social media platforms.",
    images: [`${BASE_URL}/preview-og.webp`]
  },
  twitter: {
    title: "Open Graph Preview",
    description: "Preview how your website's Open Graph will be presented on social media platforms.",
    images: [`${BASE_URL}/preview-og.webp`]
  },
  alternates: {
    canonical: "/open-graph-tags-generator",
  },
}

export default function OGPreviewPage() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Open Graph Preview</h1>
      <p className="text-muted-foreground">Enter URL to preview how your website&apos;s Open Graph will be presented on social media platforms..</p>
      <OGPreviewForm />
      <OGDataDisplay />
    </div>
  )
}

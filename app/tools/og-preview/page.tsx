import ToolLayout from '@/components/tools/ToolLayout'
import { BASE_URL } from '@/config/site'
import { Metadata } from 'next'
import OGPreview from './components/OGPreviewTool'

export const metadata: Metadata = {
  title: 'Open Graph Preview - Test Your OG Tags',
  description: 'Preview how your website appears when shared on social media platforms',
  openGraph: {
    title: 'Open Graph Preview',
    description: 'Preview how your website appears when shared on social media platforms',
    url: '/tools/og-preview',
    images: [`${BASE_URL}/preview-og.webp`]
  }
}

export default function OGPreviewPage() {
  return (
    <ToolLayout
      title="Open Graph Preview"
      description="Enter URL to preview how your website's Open Graph will be presented on social media platforms."
    >
      <OGPreview />
    </ToolLayout>
  )
}

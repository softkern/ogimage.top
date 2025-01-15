import ToolLayout from '@/components/tools/ToolLayout'
import { BASE_URL } from '@/config/site'
import { Metadata } from 'next'
import OGExtractor from './components/OGExtractor'

export const metadata: Metadata = {
  title: 'Open Graph Tag Extractor - Extract and Analyze OG Meta Tags',
  description: 'Extract, analyze, and validate Open Graph meta tags from any URL. Support batch processing and multiple export formats.',
  keywords: [
    'open graph extractor',
    'og tag analyzer',
    'meta tag tool',
    'social media preview',
    'og metadata'
  ],
  openGraph: {
    title: 'Open Graph Tag Extractor',
    description: 'Extract, analyze, and validate Open Graph meta tags from any URL',
    url: '/tools/og-extractor',
    images: [`${BASE_URL}/og-extractor.webp`],
    type: 'website'
  }
}

export default function OGExtractorPage() {
  return (
    <ToolLayout
      title="Open Graph Tag Extractor"
      description="Extract and analyze Open Graph meta tags from any URL. Support batch processing and multiple export formats."
    >
      <OGExtractor />
    </ToolLayout>
  )
} 
import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'node-html-parser'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const { url } = await request.json()

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'OG-Preview-Bot/1.0',
      },
    })
    const html = await response.text()
    const root = parse(html)

    const ogData: { [key: string]: string } = {}

    // Parse Open Graph meta tags
    root.querySelectorAll('meta[property^="og:"], meta[name^="og:"]').forEach((meta) => {
      const property = meta.getAttribute('property') || meta.getAttribute('name')
      const content = meta.getAttribute('content')
      if (property && content) {
        ogData[property] = content
      }
    })

    // Parse Twitter meta tags
    root.querySelectorAll('meta[name^="twitter:"]').forEach((meta) => {
      const name = meta.getAttribute('name')
      const content = meta.getAttribute('content')
      if (name && content) {
        ogData[name] = content
      }
    })

    // If no OG data found, try to extract some basic information
    if (Object.keys(ogData).length === 0) {
      const title = root.querySelector('title')?.text
      const description = root.querySelector('meta[name="description"]')?.getAttribute('content')
      if (title) ogData['og:title'] = title
      if (description) ogData['og:description'] = description
    }

    // Extract the canonical URL if available
    const canonicalUrl = root.querySelector('link[rel="canonical"]')?.getAttribute('href')
    if (canonicalUrl) {
      ogData['og:url'] = canonicalUrl
    } else {
      ogData['og:url'] = url
    }

    return NextResponse.json(ogData)
  } catch (error) {
    console.error('Error fetching OG data:', error)
    return NextResponse.json({ error: 'Failed to fetch OG data' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'This endpoint only supports POST requests' }, { status: 405 })
}


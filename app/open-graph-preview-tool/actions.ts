'use server'

import { parse } from 'node-html-parser'

interface OGData {
  title: string
  description: string
  image: string
  url: string
  [key: string]: string
}

let cachedOGData: OGData | null = null

export async function fetchOGData(url: string): Promise<void> {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const root = parse(html)

    const ogData: OGData = {
      title: '',
      description: '',
      image: '',
      url: url,
    }

    root.querySelectorAll('meta[property^="og:"]').forEach((meta) => {
      const property = meta.getAttribute('property')
      const content = meta.getAttribute('content')
      if (property && content) {
        ogData[property.replace('og:', '')] = content
      }
    })

    cachedOGData = ogData
  } catch (error) {
    console.error('Error fetching OG data:', error)
    cachedOGData = null
  }
}

export async function getOGData(): Promise<OGData | null> {
  return cachedOGData
}


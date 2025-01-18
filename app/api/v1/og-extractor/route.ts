import { getCachedData, setCachedData } from '@/lib/cache'
import { OGData } from '@/types/og'
import { load } from 'cheerio'
import { NextResponse } from 'next/server'

const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1秒

export const runtime = 'edge';
async function fetchWithRetry(url: string, retries = MAX_RETRIES): Promise<Response> {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return response
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY))
      return fetchWithRetry(url, retries - 1)
    }
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    // 检查缓存
    const cached = getCachedData<OGData>(url)
    if (cached) {
      return NextResponse.json({
        success: true,
        data: cached,
        cached: true
      })
    }

    const response = await fetchWithRetry(url)
    const html = await response.text()
    const $ = load(html)

    const ogData: OGData = {
      ogTitle: $('meta[property="og:title"]').attr('content'),
      ogDescription: $('meta[property="og:description"]').attr('content'),
      ogUrl: $('meta[property="og:url"]').attr('content') || url,
      ogSiteName: $('meta[property="og:site_name"]').attr('content'),
      ogType: $('meta[property="og:type"]').attr('content'),
      ogImage: []
    }

    // 获取og:image相关信息
    $('meta[property^="og:image"]').each((_, el) => {
      const property = $(el).attr('property')
      const content = $(el).attr('content')

      if (property === 'og:image') {
        ogData.ogImage?.push({ url: content || '' })
      } else if (property?.startsWith('og:image:') && ogData.ogImage?.[0]) {
        const attr = property.replace('og:image:', '')
        if (attr === 'width') {
          ogData.ogImage[0].width = parseInt(content || '0')
        } else if (attr === 'height') {
          ogData.ogImage[0].height = parseInt(content || '0')
        } else if (attr === 'type') {
          ogData.ogImage[0].type = content
        } else if (attr === 'alt') {
          ogData.ogImage[0].alt = content
        }
      }
    })

    // 保存到缓存
    setCachedData(url, ogData)

    return NextResponse.json({
      success: true,
      data: ogData
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch OG data'
      },
      { status: 500 }
    )
  }
} 
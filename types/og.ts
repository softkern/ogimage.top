export interface OGImage {
  url: string
  width?: number
  height?: number
  type?: string
  alt?: string
}

export interface OGData {
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogImage?: OGImage[]
  ogSiteName?: string
  ogType?: string
}
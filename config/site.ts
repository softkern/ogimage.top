import { SiteConfig } from "@/types/siteConfig";

export const SITE_OWNER = "softkern";
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
export const TWITTER_URL = "https://x.com/intent/follow?screen_name=softkern";
// export const BLUESKY_URL = "https://bsky.app/profile/softkern.bsky.social";


const baseSiteConfig = {
  name: "Free Open Graph Tools",
  title: "Free Open Graph Tools - Generate, Preview and Debug OG Tags",
  description:
    "All-in-one Open Graph toolkit for developers. Create OG images, generate meta tags, and preview social media cards.",
  url: BASE_URL,
  metadataBase: new URL(BASE_URL),
  keywords: ['open graph generator', 'og image creator', 'social media preview', 'meta tags generator', 'og debug tool'],
  authors: [
    {
      name: SITE_OWNER,
      url: BASE_URL,
      twitter: TWITTER_URL,
      // bluesky: BLUESKY_URL,
    }
  ],
  creator: SITE_OWNER,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.svg",
    apple: "/logo.svg", // apple-touch-icon.png
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.webp`],
    creator: baseSiteConfig.creator,
  },
}
import { SiteConfig } from "@/types/siteConfig";

export const SITE_OWNER = "softkern";
export const BASE_URL = "https://ogimage.top";
export const TWITTER_URL = "https://x.com/intent/follow?screen_name=softkern";
// export const BLUESKY_URL = "https://bsky.app/profile/softkern.bsky.social";


const baseSiteConfig = {
  name: "Free OG Image Generator",
  title: "Free OG Image Generator for Social Media Visuals",
  description:
    "Create stunning Open Graph images effortlessly with our free generator. Customize templates, save in multiple formats, and boost your social media presence.",
  url: BASE_URL,
  metadataBase: new URL(BASE_URL),
  keywords: ['OG Image Generator', 'Open Graph', 'customizable templates', 'user-friendly interface', 'cross-platform'],
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

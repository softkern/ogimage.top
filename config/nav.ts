export const toolsConfig: { title: string; href: string; description: string }[] = [
  {
    title: "Open Graph Image Generator",
    href: "/#get-started",
    description:
      "Generate Open Graph image for your website",
  },
  {
    title: "Open Graph Tags Generator",
    href: "/tools/og-tags",
    description:
      "Generate Open Graph meta tags for your website.",
  },
  {
    title: "Open Graph Preview",
    href: "/tools/og-preview",
    description:
      "Preview how your website's Open Graph will be presented on social media platforms.",
  },
  {
    title: "OG Extractor",
    description: "Extract and analyze Open Graph meta tags from any URL",
    href: "/tools/og-extractor",
  },
] as const

export type ToolsConfig = typeof toolsConfig

export const guidesConfig = [
  {
    title: "Getting Started",
    href: "/guides/getting-started",
    description: "Learn the basics of OG Image Generator in just 5 minutes",
  },
  {
    title: "Using Templates",
    href: "/guides/templates",
    description: "Learn how to choose and customize templates for professional preview images",
  },
  {
    title: "Image Optimization",
    href: "/guides/optimization",
    description: "Optimize your images for the best social media presentation",
  },
  {
    title: "Best Practices",
    href: "/guides/best-practices",
    description: "Professional tips and advice for creating more engaging preview images",
  },
] as const

export type GuidesConfig = typeof guidesConfig

export const mainNavConfig = [
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "Guides",
    href: "/guides",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
] as const

export type MainNavConfig = typeof mainNavConfig
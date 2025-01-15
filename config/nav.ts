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

export const mainNavConfig = [
  {
    title: "Tools",
    href: "/tools",
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
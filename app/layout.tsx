import "@/styles/globals.css"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import { Providers } from "@/components/providers"
import { TemplateStoreProvider } from "@/providers/template-store-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  ...siteConfig,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    ...siteConfig.openGraph,
    url: siteConfig.url,
  },
  twitter: {
    ...siteConfig.twitter,
  },
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              <TemplateStoreProvider>{children}</TemplateStoreProvider>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

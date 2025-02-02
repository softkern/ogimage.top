"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

import GoogleAdsense from "@/app/GoogleAdsense"
import GoogleAnalytics from "@/app/GoogleAnalytics"
import Umami from "@/app/Umami"
import { CookieConsent } from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const consent = localStorage.getItem('cookie-consent')
    setCookieConsent(consent)

    // 监听 cookie 同意状态变化
    const handleStorageChange = () => {
      const newConsent = localStorage.getItem('cookie-consent')
      setCookieConsent(newConsent)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // 仅在客户端渲染时显示内容
  if (!isClient) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
      <CookieConsent />
      {cookieConsent === 'true' && (
        <>
          <GoogleAnalytics />
          <GoogleAdsense />
          <Umami />
        </>
      )}
    </ThemeProvider>
  )
}

type CookieConsentStatus = 'true' | 'false' | null

export const getCookieConsent = (): CookieConsentStatus => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('cookie-consent') as CookieConsentStatus
}

export const setCookieConsent = (value: boolean) => {
  localStorage.setItem('cookie-consent', value.toString())
  // 触发 storage 事件以通知其他组件
  window.dispatchEvent(new Event('storage'))
}

export const hasCookieConsent = (): boolean => {
  return getCookieConsent() === 'true'
}

export const hasUserMadeChoice = (): boolean => {
  return getCookieConsent() !== null
}

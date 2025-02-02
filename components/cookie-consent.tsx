"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCookieConsent, hasUserMadeChoice, setCookieConsent } from '@/lib/cookie-consent';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(!hasUserMadeChoice());
  }, []);

  const acceptCookies = () => {
    setCookieConsent(true);
    setShowBanner(false);
  };

  const rejectCookies = () => {
    setCookieConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 ml-2 hover:underline">
            Learn more
          </Link>
        </p>
        <div className="flex gap-4">
          <button
            onClick={rejectCookies}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

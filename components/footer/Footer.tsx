import Link from "next/link"
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6"

import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Product Information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#templates" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  Templates
                </Link>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href={siteConfig.authors[0].twitter || "/"}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <FaXTwitter className="mr-2 h-5 w-5" />
                  Twitter
                </Link>
              </li>
              {siteConfig.authors[0].bluesky && (
                <li>
                  <Link
                    href={siteConfig.authors[0].bluesky}
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    <FaBluesky className="mr-2 h-5 w-5" />
                    Bluesky
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="https://github.com/softkern/ogimage.top"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <FaGithub className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Link
                href={siteConfig.url}
                prefetch={false}
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Free Open Graph Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

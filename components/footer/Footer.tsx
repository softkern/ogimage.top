import Link from "next/link"
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6"

import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.url}
              title="Free OG Image Generator"
              prefetch={false}
              className="font-mono font-semibold hover:underline"
            >
              Free OG Image Generator
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-start">
            <div className="flex items-center gap-x-4">
              <Link
                href={siteConfig.authors[0].twitter || "/"}
                prefetch={false}
                title="Follow me on Twitter"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-5 w-5 text-black dark:text-white" />
              </Link>

              {
                siteConfig.authors[0].bluesky &&
                <Link
                  href={siteConfig.authors[0].bluesky || "/"}
                  prefetch={false}
                  target="_blank"
                  title="Follow me on Bluesky"
                  rel="noopener noreferrer nofollow"
                  aria-label="Bluesky"
                >
                  <FaBluesky className="h-5 w-5 text-black dark:text-white" />
                </Link>
              }

              <Link
                href="https://github.com/softkern/ogimage.top"
                prefetch={false}
                title="ogimage-top"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 text-black dark:text-white" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

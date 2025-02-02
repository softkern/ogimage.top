import { Spacer } from "@nextui-org/react"
import Link from "next/link"

import { ogs, xHeaders } from "@/components/home/Images"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8">
          <h1 className="relative mb-4">
            <span className="inline-flex items-center">
              <span className="mr-2 text-blue-500">✦</span>
              <span className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text px-4 py-2 text-transparent transition-all duration-300 hover:from-purple-600 hover:to-blue-600 text-2xl font-bold">
                ogimage.top
              </span>
              <span className="ml-2 text-blue-500">✦</span>
            </span>
          </h1>
          <h2 className="mb-4 text-4xl font-bold leading-[1.2] text-gray-900 dark:text-gray-300 sm:text-6xl">
            {siteConfig.name}
          </h2>
          <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
            Create stunning social media preview images in seconds
          </p>
          <p className="mb-8 text-base text-gray-500 sm:text-lg">
            Professional Open Graph image generator with customizable templates, real-time preview, and API access.
            Perfect for developers, marketers, and content creators.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <Link
              href="#get-started"
              className={buttonVariants({
                size: "lg",
                className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600",
              })}
            >
              Get Started - It&apos;s Free
            </Link>
            <Link
              href="/guides"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              Guides
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Multiple Templates
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="curbarentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Real-time Preview
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              API Access
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex flex-nowrap items-center justify-center gap-4">
            {ogs.map(({ key, item }) => (
              <div key={key} className="flex-shrink-0">
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent" />
        </div>

        <Spacer y={4} />

        <div className="relative overflow-hidden">
          <div className="flex flex-nowrap items-center justify-center gap-4">
            {xHeaders.map(({ key, item }) => (
              <div key={key} className="flex-shrink-0">
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </div>
  )
}

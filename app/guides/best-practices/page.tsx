import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Design Tips - OG Image Generator",
  description: "Tips for creating effective Open Graph images that get more clicks and shares.",
}

export default function BestPracticesGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/guides"
          className={buttonVariants({
            variant: "ghost",
            className: "mb-8 group",
          })}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Guides
        </Link>

        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1>Design Tips</h1>
          
          <p className="lead">
            Create Open Graph images that capture attention and drive engagement with these practical tips.
          </p>

          <h2>Text and Layout</h2>
          <ul>
            <li>Keep text brief and to the point</li>
            <li>Use clear, readable fonts</li>
            <li>Create strong contrast with backgrounds</li>
            <li>Leave breathing room around elements</li>
          </ul>

          <h2>Visual Elements</h2>
          <ul>
            <li>Include your logo consistently</li>
            <li>Use high-quality images</li>
            <li>Keep designs clean and uncluttered</li>
            <li>Maintain brand color schemes</li>
          </ul>

          <h2>Content Strategy</h2>
          <ul>
            <li>Match image style to content type</li>
            <li>Test different approaches</li>
            <li>Update designs seasonally</li>
            <li>Create templates for regular content</li>
          </ul>

          <h2>Common Issues to Avoid</h2>
          <ul>
            <li>Too much text</li>
            <li>Busy backgrounds</li>
            <li>Poor image quality</li>
            <li>Inconsistent branding</li>
          </ul>

          <div className="not-prose">
            <div className="mt-12 flex justify-between">
              <Link
                href="/guides/optimization"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Previous: Image Optimization
              </Link>
              <Link
                href="/guides"
                className={buttonVariants({
                  className: "group",
                })}
              >
                Back to Guide List
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

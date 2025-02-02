import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Working with Templates - OG Image Generator",
  description: "Learn to use our templates effectively to create engaging Open Graph images for your content.",
}

export default function TemplatesGuidePage() {
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
          <h1>Working with Templates</h1>

          <p className="lead">
            Our templates help you create effective Open Graph images quickly. Here&apos;s how to make the most of them.
          </p>

          <h2>Available Templates</h2>
          <p>
            We offer templates designed for specific content types:
          </p>
          <ul>
            <li>
              <strong>Website Cards</strong>
              <p>Perfect for homepages and landing pages. Features space for your site name, tagline, and brand elements.</p>
            </li>
            <li>
              <strong>Article Cards</strong>
              <p>Designed for blog posts and articles. Highlights your title and draws readers in.</p>
            </li>
            <li>
              <strong>Product Cards</strong>
              <p>Showcase your products with space for product images, name, and key features.</p>
            </li>
            <li>
              <strong>Event Cards</strong>
              <p>Promote your events with templates that highlight date, time, and location.</p>
            </li>
          </ul>

          <h2>Template Structure</h2>
          <p>
            Each template includes these customizable zones:
          </p>
          <ul>
            <li>Title area with flexible font sizing</li>
            <li>Optional subtitle or description space</li>
            <li>Image placement zones</li>
            <li>Brand element areas</li>
            <li>Background customization</li>
          </ul>

          <h2>Making Templates Your Own</h2>
          <p>
            Ways to customize our templates:
          </p>
          <ul>
            <li>Replace placeholder text with your content</li>
            <li>Upload your own images and logos</li>
            <li>Apply your brand colors</li>
            <li>Adjust spacing and alignment</li>
            <li>Save modifications as new templates</li>
          </ul>

          <h2>Template Tips</h2>
          <ul>
            <li>Start with a template close to your needs to save time</li>
            <li>Consider your target platform when choosing a template</li>
            <li>Save your customized templates for future use</li>
            <li>Test your design at different sizes</li>
          </ul>

          <div className="not-prose">
            <div className="mt-12 flex justify-between">
              <Link
                href="/guides/getting-started"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Previous: Getting Started
              </Link>
              <Link
                href="/guides/optimization"
                className={buttonVariants({
                  className: "group",
                })}
              >
                Next: Image Optimization
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

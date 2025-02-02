import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Optimizing Your Images - OG Image Generator",
  description: "Learn how to optimize your Open Graph images for different social media platforms.",
}

export default function OptimizationGuidePage() {
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
          <h1>Optimizing Your Images</h1>

          <p className="lead">
            Make your Open Graph images look great everywhere. Here&apos;s what you need to know about image optimization.
          </p>

          <h2>Size Requirements</h2>
          <p>
            Different platforms have their own image size requirements:
          </p>
          <ul>
            <li>
              <strong>Facebook</strong>
              <p>1200 x 630 pixels - This size works well for most Facebook placements</p>
            </li>
            <li>
              <strong>Twitter</strong>
              <p>1200 x 675 pixels - Optimized for Twitter&apos;s card format</p>
            </li>
            <li>
              <strong>LinkedIn</strong>
              <p>1200 x 627 pixels - Best for professional networking feeds</p>
            </li>
          </ul>

          <h2>Image Quality</h2>
          <p>
            Balance quality and loading speed:
          </p>
          <ul>
            <li>Use JPEG for photos (80-90% quality)</li>
            <li>Choose PNG for images with text</li>
            <li>Keep file sizes under 1MB</li>
            <li>Test image loading speed</li>
          </ul>

          <h2>Layout Considerations</h2>
          <p>
            Design tips for better visibility:
          </p>
          <ul>
            <li>Place important elements in the center</li>
            <li>Leave space around the edges</li>
            <li>Use readable font sizes</li>
            <li>Test mobile preview</li>
          </ul>

          <h2>Platform Features</h2>
          <p>
            Take advantage of platform-specific features:
          </p>
          <ul>
            <li>Use Twitter&apos;s large card format</li>
            <li>Enable Facebook link preview</li>
            <li>Test LinkedIn article preview</li>
          </ul>

          <div className="not-prose">
            <div className="mt-12 flex justify-between">
              <Link
                href="/guides/templates"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Previous: Using Templates
              </Link>
              <Link
                href="/guides/best-practices"
                className={buttonVariants({
                  className: "group",
                })}
              >
                Next: Best Practices
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"


import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Getting Started with OG Image Generator",
  description: "Start creating Open Graph images for your website with our easy-to-follow guide.",
}

export default function GettingStartedPage() {
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
          <h1>Getting Started</h1>

          <p className="lead">
            Welcome to OG Image Generator. This guide will help you create your first Open Graph image.
          </p>

          <h2>Understanding Open Graph Images</h2>
          <p>
            Open Graph images appear when your content is shared on social media platforms. A well-designed OG image can:
          </p>
          <ul>
            <li>Increase click-through rates on social media</li>
            <li>Make your content stand out in social feeds</li>
            <li>Reinforce your brand identity</li>
            <li>Provide context for your shared content</li>
          </ul>

          <h2>Creating Your First Image</h2>
          <p>
            Our tool simplifies the image creation process:
          </p>
          <ol>
            <li>
              <strong>Select Your Content Type</strong>
              <p>Choose what kind of content you&apos;re creating an image for - website, article, product, or event.</p>
            </li>
            <li>
              <strong>Pick a Starting Point</strong>
              <p>Browse our templates or start with a blank canvas. Each template is designed for specific use cases.</p>
            </li>
            <li>
              <strong>Make It Yours</strong>
              <p>Add your text, adjust colors, and upload your logo. The live preview shows exactly how it will look when shared.</p>
            </li>
          </ol>

          <h2>Key Features to Know</h2>
          <ul>
            <li>
              <strong>Live Preview:</strong> See changes in real-time across different social platforms
            </li>
            <li>
              <strong>Smart Presets:</strong> Quick access to your brand colors and fonts
            </li>
            <li>
              <strong>Export Options:</strong> Download in multiple formats or get a direct URL
            </li>
          </ul>

          <h2>Next Steps</h2>
          <p>
            After creating your first image, you might want to:
          </p>
          <ul>
            <li>Set up your brand presets for consistent styling</li>
            <li>Try different templates for various content types</li>
            <li>Learn about platform-specific optimizations</li>
          </ul>

          <div className="not-prose">
            <div className="mt-12 flex justify-between">
              <Link
                href="/guides"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Back to Guide List
              </Link>
              <Link
                href="/guides/templates"
                className={buttonVariants({
                  className: "group",
                })}
              >
                Next: Using Templates
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

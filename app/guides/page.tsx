import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "User Guides - OG Image Generator",
  description: "Learn how to use OG Image Generator to create perfect social media preview images. Includes basic tutorials, template usage, and best practices.",
}

const guides = [
  {
    title: "Getting Started",
    description: "Master the basics of OG Image Generator in just 5 minutes",
    href: "/guides/getting-started",
    icon: "🚀",
  },
  {
    title: "Using Templates",
    description: "Learn how to choose and customize templates for professional results",
    href: "/guides/templates",
    icon: "🎨",
  },
  {
    title: "Image Optimization",
    description: "Optimize your images for the best social media presentation",
    href: "/guides/optimization",
    icon: "⚡",
  },
  {
    title: "Best Practices",
    description: "Professional tips and advice for creating engaging preview images",
    href: "/guides/best-practices",
    icon: "✨",
  },
]

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            OG Image Generator Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            From basics to advanced techniques, master the art of social media image creation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{guide.icon}</span>
                    {guide.title}
                  </CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={buttonVariants({
                    variant: "ghost",
                    className: "group w-full justify-between",
                  })}>
                    Read Guide
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Need more help? Check out our other resources:
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/examples"
              className={buttonVariants({
                variant: "outline",
              })}
            >
              View Examples
            </Link>
            <Link
              href="/blog"
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Read Blog
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

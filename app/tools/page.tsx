import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toolsConfig } from "@/config/nav"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Open Graph Tools - Free Tools for Developers",
  description: "A collection of free tools for working with Open Graph meta tags",
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold">Open Graph Tools</h1>
          <p className="text-muted-foreground">
            A collection of free tools to help you work with Open Graph meta tags
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {toolsConfig.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="h-full hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
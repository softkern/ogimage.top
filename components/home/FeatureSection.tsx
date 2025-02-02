import { FeatureCard } from '@/components/home/FeatureCard'
import { CreditCard, Eye, Layout, Lock, MousePointer, Palette, Share2, Sliders, Zap } from 'lucide-react'

export function FeatureSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Creation",
      description: "Generate professional OG images in seconds. Our optimized engine ensures rapid creation without compromising quality.",
      className: "bg-blue-50 dark:bg-gray-900",
      iconClassName: "text-blue-500",
    },
    {
      icon: MousePointer,
      title: "Intuitive Design Interface",
      description: "Create stunning visuals with our drag-and-drop editor. No design experience needed - just point, click, and create.",
      className: "bg-cyan-50 dark:bg-gray-900",
      iconClassName: "text-cyan-500",
    },
    {
      icon: CreditCard,
      title: "100% Free, No Login Required",
      description: "Access all features without registration or hidden fees. Start creating professional OG images immediately.",
      className: "bg-orange-50 dark:bg-gray-900",
      iconClassName: "text-orange-400",
    },
    {
      icon: Palette,
      title: "Premium Templates",
      description: "Choose from our extensive collection of professionally designed templates, optimized for maximum social media impact.",
      className: "bg-green-50 dark:bg-gray-900",
      iconClassName: "text-green-500",
    },
    {
      icon: Layout,
      title: "Multi-Platform Support",
      description: "One tool for all platforms - automatically optimize images for Facebook, Twitter, LinkedIn, and more.",
      className: "bg-sky-50 dark:bg-gray-900",
      iconClassName: "text-sky-400",
    },
    {
      icon: Eye,
      title: "Real-Time Preview",
      description: "See exactly how your image will appear on social media with instant, accurate previews as you edit.",
      className: "bg-yellow-50 dark:bg-gray-900",
      iconClassName: "text-yellow-500",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your data security is our priority. All uploads are processed securely and automatically deleted after generation.",
      className: "bg-red-50 dark:bg-gray-900",
      iconClassName: "text-red-500",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your generated images directly to social media or download in multiple formats (PNG, JPEG, WebP).",
      className: "bg-pink-50 dark:bg-gray-900",
      iconClassName: "text-pink-500",
    },
    {
      icon: Sliders,
      title: "Advanced Customization",
      description: "Fine-tune every aspect of your image with advanced controls for colors, fonts, layouts, and effects.",
      className: "bg-emerald-50 dark:bg-gray-900",
      iconClassName: "text-emerald-500",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Everything You Need for Perfect Social Media Previews
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Create professional Open Graph images that drive engagement and increase click-through rates
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

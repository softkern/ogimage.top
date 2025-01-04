import { FeatureCard } from '@/components/home/FeatureCard'
import { CreditCard, Download, Eye, Layout, MousePointer, Palette, Sliders, Zap } from 'lucide-react'

export function FeatureSection() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Creation",
      description: "Create stunning social media visuals in moments with our streamlined, user-friendly interface.",
      className: "bg-blue-50 dark:bg-gray-900",
      iconClassName: "text-blue-500",
    },
    {
      icon: MousePointer,
      title: "User-Friendly Interface",
      description: "Navigate effortlessly through our intuitive design tools. Create professional images with just a few clicks.",
      className: "bg-cyan-50 dark:bg-gray-900",
      iconClassName: "text-cyan-500",
    },
    {
      icon: CreditCard,
      title: "Free and No Login Required",
      description: "Enjoy full access to all features without any fees or registration requirements. Start creating immediately.",
      className: "bg-orange-50 dark:bg-gray-900",
      iconClassName: "text-orange-400",
    },
    {
      icon: Palette,
      title: "Diverse Templates",
      description: "Use a wide range of professionally crafted templates, from minimalist designs to eye-catching layouts.",
      className: "bg-green-50 dark:bg-gray-900",
      iconClassName: "text-green-500",
    },
    {
      icon: Layout,
      title: "Cross-Platform Optimization",
      description: "Generate images perfectly sized for various social platforms, including Open Graph, Twitter, and LinkedIn.",
      className: "bg-sky-50 dark:bg-gray-900",
      iconClassName: "text-sky-400",
    },
    {
      icon: Sliders,
      title: "Extensive Customization",
      description: "Tailor every element with custom backgrounds, gradients, and brand colors. Easily incorporate your own logos and images.",
      className: "bg-yellow-50 dark:bg-gray-900",
      iconClassName: "text-yellow-500",
    },
    {
      icon: Eye,
      title: "Real-Time Visualization",
      description: "Experience immediate visual feedback with our live preview feature as you design your perfect image.",
      className: "bg-purple-50 dark:bg-gray-900",
      iconClassName: "text-purple-500",
    },
    {
      icon: Download,
      title: "Flexible Export",
      description: "Save your creations in PNG, JPEG, or WebP formats, balancing optimal file size with superior image quality.",
      className: "bg-pink-50 dark:bg-gray-900",
      iconClassName: "text-pink-500",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 id='features' className="text-center text-3xl font-bold mb-12">
        Features
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className={feature.className}
            iconClassName={feature.iconClassName}
          />
        ))}
      </div>
    </div>
  )
}


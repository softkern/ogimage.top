import Link from "next/link";
import * as React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Open Graph Image Generator",
    href: "/#get-started",
    description:
      "Generate Open Graph image for your website",
  },
  {
    title: "Open Graph Tags Generator",
    href: "/open-graph-tags-generator",
    description:
      "Generate Open Graph meta tags for your website.",
  },
  {
    title: "Open Graph Preview",
    href: "/open-graph-preview-tool",
    description:
      "Preview how your website's Open Graph will be presented on social media platforms.",
  },
]

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-4 pb-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div>
          <Link
            href="/"
            title="Free OG Image Generator"
            prefetch={false}
            className="flex items-center space-x-2"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="block"
            />
            <span className="hidden text-lg tracking-tighter font-bold md:block">
              Free Open Graph Toolset
            </span>
          </Link>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
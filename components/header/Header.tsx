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
import { toolsConfig } from "@/config/nav";
import Image from "next/image";


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
                    {toolsConfig.map((component) => (
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
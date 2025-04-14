import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import logo from "/logo.svg";
import { List } from "lucide-react";
const cn = (...classes) => classes.filter(Boolean).join(" ");
export default function NavBarMiddleItem({ mainHeading, data }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="perspective-[800px]">
          <NavigationMenuTrigger className="bg-gray-700 text-white transform transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:rotate-x-12 hover:shadow-lg hover:scale-105 hover:bg-gray-700">
            {mainHeading}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-4 w-max">
              {data.map((d) => (
                <a
                  className="hover:bg-accent flex h-full w-fit select-none flex-col justify-end rounded-md  p-6 from-muted/50 to-muted no-underline outline-none focus:shadow-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href={d.href}
                  title="Installation"
                >
                  {d.tabTitle}
                </a>
              ))}
              {/* <li className="row-span-3">
                <NavigationMenuLink aschild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src={logo} className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}
              {/* <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/docs"
                title="Introduction"
              > */}
              {/* <p className="text-sm leading-tight text-muted-foreground"> */}
              {/* Re-usable components built using Radix UI and Tailwind CSS. */}
              {/* </p> */}
              {/* </a> */}
              {/* <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/docs/installation"
                title="Installation"
              >
                How to install dependencies and structure your app.
              </a>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/docs/primitives/typography"
                title="Typography"
              >
                Styles for headings, paragraphs, lists...etc
              </a> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

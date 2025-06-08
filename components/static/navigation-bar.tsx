import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function DesktopNavbar() {
    return (
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/voting-resources/how-to-vote">How To Vote</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Exit & Opinion Polls</NavigationMenuTrigger>
                <NavigationMenuContent className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <NavigationMenuLink asChild className="row-span-2 p-4">
                    <Link href="/polling/exit-polls/pepe">
                      <span className="mt-4 mb-2 text-lg font-medium">
                        Pepe Polling Co. Exit Poll
                      </span>
                      <span className="text-muted-foreground text-sm leading-tight">
                        Live Results of Exit Polls, contains party affiliations, confidence in key topics, and more.
                      </span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="row-span-2 p-4">
                    <Link href="/polling/opinion-polls/pepe">
                      <span className="mt-4 mb-2 text-lg font-medium">
                        Pepe Polling Co. Opinion Poll
                      </span>
                      <span className="text-muted-foreground text-sm leading-tight">
                        Results of leading candidates before polls open.
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
    )
}
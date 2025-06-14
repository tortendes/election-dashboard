import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PepeMobileNavigation } from "./navigation-drawer-submenu-pepe"
import { ModeToggle } from "../interactive/color-mode"

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
                <div className="flex items-center gap-0.5">
                <Image src="/icons/Redmont_Flag.svg" className="max-w-6" width={129} height={86} alt="Square flag of the Commonwealth of Redmont" />
                <span className="font-bold uppercase">Election Center</span>
                </div>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full gap-2 p-4">
          <Link href="/">
              <span className="text-3xl font-thin">Home</span>
          </Link>
          <Link href="/voting-resources/how-to-vote">
              <span className="text-3xl font-thin">How to Vote</span>
          </Link>
        <PepeMobileNavigation />
        </div>
        <SheetFooter>
            <div className="flex items-center justify center gap-4">
              <ModeToggle />
              <a href="https://tpanews.demcraft.site" target="_blank">
                <Image src="/icons/tpa-default-black.svg" alt="TPA News" className="dark:hidden dark:invisible w-32" width={785} height={98} />
                <Image src="/icons/tpa-default-white.svg" alt="TPA News" className="not-dark:hidden not-dark:invisible w-32" width={785} height={98}/>
              </a>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

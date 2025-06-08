import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

export function PepeMobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <h1 className="text-3xl font-thin">Exit and Opinion Polls</h1>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
                <div className="flex items-center gap-0.5">
                <img src="/icons/Redmont_Flag.svg" className="max-w-6" />
                <span className="font-bold uppercase">Election Center</span>
                </div>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full gap-2 p-4">
        <Link href="/polling/exit-polls/pepe">
            <span className="text-3xl font-thin">Pepe&apos;s Polling Co. Exit Poll</span>
        </Link>
        <Link href="/polling/opinion-polls/pepe">
            <span className="text-3xl font-thin">Pepe&apos;s Polling Co. Opinion Poll</span>
        </Link>
        </div>
        <SheetFooter>
            <div className="flex items-center justify center">
                <a href="https://tpanews.demcraft.site" target="_blank">
                    <img src="/icons/tpa-default-black.svg" alt="TPA News" className="dark:hidden dark:invisible w-32" />
                    <img src="/icons/tpa-default-white.svg" alt="TPA News" className="not-dark:hidden not-dark:invisible w-32" />
                </a>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

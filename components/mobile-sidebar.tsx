import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
  } from "@/components/ui/sheet"
  
import { SideBar } from "@/components/SideBar";
import { MyAiLogo } from "@/components/marketing/myai-logo";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


interface MSideBarProps {
  isPro: boolean;
}

export const MobileSidebar = ({ isPro }: MSideBarProps) => {
  return ( 
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 pl-4 ">
        <HiOutlineMenuAlt1 className="text-primary" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-violet-50/90 dark:bg-zinc-900/90 pt-10 w-32">
        <SheetTitle className="sr-only">MyAI navigation</SheetTitle>
        <div className="px-3 pb-4">
          <MyAiLogo compact />
        </div>
        <SideBar isPro={isPro}/>
      </SheetContent>
    </Sheet>
  )
}

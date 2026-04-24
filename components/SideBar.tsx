"use client"

import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { HomeIcon, PlusIcon, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SideBarProps {
    isPro: boolean;
}
  

export const SideBar = ({ isPro }: SideBarProps) => {

    const pathname = usePathname();
    const router = useRouter();
    const proModal = useProModal();
    const routes = [
        {
            icon: HomeIcon,
            href: "/",
            label: "Home",
            pro: false,
        },
        {
            icon: PlusIcon,
            href: "/character/new",
            label: "Create",
            pro: true,
        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false,
        }
    ]

    const onNavigate = (url: string, pro: boolean) => {
        if(pro && !isPro){
            return proModal.onOpen();
        }
        return router.push(url);
    }


    return (
        <div className="space-y-4 flex flex-col items-center border border-violet-500/10 h-full text-violet-700 bg-violet-50/80 dark:text-violet-300 dark:bg-zinc-900/80 backdrop-blur-xl">
            <div className="p-3 flex flex-1 justify-center">
                <div className="space-y-2">
                    {routes.map((route) => (
                        <div onClick={() => onNavigate(route.href, route.pro)} key={route.href} 
                            className={cn("text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-violet-700 hover:bg-violet-500/10 rounded-lg transition",
                            pathname === route.href && "text-violet-700 bg-violet-500/10 dark:text-violet-300")}>
                                <div className="flex flex-col gap-y-2 items-center flex-1">
                                    <route.icon className="h-5 w-5"/>
                                    {route.label}
                                </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
}

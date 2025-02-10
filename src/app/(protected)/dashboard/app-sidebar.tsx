'use client'

import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import useProject from "@/hooks/use-project"
import { cn } from "@/lib/utils"
import { Bot, Globe2Icon, LayoutDashboard, Plus, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Q&A",
        url: "/qa",
        icon: Bot
    },
    {
        title: "Meetings",
        url: "/meetings",
        icon: Presentation
    },
    {
        title: "Billing",
        url: "/billing",
        icon: LayoutDashboard
    },
]



export function AppSidebar() {
    const pathName = usePathname()
    const {open} = useSidebar()
    const {projects, projectId, setProjectId} = useProject()
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <div>
                        <Globe2Icon/>
                    </div>
                    {open && (
                        <h1 className="font-bold text-primary/80 text-sm">
                        Collaborate Sphere
                    </h1>
                    )}
                    
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url} className={cn({'!bg-primary !text-white': pathName === item.url}, "list-none")}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        Your projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects?.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <div onClick={() => {
                                            setProjectId(item.id)
                                        }}>
                                            <div className={cn("rounded-sm border size-6 flex shrink-0 items-center justify-center text-sm bg-white text-primary",
                                                {
                                                    'bg-primary text-white' : item.id === projectId
                                                }
                                            )}>
                                                {item.name[0]}
                                            </div>
                                            <span>{item.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            <div className="h-2">

                            </div>
                            {open && (
                                                            <SidebarMenuItem>
                                                            <Link href={"/create"}>
                                                            <Button size="sm" variant={'outline'} className="w-fit">
                                                            <Plus className="mr-2 h-4 w-4" />
                                                            New Project
                                                        </Button>
                                                            </Link>
                                                        </SidebarMenuItem>
                            )}
                            
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
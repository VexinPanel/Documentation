"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Home, Download, Code, Laptop, Settings, Zap, BookOpen } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Introduction", url: "/", icon: <Home className="mr-2 h-4 w-4" /> },
  { title: "Getting Started", url: "/getting-started", icon: <Zap className="mr-2 h-4 w-4" /> },
  { title: "How to Use", url: "/how-to-use", icon: <BookOpen className="mr-2 h-4 w-4" /> },
  { title: "Picking an OS", url: "/picking-an-os", icon: <Laptop className="mr-2 h-4 w-4" /> },
  { title: "Components", url: "/components", icon: <Code className="mr-2 h-4 w-4" /> },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Settings className="size-4 animate-spin-slow" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Vexin</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const searchQuery = (e.target as HTMLFormElement).search.value
            if (searchQuery.trim()) {
              // You could implement more advanced search functionality here
              // For now, we'll just alert the search query
              alert(`Searching for: ${searchQuery}`)

              // In a real implementation, you might:
              // 1. Navigate to a search results page
              // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
              // 2. Or filter content directly in the sidebar
            }
          }}
        >
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input id="search" name="search" placeholder="Search the docs..." className="pl-8" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-primary/10"
                aria-label="Search"
              >
                <Search className="size-4" />
              </button>
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center">
                      {item.icon}
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="https://github.com/vexin/releases" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Latest
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

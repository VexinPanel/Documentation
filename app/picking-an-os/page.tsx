import type { Metadata } from "next"
import { Laptop, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Picking an OS | Vexin Documentation",
  description: "Choose the right operating system for your Vexin installation",
}

export default function PickingAnOS() {
  return (
    <main className="mx-auto max-w-3xl animate-fade-in">
      <div className="mb-8 flex items-center">
        <div className="mr-4 rounded-lg bg-primary/10 p-2">
          <Laptop className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Picking an OS</h1>
      </div>

      <p className="mb-6 text-xl">
        Vexin is currently optimized for Windows, with Linux and macOS support in development.
      </p>

      <div className="mb-8">
        <Card className="border-green-500/30 transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
                Windows
              </CardTitle>
              <Badge variant="outline" className="bg-green-500/20 text-green-500">
                Available Now
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="mb-2">
                Vexin is fully optimized for Windows 10 and Windows 11, providing the best experience with all features
                available.
              </p>
              <p>
                The Windows version includes the complete feature set, native performance optimizations, and receives
                regular updates.
              </p>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Supported Windows Versions</h3>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Windows 10 (64-bit)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Windows 11</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">System Requirements</h3>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>4GB RAM (8GB recommended)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>500MB free disk space</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Python 3.8+ and/or Node.js 16+</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button className="w-full">Download for Windows</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">Coming Soon</h2>
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card className="border-yellow-500/30 transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 16c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2" />
                  <path d="M12 4L12 12" />
                  <path d="M9 7l3-3 3 3" />
                  <rect x="4" y="16" width="16" height="6" rx="2" />
                </svg>
                Linux
              </CardTitle>
              <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500">
                In Development
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Linux support is currently in development with a focus on Ubuntu and Debian-based distributions. Join our
              waitlist to be notified when it's available.
            </p>
            <div className="space-y-1 mb-4">
              <div className="flex items-center text-sm">
                <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                <span>Expected Q3 2023</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" disabled>
              Join Waitlist
            </Button>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/30 transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c-1.1 0-2 .9-2 2v2h4V5c0-1.1-.9-2-2-2z" />
                  <rect x="8" y="7" width="8" height="15" rx="1" />
                  <path d="M8 15h8" />
                </svg>
                macOS
              </CardTitle>
              <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500">
                Planned
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              macOS support is planned with compatibility for both Intel and Apple Silicon processors. Join our waitlist
              to be notified when it's available.
            </p>
            <div className="space-y-1 mb-4">
              <div className="flex items-center text-sm">
                <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                <span>Expected Q4 2023</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" disabled>
              Join Waitlist
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
        <h3 className="font-medium mb-2">Why Windows First?</h3>
        <p>
          We've prioritized Windows for our initial release as it's the most common operating system among Discord bot
          developers. This allows us to focus on delivering a polished experience before expanding to other platforms.
          Our goal is to support all major operating systems to ensure every developer can benefit from Vexin's
          features.
        </p>
      </div>
    </main>
  )
}

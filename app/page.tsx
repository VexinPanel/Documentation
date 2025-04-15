import type { Metadata } from "next"
import { ArrowRight, Zap, Code, Bot, Terminal, Server, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Introduction | Vexin Documentation",
  description: "Live-manage your Discord bot's code in real time",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl animate-fade-in">
      <div className="mb-8 flex items-center">
        <div className="mr-4 rounded-lg bg-primary/10 p-2">
          <Bot className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Welcome to Vexin</h1>
      </div>

      <p className="mb-6 text-xl">
        Vexin is a powerful, sleek desktop application built to live-manage your Discord bot's code in real time.
      </p>

      <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button asChild size="lg" className="group">
          <Link href="/getting-started" className="flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/picking-an-os">Choose Your OS</Link>
        </Button>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
          <CardHeader className="bg-primary/5 pb-2">
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-primary" />
              Real-time Updates
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <CardDescription>
              Edit, update, and deploy code instantly without restarting your bot or switching between bloated dev
              tools.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
          <CardHeader className="bg-primary/5 pb-2">
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5 text-primary" />
              Multi-language Support
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <CardDescription>
              Whether you're coding in Python or JavaScript, Vexin supports both ecosystems, giving you freedom and
              flexibility.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">What is Vexin?</h2>
      <div className="mb-8 rounded-lg border border-primary/10 bg-primary/5 p-6">
        <p className="mb-4">
          Vexin is a specialized desktop application designed for Discord bot developers who want to streamline their
          workflow and eliminate the frustration of constant bot restarts during development.
        </p>

        <p className="mb-4">
          Unlike traditional development environments or bot hosting platforms, Vexin focuses specifically on providing
          a seamless, real-time development experience for your Discord bots. It connects directly to Discord via your
          bot token and allows you to make code changes that take effect immediately.
        </p>

        <p>
          Whether you're building a simple command bot or a complex multi-server application, Vexin makes the
          development process faster, more visual, and more intuitive.
        </p>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <Terminal className="mr-2 h-5 w-5 text-primary" />
              Live Code Editor
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm">
              Edit your bot's code with syntax highlighting, auto-completion, and error detection.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <RefreshCw className="mr-2 h-5 w-5 text-primary" />
              Hot Reloading
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm">Changes take effect instantly without restarting your bot or disrupting users.</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <Server className="mr-2 h-5 w-5 text-primary" />
              Real-time Logs
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm">Monitor your bot's activity, errors, and performance in real-time.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">Who is Vexin For?</h2>
      <div className="mb-8 space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Discord Bot Developers</h3>
          <p className="text-sm text-muted-foreground">
            Whether you're a hobbyist or professional, Vexin streamlines your workflow and eliminates the frustration of
            constant bot restarts.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Server Owners & Moderators</h3>
          <p className="text-sm text-muted-foreground">
            Quickly implement and test new bot features for your community without technical downtime.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Development Teams</h3>
          <p className="text-sm text-muted-foreground">
            Collaborate efficiently with a visual interface that makes bot development more accessible to team members.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
        <h2 className="mb-4 text-xl font-semibold">Important Note</h2>
        <p className="mb-2">
          Vexin is <strong>not</strong> a bot hosting platform. It's a development tool designed to enhance your local
          workflow.
        </p>
        <p>
          For 24/7 bot hosting, you'll still need to deploy your bot to a hosting service or your own server once you've
          finished development.
        </p>
      </div>
    </main>
  )
}

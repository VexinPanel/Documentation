import type { Metadata } from "next"
import { Code, Bot, Music, Shield, Coins, Puzzle, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Components | Vexin Documentation",
  description: "Explore the components available in Vexin",
}

export default function Components() {
  return (
    <main className="mx-auto max-w-3xl animate-fade-in">
      <div className="mb-8 flex items-center">
        <div className="mr-4 rounded-lg bg-primary/10 p-2">
          <Code className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Components</h1>
      </div>

      <p className="mb-6 text-xl">
        Vexin provides a set of powerful components to help you build and manage your Discord bot efficiently.
      </p>

      <Tabs defaultValue="core" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="core">Core Features</TabsTrigger>
          <TabsTrigger value="plugins">Plugins</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="extensions">Extensions</TabsTrigger>
        </TabsList>
        <TabsContent value="core" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                Live Code Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The Live Code Editor is the heart of Vexin, allowing you to edit your bot's code in real-time with
                syntax highlighting, auto-completion, and instant deployment without restarting your bot.
              </p>
              <pre className="bg-muted mt-4 p-4 rounded-md overflow-x-auto">
                <code>{`# Example Python bot code
@bot.command()
async def hello(ctx):
    await ctx.send("Hello from Vexin!")`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Terminal className="mr-2 h-5 w-5 text-primary" />
                Console Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The Console Output component displays real-time logs from your bot, including command executions,
                errors, and debug information, making it easy to monitor your bot's activity.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plugins" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2 h-5 w-5 text-primary" />
                Music Plugin
              </CardTitle>
              <CardDescription>Coming Soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The Music Plugin will provide ready-to-use components for creating a music bot with queue management,
                playback controls, and support for multiple music sources.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Moderation Plugin
              </CardTitle>
              <CardDescription>Coming Soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The Moderation Plugin will offer tools for server management, including user warnings,
                temporary/permanent bans, message purging, and auto-moderation features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coins className="mr-2 h-5 w-5 text-primary" />
                Economy Plugin
              </CardTitle>
              <CardDescription>Coming Soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The Economy Plugin will provide a framework for creating an economy system in your Discord server, with
                currency management, shops, and user balances.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="mt-4">
          <p className="text-muted-foreground mb-4">
            Templates will be available in a future update, allowing you to quickly start with pre-built bot structures.
          </p>
        </TabsContent>

        <TabsContent value="extensions" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Puzzle className="mr-2 h-5 w-5 text-primary" />
                Extension System
              </CardTitle>
              <CardDescription>Coming Soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The Extension System will allow you to create and install custom extensions to enhance Vexin's
                functionality. This will enable the community to build and share powerful tools for Discord bot
                development.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Language Support</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
          <CardHeader className="bg-primary/5 pb-2">
            <CardTitle className="flex items-center">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                  fill="#6c8eff"
                />
                <path
                  d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                  fill="#6c8eff"
                />
              </svg>
              Python
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-2">Vexin fully supports Python Discord bots using:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>discord.py</li>
              <li>Pycord</li>
              <li>Nextcord</li>
              <li>Other Python Discord libraries</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
          <CardHeader className="bg-primary/5 pb-2">
            <CardTitle className="flex items-center">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h256v256H0V0z" fill="none" />
                <path
                  d="M116.504 49.438c-1.78.05-3.6.154-5.487.383-12.254 1.51-23.16 7.112-30.97 15.749-7.717 8.53-12.98 20.118-13.682 33.252-1.15 21.523 9.97 42.318 30.18 53.806 20.21 11.487 45.79 9.012 63.45-7.183 17.66-16.196 24.02-42.44 16.19-64.236-7.84-21.796-28.12-37.074-51.53-38.018-.98-.04-1.96-.06-2.94-.06-1.72 0-3.47.05-5.21.153v.154zm-5.486 9.382c1.52-.23 3.04-.307 4.56-.307 1.52 0 3.04.077 4.56.307 10.97.69 21.94 5.474 30.2 13.85 8.26 8.376 14.03 20.8 14.03 33.25 0 12.45-5.77 24.874-14.03 33.25-8.26 8.376-19.23 13.16-30.2 13.85-10.97.69-22.17-3.07-30.97-10.77-8.8-7.7-15.36-19.38-15.36-36.33 0-16.95 6.56-28.63 15.36-36.33 8.8-7.7 19.23-10.77 30.2-10.77h-8.35z"
                  fill="#f0db4f"
                />
              </svg>
              JavaScript
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-2">Vexin fully supports JavaScript Discord bots using:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Discord.js</li>
              <li>Eris</li>
              <li>Oceanic.js</li>
              <li>Other Node.js Discord libraries</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

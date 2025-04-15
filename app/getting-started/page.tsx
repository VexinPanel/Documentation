import type { Metadata } from "next"
import { Download, Terminal, Bot, Code, Zap, Key } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Getting Started | Vexin Documentation",
  description: "Learn how to get started with Vexin for Discord bot development",
}

export default function GettingStarted() {
  return (
    <main className="mx-auto max-w-3xl animate-fade-in">
      <div className="mb-8 flex items-center">
        <div className="mr-4 rounded-lg bg-primary/10 p-2">
          <Zap className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Getting Started</h1>
      </div>

      <p className="mb-6 text-xl">
        Welcome to Vexin! This guide will help you set up and start using Vexin to manage your Discord bot.
      </p>

      <div className="mb-8 space-y-6">
        <Card className="border-l-4 border-l-primary overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Download className="mr-2 h-5 w-5 text-primary" />
              Step 1: Download and Install
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Download the latest release from our official releases page</li>
              <li>Run the installer and follow the on-screen instructions</li>
              <li>Launch Vexin after installation completes</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5 text-primary" />
              Step 2: Select Your Language
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Vexin supports both Python and Node.js for Discord bot development:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>For Python bots, select Python in the language dropdown</li>
              <li>For JavaScript bots, select Node.js in the language dropdown</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Make sure you have the appropriate runtime installed on your system.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-5 w-5 text-primary" />
              Step 3: Create a Discord Bot Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Go to the{" "}
                <a href="https://discord.com/developers/applications" className="text-primary hover:underline">
                  Discord Developer Portal
                </a>
              </li>
              <li>Click the "New Application" button in the top right</li>
              <li>Enter a name for your application and click "Create"</li>
              <li>In the left sidebar, click on "Bot"</li>
              <li>Click "Add Bot" and confirm by clicking "Yes, do it!"</li>
              <li>Under the "TOKEN" section, click "Reset Token" and confirm</li>
              <li>Click "Copy" to copy your bot token (keep this secure!)</li>
              <li>Scroll down to "Privileged Gateway Intents" and enable any intents your bot needs</li>
              <li>Click "Save Changes"</li>
            </ol>
            <p className="mt-2 text-sm text-muted-foreground">
              Never share your bot token publicly. Anyone with your token can control your bot.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-primary" />
              Step 4: Connect Your Bot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Click "Create a New Bot" in the Vexin dashboard</li>
              <li>Enter a name for your bot</li>
              <li>Select your preferred language (Python or JavaScript)</li>
              <li>Paste your Discord bot token</li>
              <li>Click "Create" to set up your bot</li>
            </ol>
            <p className="mt-2 text-sm text-muted-foreground">
              Vexin will automatically configure your development environment based on your selected language.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Terminal className="mr-2 h-5 w-5 text-primary" />
              Step 5: Start Coding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Now you're ready to start coding with Vexin:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Edit your .py or .js files directly in Vexin's code editor</li>
              <li>View real-time console output in the logs panel</li>
              <li>Debug errors with the integrated error handling</li>
              <li>Push updates instantly without restarting your bot</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-center text-muted-foreground">
        Need more help? Check out our detailed guides for specific use cases.
      </p>
    </main>
  )
}

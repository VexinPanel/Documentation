import type { Metadata } from "next"
import { BookOpen, Code, Bot, Terminal, Settings, RefreshCw, FileCode, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "How to Use | Vexin Documentation",
  description: "Learn how to use Vexin to manage your Discord bot",
}

export default function HowToUse() {
  return (
    <main className="mx-auto max-w-3xl animate-fade-in">
      <div className="mb-8 flex items-center">
        <div className="mr-4 rounded-lg bg-primary/10 p-2">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">How to Use Vexin</h1>
      </div>

      <p className="mb-6 text-xl">
        This guide will walk you through using Vexin to manage and develop your Discord bot in real-time.
      </p>

      <Tabs defaultValue="interface" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="interface">Interface</TabsTrigger>
          <TabsTrigger value="editing">Editing Code</TabsTrigger>
          <TabsTrigger value="commands">Managing Commands</TabsTrigger>
          <TabsTrigger value="debugging">Debugging</TabsTrigger>
        </TabsList>

        <TabsContent value="interface" className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-4 text-xl font-semibold">Understanding the Interface</h2>
            <p className="mb-4">
              Vexin's interface is designed to be intuitive and efficient, giving you all the tools you need to manage
              your Discord bot.
            </p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Code Editor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The main code editor where you'll write and edit your bot's code. Features syntax highlighting,
                    auto-completion, and error detection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Terminal className="mr-2 h-5 w-5 text-primary" />
                    Console Output
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Displays real-time logs from your bot, including command executions, errors, and debug information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <FileCode className="mr-2 h-5 w-5 text-primary" />
                    File Explorer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Navigate through your bot's files and folders. Double-click to open files in the editor.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Settings className="mr-2 h-5 w-5 text-primary" />
                    Settings Panel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Configure your bot's settings, including token, prefix, and other options.</p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
              <h3 className="font-medium mb-2">Interface Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • Use <kbd className="px-1 py-0.5 rounded bg-muted">Ctrl+S</kbd> to save changes and apply them
                  instantly
                </li>
                <li>• The status indicator in the bottom bar shows your bot's connection status</li>
                <li>• Hover over console messages for additional details</li>
                <li>• Right-click on files for additional options</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="editing" className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-4 text-xl font-semibold">Editing Your Bot's Code</h2>
            <p className="mb-4">
              One of Vexin's most powerful features is the ability to edit your bot's code and see changes take effect
              instantly without restarting.
            </p>

            <h3 className="mb-2 font-medium">Making Changes</h3>
            <ol className="mb-4 list-decimal list-inside space-y-2 text-sm">
              <li>Open the file you want to edit from the File Explorer</li>
              <li>Make your changes in the Code Editor</li>
              <li>
                Save the file (<kbd className="px-1 py-0.5 rounded bg-muted">Ctrl+S</kbd>)
              </li>
              <li>Changes are automatically applied to your running bot</li>
            </ol>

            <div className="mb-4 rounded-lg bg-primary/5 p-4 border border-primary/10">
              <h3 className="font-medium mb-2">Example: Editing a Command</h3>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
                <code>{`# Before
@bot.command()
async def hello(ctx):
    await ctx.send("Hello!")

# After
@bot.command()
async def hello(ctx):
    await ctx.send(f"Hello, {ctx.author.name}!")
`}</code>
              </pre>
              <p className="mt-2 text-sm">
                After saving, the command will immediately respond with the user's name without requiring a bot restart.
              </p>
            </div>

            <h3 className="mb-2 font-medium">Hot Reloading Limitations</h3>
            <p className="mb-2 text-sm">While most code changes take effect immediately, there are some limitations:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Changes to bot initialization code may require a restart</li>
              <li>Adding new dependencies requires a restart</li>
              <li>Major structural changes might need a manual reload</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="commands" className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-4 text-xl font-semibold">Managing Bot Commands</h2>
            <p className="mb-4">Vexin makes it easy to create, edit, and manage your bot's commands.</p>

            <div className="mb-4">
              <h3 className="mb-2 font-medium">Creating a New Command</h3>
              <p className="mb-2 text-sm">For Python (discord.py):</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
                <code>{`@bot.command()
async def welcome(ctx, member: discord.Member = None):
    member = member or ctx.author
    await ctx.send(f"Welcome to the server, {member.mention}!")
`}</code>
              </pre>

              <p className="mb-2 mt-4 text-sm">For JavaScript (discord.js):</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
                <code>{`client.on('messageCreate', message => {
  if (message.content.startsWith('!welcome')) {
    const member = message.mentions.members.first() || message.member;
    message.channel.send(\`Welcome to the server, \${member}!\`);
  }
});
`}</code>
              </pre>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 font-medium">Command Organization</h3>
              <p className="mb-2 text-sm">
                For larger bots, it's recommended to organize commands into separate files:
              </p>
              <div className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
                <pre>
                  <code>{`my_bot/
├── main.py
├── commands/
│   ├── admin.py
│   ├── fun.py
│   ├── moderation.py
│   └── utilities.py
└── events/
    ├── on_message.py
    └── on_member_join.py
`}</code>
                </pre>
              </div>
              <p className="mt-2 text-sm">
                Vexin will automatically detect changes in any of these files and apply them in real-time.
              </p>
            </div>

            <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
              <h3 className="font-medium mb-2">Best Practices</h3>
              <ul className="space-y-1 text-sm">
                <li>• Use descriptive command names</li>
                <li>• Add help text to commands</li>
                <li>• Implement error handling for each command</li>
                <li>• Group related commands together</li>
                <li>• Test commands after making changes</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="debugging" className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-4 text-xl font-semibold">Debugging Your Bot</h2>
            <p className="mb-4">Vexin provides powerful tools to help you identify and fix issues in your bot.</p>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Terminal className="mr-2 h-5 w-5 text-primary" />
                    Console Logging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Use print statements or logging to output debug information:</p>
                  <pre className="bg-muted p-2 rounded-md overflow-x-auto text-xs">
                    <code>{`# Python
print(f"Command executed by {ctx.author}")

# JavaScript
console.log(\`Command executed by \${message.author.tag}\`)`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                    Error Handling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Implement try/except blocks to catch and handle errors:</p>
                  <pre className="bg-muted p-2 rounded-md overflow-x-auto text-xs">
                    <code>{`# Python
try:
    # Your code here
except Exception as e:
    print(f"Error: {e}")
    
# JavaScript
try {
  // Your code here
} catch (error) {
  console.error(\`Error: \${error}\`);
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h3 className="mb-2 font-medium">Using the Debug Panel</h3>
            <p className="mb-4 text-sm">Vexin's Debug Panel provides additional tools for troubleshooting:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>View detailed error traces with line numbers</li>
              <li>Filter logs by severity (info, warning, error)</li>
              <li>Search through logs for specific text</li>
              <li>Export logs for sharing or further analysis</li>
            </ul>

            <div className="mt-4 rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
              <div className="flex items-start">
                <AlertCircle className="mr-2 mt-1 h-5 w-5 text-yellow-500" />
                <div>
                  <h3 className="font-medium text-yellow-500">Common Issues</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Permission errors - Make sure your bot has the required permissions</li>
                    <li>• Token issues - Verify your bot token is correct and not exposed</li>
                    <li>• Rate limiting - Be mindful of Discord's rate limits</li>
                    <li>• API changes - Keep your libraries updated to handle Discord API changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <h2 className="mb-4 text-2xl font-semibold">Advanced Usage</h2>
      <div className="mb-8 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RefreshCw className="mr-2 h-5 w-5 text-primary" />
              Working with Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Vexin allows you to modify event handlers in real-time, making it easy to test and refine your bot's
              responses to Discord events.
            </p>

            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium">Python Example (discord.py)</h3>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
                <code>{`@bot.event
async def on_member_join(member):
    welcome_channel = member.guild.system_channel
    if welcome_channel:
        await welcome_channel.send(f"Welcome to the server, {member.mention}!")
        # You can edit this message format and save to see changes immediately`}</code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">JavaScript Example (discord.js)</h3>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
                <code>{`client.on('guildMemberAdd', member => {
  const welcomeChannel = member.guild.systemChannel;
  if (welcomeChannel) {
    welcomeChannel.send(\`Welcome to the server, \${member}!\`);
    // Edit this message and save to see changes immediately
  }
});`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-primary" />
              Creating Custom Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Beyond basic commands, Vexin supports development of complex bot features:</p>

            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Custom embed builders with real-time preview</li>
              <li>Interactive menus and button systems</li>
              <li>Scheduled tasks and reminders</li>
              <li>Database integration for persistent data</li>
              <li>API connections to external services</li>
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              All these features can be developed and tested in real-time using Vexin's hot-reloading capabilities.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
        <h2 className="mb-4 text-xl font-semibold">Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium">Do</h3>
            <ul className="space-y-1 text-sm">
              <li>• Save files frequently to apply changes</li>
              <li>• Use proper error handling in your code</li>
              <li>• Organize your code into logical modules</li>
              <li>• Test commands in a private server first</li>
              <li>• Back up your code regularly</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Don't</h3>
            <ul className="space-y-1 text-sm">
              <li>• Share your bot token publicly</li>
              <li>• Make too many API requests at once</li>
              <li>• Edit core initialization files while running</li>
              <li>• Ignore error messages in the console</li>
              <li>• Deploy untested code to production</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  GitBranch, 
  GitCommit, 
  GitMerge, 
  Github, 
  Terminal, 
  FileCode, 
  Users, 
  BookOpen,
  Code2,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Download,
  Upload,
  Folder,
  Settings,
  Shield,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GitGithubDocs = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("getting-started");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
    });
  };

  const sections = [
    { id: "getting-started", label: "Getting Started", icon: BookOpen },
    { id: "understanding-git", label: "Understanding Git", icon: Code2 },
    { id: "basic-commands", label: "Basic Commands", icon: Terminal },
    { id: "branching", label: "Branching & Merging", icon: GitBranch },
    { id: "github", label: "GitHub Essentials", icon: Github },
    { id: "collaboration", label: "Collaboration", icon: Users },
    { id: "workflows", label: "Git Workflows", icon: GitMerge },
    { id: "advanced", label: "Advanced Topics", icon: Code2 },
    { id: "troubleshooting", label: "Troubleshooting", icon: AlertCircle },
    { id: "pro-tips", label: "Pro Tips & Tricks", icon: CheckCircle2 },
  ];

  const CommandBlock = ({ command, description }: { command: string; description?: string }) => (
    <div className="bg-muted/50 rounded-lg p-4 mb-3 group relative">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <code className="text-sm font-mono block text-primary break-all">{command}</code>
          {description && <p className="text-xs text-muted-foreground mt-2">{description}</p>}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => copyToClipboard(command)}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const TopicCard = ({ icon: Icon, title, description, badge }: any) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <GitBranch className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Version Control Mastery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Git & GitHub Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Master version control from basics to advanced workflows. Learn Git commands, GitHub collaboration, and industry best practices.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="px-4 py-1">
                <Code2 className="h-3 w-3 mr-1" />
                Hands-on Examples
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                <Users className="h-3 w-3 mr-1" />
                Team Workflows
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-base">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-1 p-4">
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              activeSection === section.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            {section.label}
                          </button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <Tabs value={activeSection} onValueChange={setActiveSection}>
                {/* Getting Started */}
                <TabsContent value="getting-started" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Getting Started with Git
                      </CardTitle>
                      <CardDescription>
                        Install Git, configure your environment, and understand the basics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Installation */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Installation
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium mb-2">Windows:</p>
                            <CommandBlock command="Download from: https://git-scm.com/download/win" />
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-2">macOS:</p>
                            <CommandBlock command="brew install git" description="Using Homebrew package manager" />
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-2">Linux (Ubuntu/Debian):</p>
                            <CommandBlock command="sudo apt-get update && sudo apt-get install git" />
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-2">Verify Installation:</p>
                            <CommandBlock command="git --version" description="Should display installed Git version" />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Configuration */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Initial Configuration
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Configure your identity for all local repositories:
                        </p>
                        <CommandBlock 
                          command='git config --global user.name "Your Name"' 
                          description="Set your username for commits"
                        />
                        <CommandBlock 
                          command='git config --global user.email "your.email@example.com"' 
                          description="Set your email for commits"
                        />
                        <CommandBlock 
                          command="git config --global core.editor code" 
                          description="Set VS Code as default editor (optional)"
                        />
                        <CommandBlock 
                          command="git config --list" 
                          description="View all configuration settings"
                        />
                      </div>

                      <Separator />

                      {/* Key Concepts */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Folder className="h-4 w-4" />
                                Repository (Repo)
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              A directory containing your project files and the entire history of changes
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <GitCommit className="h-4 w-4" />
                                Commit
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              A snapshot of your changes with a descriptive message
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <GitBranch className="h-4 w-4" />
                                Branch
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              A parallel version of your code for developing features independently
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <GitMerge className="h-4 w-4" />
                                Merge
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              Combining changes from different branches into one
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Understanding Git */}
                <TabsContent value="understanding-git" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        Understanding Git - Core Concepts
                      </CardTitle>
                      <CardDescription>
                        Deep dive into how Git works under the hood
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* What is Version Control */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">What is Version Control?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Version control is a system that records changes to files over time so you can recall specific versions later. 
                          Think of it as a "time machine" for your code that lets you:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-medium">Track Changes</p>
                                  <p className="text-xs text-muted-foreground">See who changed what and when</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-medium">Revert Changes</p>
                                  <p className="text-xs text-muted-foreground">Undo mistakes and go back in time</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-medium">Collaborate</p>
                                  <p className="text-xs text-muted-foreground">Work with team members simultaneously</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-medium">Experiment Safely</p>
                                  <p className="text-xs text-muted-foreground">Try new features without breaking code</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Git vs Other VCS */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Why Git?</h3>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                          <p className="text-sm">
                            <span className="font-semibold text-primary">Git is distributed:</span> Every developer has a full copy 
                            of the entire project history on their machine. This makes it fast, reliable, and allows offline work.
                          </p>
                        </div>
                        <div className="grid gap-3">
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="p-2 bg-green-500/10 rounded">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">Lightning Fast</p>
                              <p className="text-xs text-muted-foreground">Most operations are local and instant</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="p-2 bg-green-500/10 rounded">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">Industry Standard</p>
                              <p className="text-xs text-muted-foreground">Used by 95%+ of developers worldwide</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="p-2 bg-green-500/10 rounded">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">Powerful Branching</p>
                              <p className="text-xs text-muted-foreground">Easy to create and merge branches</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* The Three States */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">The Three States of Git</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Git has three main states that your files can be in:
                        </p>
                        <div className="space-y-3">
                          <Card className="border-l-4 border-l-red-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold">1</div>
                                Working Directory
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Where you modify files. These are the actual files you're editing.</p>
                              <Badge variant="outline">Modified but not staged</Badge>
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-yellow-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold">2</div>
                                Staging Area (Index)
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Files that are marked to go into your next commit.</p>
                              <Badge variant="outline">Staged and ready to commit</Badge>
                              <CommandBlock command="git add filename.txt" description="Moves files to staging area" />
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-green-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold">3</div>
                                Git Repository (.git directory)
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Where Git permanently stores your commits and project history.</p>
                              <Badge variant="outline">Committed</Badge>
                              <CommandBlock command='git commit -m "message"' description="Saves staged changes to repository" />
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Git Workflow Visualization */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Basic Git Workflow</h3>
                        <div className="bg-muted/30 rounded-lg p-6">
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="flex-1 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-lg text-center">
                                <FileCode className="h-6 w-6 text-red-500 mx-auto mb-2" />
                                <p className="font-semibold text-sm">Working Directory</p>
                                <p className="text-xs text-muted-foreground">Edit files</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <p className="text-xs font-mono mb-1">git add</p>
                                <div className="w-8 h-0.5 bg-primary"></div>
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary -mt-1"></div>
                              </div>
                              <div className="flex-1 p-4 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg text-center">
                                <Clock className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                                <p className="font-semibold text-sm">Staging Area</p>
                                <p className="text-xs text-muted-foreground">Prepare commit</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <p className="text-xs font-mono mb-1">git commit</p>
                                <div className="w-8 h-0.5 bg-primary"></div>
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary -mt-1"></div>
                              </div>
                              <div className="flex-1 p-4 bg-green-500/10 border-2 border-green-500/30 rounded-lg text-center">
                                <GitCommit className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                <p className="font-semibold text-sm">Repository</p>
                                <p className="text-xs text-muted-foreground">History saved</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Understanding Commits */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Understanding Commits</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          A commit is like a snapshot of your project at a specific point in time. Each commit contains:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="pt-4 space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="font-medium">Unique ID (SHA hash)</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="font-medium">Author information</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="font-medium">Timestamp</span>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-4 space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="font-medium">Commit message</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="font-medium">Snapshot of files</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="font-medium">Parent commit(s)</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Git vs GitHub */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Git vs GitHub - What's the Difference?</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="border-2 border-primary/20">
                            <CardHeader>
                              <div className="flex items-center gap-2">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <GitBranch className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-lg">Git</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                              <p className="font-medium">Version Control System</p>
                              <p className="text-muted-foreground">• Software installed on your computer</p>
                              <p className="text-muted-foreground">• Works locally (offline)</p>
                              <p className="text-muted-foreground">• Command-line tool</p>
                              <p className="text-muted-foreground">• Free and open-source</p>
                              <p className="text-muted-foreground">• Created by Linus Torvalds in 2005</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-primary/20">
                            <CardHeader>
                              <div className="flex items-center gap-2">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Github className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-lg">GitHub</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                              <p className="font-medium">Cloud Hosting Platform</p>
                              <p className="text-muted-foreground">• Web-based hosting service</p>
                              <p className="text-muted-foreground">• Requires internet connection</p>
                              <p className="text-muted-foreground">• Visual interface + collaboration tools</p>
                              <p className="text-muted-foreground">• Free & paid plans</p>
                              <p className="text-muted-foreground">• Owned by Microsoft</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <p className="text-sm">
                            <span className="font-semibold text-blue-500">Analogy:</span> Git is like Microsoft Word (the software), 
                            and GitHub is like Google Docs (the cloud platform). You can use Word without Google Docs, but Google Docs 
                            makes collaboration easier!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Basic Commands */}
                <TabsContent value="basic-commands" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        Essential Git Commands
                      </CardTitle>
                      <CardDescription>
                        Master the fundamental commands for daily Git usage
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Creating Repositories */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Creating Repositories</h3>
                        <CommandBlock 
                          command="git init" 
                          description="Initialize a new Git repository in the current directory"
                        />
                        <CommandBlock 
                          command="git clone https://github.com/username/repository.git" 
                          description="Clone an existing repository from GitHub"
                        />
                        <CommandBlock 
                          command="git clone https://github.com/username/repository.git my-folder" 
                          description="Clone into a specific folder name"
                        />
                      </div>

                      <Separator />

                      {/* Working with Changes */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Working with Changes</h3>
                        <CommandBlock 
                          command="git status" 
                          description="Check status of files (modified, staged, untracked)"
                        />
                        <CommandBlock 
                          command="git add filename.txt" 
                          description="Stage a specific file for commit"
                        />
                        <CommandBlock 
                          command="git add ." 
                          description="Stage all changed files in current directory"
                        />
                        <CommandBlock 
                          command="git add -A" 
                          description="Stage all changes in the entire repository"
                        />
                        <CommandBlock 
                          command='git commit -m "Your commit message"' 
                          description="Commit staged changes with a message"
                        />
                        <CommandBlock 
                          command='git commit -am "Your message"' 
                          description="Stage and commit all tracked files in one command"
                        />
                      </div>

                      <Separator />

                      {/* Viewing History */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Viewing History</h3>
                        <CommandBlock 
                          command="git log" 
                          description="View commit history"
                        />
                        <CommandBlock 
                          command="git log --oneline" 
                          description="Compact view of commit history"
                        />
                        <CommandBlock 
                          command="git log --graph --oneline --all" 
                          description="Visual graph of all branches"
                        />
                        <CommandBlock 
                          command="git diff" 
                          description="Show unstaged changes"
                        />
                        <CommandBlock 
                          command="git diff --staged" 
                          description="Show staged changes"
                        />
                        <CommandBlock 
                          command="git show commit-hash" 
                          description="View details of a specific commit"
                        />
                      </div>

                      <Separator />

                      {/* Undoing Changes */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                          Undoing Changes (Use with Caution)
                        </h3>
                        <CommandBlock 
                          command="git restore filename.txt" 
                          description="Discard changes in working directory"
                        />
                        <CommandBlock 
                          command="git restore --staged filename.txt" 
                          description="Unstage a file (keep changes)"
                        />
                        <CommandBlock 
                          command="git reset HEAD~1" 
                          description="Undo last commit, keep changes"
                        />
                        <CommandBlock 
                          command="git reset --hard HEAD~1" 
                          description="⚠️ Undo last commit and discard changes"
                        />
                        <CommandBlock 
                          command='git commit --amend -m "New message"' 
                          description="Modify the last commit message"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Branching & Merging */}
                <TabsContent value="branching" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GitBranch className="h-5 w-5" />
                        Branching & Merging
                      </CardTitle>
                      <CardDescription>
                        Work on features independently and integrate changes seamlessly
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Branch Basics */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Branch Management</h3>
                        <CommandBlock 
                          command="git branch" 
                          description="List all local branches"
                        />
                        <CommandBlock 
                          command="git branch -a" 
                          description="List all branches (local and remote)"
                        />
                        <CommandBlock 
                          command="git branch feature-name" 
                          description="Create a new branch"
                        />
                        <CommandBlock 
                          command="git checkout feature-name" 
                          description="Switch to a branch"
                        />
                        <CommandBlock 
                          command="git checkout -b feature-name" 
                          description="Create and switch to new branch in one command"
                        />
                        <CommandBlock 
                          command="git switch feature-name" 
                          description="Modern way to switch branches"
                        />
                        <CommandBlock 
                          command="git branch -d feature-name" 
                          description="Delete a branch (safe, prevents deleting unmerged)"
                        />
                        <CommandBlock 
                          command="git branch -D feature-name" 
                          description="Force delete a branch"
                        />
                      </div>

                      <Separator />

                      {/* Merging */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <GitMerge className="h-4 w-4" />
                          Merging Branches
                        </h3>
                        <CommandBlock 
                          command="git merge feature-name" 
                          description="Merge feature-name into current branch"
                        />
                        <CommandBlock 
                          command="git merge --no-ff feature-name" 
                          description="Create a merge commit even for fast-forward"
                        />
                        <CommandBlock 
                          command="git merge --abort" 
                          description="Abort a merge in case of conflicts"
                        />
                      </div>

                      <Separator />

                      {/* Rebase */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Rebasing (Advanced)</h3>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-3">
                          <div className="flex gap-2">
                            <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-yellow-500">Warning</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Never rebase commits that have been pushed to a public repository
                              </p>
                            </div>
                          </div>
                        </div>
                        <CommandBlock 
                          command="git rebase main" 
                          description="Rebase current branch onto main"
                        />
                        <CommandBlock 
                          command="git rebase -i HEAD~3" 
                          description="Interactive rebase for last 3 commits"
                        />
                        <CommandBlock 
                          command="git rebase --continue" 
                          description="Continue rebase after resolving conflicts"
                        />
                        <CommandBlock 
                          command="git rebase --abort" 
                          description="Cancel the rebase operation"
                        />
                      </div>

                      <Separator />

                      {/* Workflow Example */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Typical Workflow Example</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">1</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git checkout -b feature/new-feature" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">2</Badge>
                            <div className="flex-1">
                              <p className="text-muted-foreground mb-2">Make your changes...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">3</Badge>
                            <div className="flex-1">
                              <CommandBlock command='git add . && git commit -m "Add new feature"' />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">4</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git checkout main" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">5</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git merge feature/new-feature" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">6</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git branch -d feature/new-feature" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* GitHub Essentials */}
                <TabsContent value="github" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        GitHub Essentials
                      </CardTitle>
                      <CardDescription>
                        Work with remote repositories and collaborate on GitHub
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Remote Repositories */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Remote Repositories
                        </h3>
                        <CommandBlock 
                          command="git remote -v" 
                          description="List all remote repositories"
                        />
                        <CommandBlock 
                          command="git remote add origin https://github.com/username/repo.git" 
                          description="Add a remote repository"
                        />
                        <CommandBlock 
                          command="git remote remove origin" 
                          description="Remove a remote"
                        />
                        <CommandBlock 
                          command="git remote rename origin upstream" 
                          description="Rename a remote"
                        />
                      </div>

                      <Separator />

                      {/* Push & Pull */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          <Download className="h-4 w-4" />
                          Push & Pull
                        </h3>
                        <CommandBlock 
                          command="git push origin main" 
                          description="Push commits to remote main branch"
                        />
                        <CommandBlock 
                          command="git push -u origin main" 
                          description="Push and set upstream tracking"
                        />
                        <CommandBlock 
                          command="git push origin --all" 
                          description="Push all branches"
                        />
                        <CommandBlock 
                          command="git pull origin main" 
                          description="Fetch and merge changes from remote"
                        />
                        <CommandBlock 
                          command="git pull --rebase origin main" 
                          description="Fetch and rebase local commits"
                        />
                        <CommandBlock 
                          command="git fetch origin" 
                          description="Download changes without merging"
                        />
                      </div>

                      <Separator />

                      {/* GitHub Workflow */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Creating a New Repository</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">1</Badge>
                            <div className="flex-1">
                              <p className="text-muted-foreground mb-2">Create a new repository on GitHub</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">2</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git init" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">3</Badge>
                            <div className="flex-1">
                              <CommandBlock command='git add . && git commit -m "Initial commit"' />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">4</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git remote add origin https://github.com/username/repo.git" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">5</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git push -u origin main" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Pull Requests */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Pull Requests (PRs)</h3>
                        <div className="grid gap-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">What is a Pull Request?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              A way to propose changes to a repository. Team members can review, comment, and approve before merging.
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Creating a PR</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                              <p className="text-muted-foreground">1. Push your branch to GitHub</p>
                              <CommandBlock command="git push origin feature-branch" />
                              <p className="text-muted-foreground">2. Go to GitHub repository</p>
                              <p className="text-muted-foreground">3. Click "Compare & pull request"</p>
                              <p className="text-muted-foreground">4. Add title, description, and submit</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Forking */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Forking & Contributing</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">1</Badge>
                            <div className="flex-1">
                              <p className="text-muted-foreground mb-2">Fork repository on GitHub (top-right button)</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">2</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git clone https://github.com/YOUR-USERNAME/repo.git" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">3</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git remote add upstream https://github.com/ORIGINAL-OWNER/repo.git" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">4</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git checkout -b feature-branch" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">5</Badge>
                            <div className="flex-1">
                              <p className="text-muted-foreground mb-2">Make changes, commit, and push to your fork</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">6</Badge>
                            <div className="flex-1">
                              <p className="text-muted-foreground mb-2">Create Pull Request to original repository</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Collaboration */}
                <TabsContent value="collaboration" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Team Collaboration
                      </CardTitle>
                      <CardDescription>
                        Best practices for working with teams
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Best Practices */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Commit Message Best Practices</h3>
                        <div className="grid gap-4">
                          <Card className="border-green-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <CardTitle className="text-sm text-green-500">Good Commit Messages</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm font-mono">
                              <p>feat: add user authentication</p>
                              <p>fix: resolve login button bug</p>
                              <p>docs: update README installation steps</p>
                              <p>refactor: optimize database queries</p>
                              <p>test: add unit tests for auth module</p>
                            </CardContent>
                          </Card>
                          <Card className="border-red-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-red-500" />
                                <CardTitle className="text-sm text-red-500">Poor Commit Messages</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm font-mono">
                              <p>fixed stuff</p>
                              <p>update</p>
                              <p>asdfasdf</p>
                              <p>final version</p>
                              <p>changes</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Branch Naming */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Branch Naming Conventions</h3>
                        <div className="space-y-3">
                          <CommandBlock 
                            command="feature/user-authentication" 
                            description="New features"
                          />
                          <CommandBlock 
                            command="bugfix/login-error" 
                            description="Bug fixes"
                          />
                          <CommandBlock 
                            command="hotfix/critical-security-issue" 
                            description="Critical fixes for production"
                          />
                          <CommandBlock 
                            command="refactor/database-optimization" 
                            description="Code refactoring"
                          />
                          <CommandBlock 
                            command="docs/api-documentation" 
                            description="Documentation updates"
                          />
                          <CommandBlock 
                            command="test/unit-tests" 
                            description="Testing"
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Git Ignore */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <FileCode className="h-4 w-4" />
                          .gitignore File
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Specify files/folders to ignore in version control:
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                          <pre>{`# Dependencies
node_modules/
vendor/

# Environment variables
.env
.env.local

# Build outputs
dist/
build/
*.log

# IDE files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db`}</pre>
                        </div>
                      </div>

                      <Separator />

                      {/* Resolving Conflicts */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          Resolving Merge Conflicts
                        </h3>
                        <div className="space-y-3">
                          <div className="text-sm text-muted-foreground">
                            When conflicts occur:
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">1</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git status" description="Identify conflicted files" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">2</Badge>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-2">Open conflicted files and resolve:</p>
                              <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs">
                                <pre>{`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name`}</pre>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">3</Badge>
                            <div className="flex-1">
                              <CommandBlock command="git add filename.txt" description="Mark as resolved" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-0.5">4</Badge>
                            <div className="flex-1">
                              <CommandBlock command='git commit -m "Resolve merge conflicts"' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Git Workflows */}
                <TabsContent value="workflows" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GitMerge className="h-5 w-5" />
                        Professional Git Workflows
                      </CardTitle>
                      <CardDescription>
                        Industry-standard workflows for team development
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Git Flow */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Git Flow Workflow</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          A robust workflow for larger projects with scheduled releases. Uses multiple branch types:
                        </p>
                        <div className="space-y-3">
                          <Card className="border-l-4 border-l-blue-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Badge className="bg-blue-500">main/master</Badge>
                                Production Branch
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              Contains production-ready code. Never commit directly to this branch.
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-green-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Badge className="bg-green-500">develop</Badge>
                                Development Branch
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              Integration branch for features. All features merge here first before going to main.
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-purple-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Badge className="bg-purple-500">feature/*</Badge>
                                Feature Branches
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Branch off: develop | Merge back to: develop</p>
                              <CommandBlock command="git checkout -b feature/new-login develop" />
                              <CommandBlock command="# ... make changes ..." />
                              <CommandBlock command="git checkout develop" />
                              <CommandBlock command="git merge --no-ff feature/new-login" />
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-yellow-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Badge className="bg-yellow-500">release/*</Badge>
                                Release Branches
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Prepare for production release. Branch off: develop | Merge to: main AND develop</p>
                              <CommandBlock command="git checkout -b release/1.0.0 develop" />
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-red-500">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Badge className="bg-red-500">hotfix/*</Badge>
                                Hotfix Branches
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Quick fixes for production. Branch off: main | Merge to: main AND develop</p>
                              <CommandBlock command="git checkout -b hotfix/critical-bug main" />
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* GitHub Flow */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">GitHub Flow (Simplified)</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          A simpler workflow perfect for continuous deployment. Just main branch + feature branches.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <Badge className="mt-1">1</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Create a branch from main</p>
                              <CommandBlock command="git checkout -b feature/user-profile" />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-1">2</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Make commits</p>
                              <CommandBlock command='git commit -m "Add user profile page"' />
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-1">3</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Open a Pull Request</p>
                              <p className="text-xs text-muted-foreground mt-1">Push branch and create PR on GitHub</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-1">4</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Discuss and review</p>
                              <p className="text-xs text-muted-foreground mt-1">Team reviews code, suggests changes</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-1">5</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Deploy and test</p>
                              <p className="text-xs text-muted-foreground mt-1">Test the branch in production-like environment</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge className="mt-1">6</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Merge to main</p>
                              <CommandBlock command="# Merge via GitHub PR or command line" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Trunk Based Development */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Trunk-Based Development</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Developers work on short-lived branches or directly on main with feature flags. Best for high-velocity teams.
                        </p>
                        <div className="grid gap-3">
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-medium">Short-lived branches (1-2 days max)</p>
                                  <p className="text-xs text-muted-foreground">Merge frequently to avoid conflicts</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-medium">Feature flags for incomplete features</p>
                                  <p className="text-xs text-muted-foreground">Deploy code but keep features hidden</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Real World Scenario */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Real-World Scenario: Starting a New Feature</h3>
                        <div className="space-y-3">
                          <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-sm font-medium mb-3">📋 Task: Add a shopping cart to an e-commerce website</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 1:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Sync with latest code</p>
                                  <CommandBlock command="git checkout main && git pull origin main" />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 2:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Create feature branch</p>
                                  <CommandBlock command="git checkout -b feature/shopping-cart" />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 3:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Develop and commit regularly</p>
                                  <CommandBlock command='git add .' />
                                  <CommandBlock command='git commit -m "feat: add cart component structure"' />
                                  <CommandBlock command='git commit -m "feat: implement add to cart functionality"' />
                                  <CommandBlock command='git commit -m "feat: add cart item counter"' />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 4:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Push to GitHub</p>
                                  <CommandBlock command="git push -u origin feature/shopping-cart" />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 5:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Create Pull Request on GitHub</p>
                                  <p className="text-xs text-muted-foreground mt-1">Add description, screenshots, and request reviewers</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 6:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Address review feedback</p>
                                  <CommandBlock command='git commit -m "fix: address review comments"' />
                                  <CommandBlock command="git push" />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">Step 7:</span>
                                <div className="flex-1">
                                  <p className="font-medium">Merge and cleanup</p>
                                  <p className="text-xs text-muted-foreground mt-1">Merge PR on GitHub, then delete branch</p>
                                  <CommandBlock command="git checkout main && git pull" />
                                  <CommandBlock command="git branch -d feature/shopping-cart" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Advanced Topics */}
                <TabsContent value="advanced" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        Advanced Git Techniques
                      </CardTitle>
                      <CardDescription>
                        Pro-level Git workflows and commands
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Stashing */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Git Stash (Temporary Storage)
                        </h3>
                        <CommandBlock 
                          command="git stash" 
                          description="Save uncommitted changes temporarily"
                        />
                        <CommandBlock 
                          command='git stash save "description"' 
                          description="Stash with a description"
                        />
                        <CommandBlock 
                          command="git stash list" 
                          description="List all stashes"
                        />
                        <CommandBlock 
                          command="git stash pop" 
                          description="Apply and remove the latest stash"
                        />
                        <CommandBlock 
                          command="git stash apply" 
                          description="Apply stash without removing it"
                        />
                        <CommandBlock 
                          command="git stash drop" 
                          description="Delete a stash"
                        />
                      </div>

                      <Separator />

                      {/* Cherry Pick */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Cherry Picking Commits</h3>
                        <CommandBlock 
                          command="git cherry-pick commit-hash" 
                          description="Apply specific commit to current branch"
                        />
                        <CommandBlock 
                          command="git cherry-pick commit1 commit2" 
                          description="Cherry-pick multiple commits"
                        />
                      </div>

                      <Separator />

                      {/* Tags */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Tagging Releases</h3>
                        <CommandBlock 
                          command="git tag" 
                          description="List all tags"
                        />
                        <CommandBlock 
                          command='git tag v1.0.0' 
                          description="Create a lightweight tag"
                        />
                        <CommandBlock 
                          command='git tag -a v1.0.0 -m "Release version 1.0.0"' 
                          description="Create an annotated tag"
                        />
                        <CommandBlock 
                          command="git push origin v1.0.0" 
                          description="Push a tag to remote"
                        />
                        <CommandBlock 
                          command="git push origin --tags" 
                          description="Push all tags"
                        />
                        <CommandBlock 
                          command="git tag -d v1.0.0" 
                          description="Delete a local tag"
                        />
                      </div>

                      <Separator />

                      {/* Git Hooks */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Git Hooks
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Automate actions at different stages of Git workflow. Located in .git/hooks/
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">pre-commit</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              Runs before commit (e.g., linting, formatting)
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">pre-push</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              Runs before push (e.g., tests)
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">commit-msg</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              Validates commit messages
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">post-merge</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs text-muted-foreground">
                              Runs after merge (e.g., install dependencies)
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Submodules */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Git Submodules</h3>
                        <CommandBlock 
                          command="git submodule add https://github.com/user/repo.git path/to/submodule" 
                          description="Add a submodule"
                        />
                        <CommandBlock 
                          command="git submodule update --init --recursive" 
                          description="Initialize and update submodules"
                        />
                        <CommandBlock 
                          command="git submodule update --remote" 
                          description="Update submodules to latest"
                        />
                      </div>

                      <Separator />

                      {/* Bisect */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Git Bisect (Find Bugs)</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Binary search through commits to find when a bug was introduced:
                        </p>
                        <CommandBlock 
                          command="git bisect start" 
                          description="Start bisect session"
                        />
                        <CommandBlock 
                          command="git bisect bad" 
                          description="Mark current commit as bad"
                        />
                        <CommandBlock 
                          command="git bisect good commit-hash" 
                          description="Mark a known good commit"
                        />
                        <CommandBlock 
                          command="git bisect reset" 
                          description="End bisect session"
                        />
                      </div>

                      <Separator />

                      {/* Useful Aliases */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Useful Git Aliases</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Create shortcuts for common commands:
                        </p>
                        <CommandBlock 
                          command="git config --global alias.co checkout" 
                          description="Use: git co branch-name"
                        />
                        <CommandBlock 
                          command="git config --global alias.br branch" 
                          description="Use: git br"
                        />
                        <CommandBlock 
                          command="git config --global alias.ci commit" 
                          description="Use: git ci -m 'message'"
                        />
                        <CommandBlock 
                          command="git config --global alias.st status" 
                          description="Use: git st"
                        />
                        <CommandBlock 
                          command='git config --global alias.lg "log --graph --oneline --decorate --all"' 
                          description="Beautiful log view"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Resources */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Additional Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        <a
                          href="https://git-scm.com/doc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <FileCode className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">Official Git Documentation</p>
                              <p className="text-xs text-muted-foreground">Comprehensive Git reference</p>
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                        <a
                          href="https://docs.github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Github className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">GitHub Documentation</p>
                              <p className="text-xs text-muted-foreground">Learn GitHub features and workflows</p>
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                        <a
                          href="https://learngitbranching.js.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <GitBranch className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">Learn Git Branching</p>
                              <p className="text-xs text-muted-foreground">Interactive Git tutorial</p>
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Troubleshooting */}
                <TabsContent value="troubleshooting" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Common Issues & Solutions
                      </CardTitle>
                      <CardDescription>
                        Fix common Git problems like a pro
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Common Errors */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Common Errors & How to Fix Them</h3>
                        <div className="space-y-4">
                          <Card className="border-red-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <CardTitle className="text-sm">fatal: not a git repository</CardTitle>
                                  <CardDescription className="text-xs mt-1">You're not in a Git repository</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Solution:</p>
                              <CommandBlock command="git init" description="Initialize a Git repository" />
                              <p className="text-xs text-muted-foreground mt-2">Or navigate to the correct directory with 'cd' command</p>
                            </CardContent>
                          </Card>

                          <Card className="border-red-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <CardTitle className="text-sm">error: failed to push some refs</CardTitle>
                                  <CardDescription className="text-xs mt-1">Remote has changes you don't have locally</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Solution:</p>
                              <CommandBlock command="git pull origin main --rebase" description="Pull remote changes first" />
                              <CommandBlock command="git push origin main" description="Then push your changes" />
                            </CardContent>
                          </Card>

                          <Card className="border-red-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <CardTitle className="text-sm">CONFLICT: Merge conflict in filename.txt</CardTitle>
                                  <CardDescription className="text-xs mt-1">Git can't automatically merge changes</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Solution:</p>
                              <div className="space-y-2 text-sm">
                                <p>1. Open the conflicted file</p>
                                <p>2. Look for conflict markers:</p>
                                <div className="bg-muted/50 rounded p-3 font-mono text-xs">
                                  <pre>{`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name`}</pre>
                                </div>
                                <p>3. Edit to keep what you want, remove markers</p>
                                <CommandBlock command="git add filename.txt" />
                                <CommandBlock command='git commit -m "Resolve merge conflict"' />
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-red-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <CardTitle className="text-sm">Your branch is ahead of 'origin/main' by X commits</CardTitle>
                                  <CardDescription className="text-xs mt-1">You have local commits not pushed</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Solution:</p>
                              <CommandBlock command="git push origin main" description="Push your commits to remote" />
                            </CardContent>
                          </Card>

                          <Card className="border-red-500/20">
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <CardTitle className="text-sm">error: Your local changes would be overwritten</CardTitle>
                                  <CardDescription className="text-xs mt-1">Uncommitted changes blocking operation</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Solutions:</p>
                              <p className="text-sm font-medium mt-3">Option 1: Commit your changes</p>
                              <CommandBlock command='git add . && git commit -m "Save work in progress"' />
                              <p className="text-sm font-medium mt-3">Option 2: Stash your changes</p>
                              <CommandBlock command="git stash" description="Temporarily save changes" />
                              <CommandBlock command="git pull" description="Do your operation" />
                              <CommandBlock command="git stash pop" description="Restore changes" />
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* I Made a Mistake */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">"I Made a Mistake!" - Emergency Fixes</h3>
                        <div className="space-y-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">😱 I committed to the wrong branch!</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Move commit to correct branch:</p>
                              <CommandBlock command="git log" description="Copy the commit hash" />
                              <CommandBlock command="git checkout correct-branch" />
                              <CommandBlock command="git cherry-pick <commit-hash>" />
                              <CommandBlock command="git checkout wrong-branch" />
                              <CommandBlock command="git reset --hard HEAD~1" description="Remove from wrong branch" />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">😱 I need to undo my last commit!</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Keep changes but undo commit:</p>
                              <CommandBlock command="git reset --soft HEAD~1" description="Uncommit but keep files staged" />
                              <p className="text-sm text-muted-foreground mb-2 mt-3">Undo commit and unstage:</p>
                              <CommandBlock command="git reset HEAD~1" description="Uncommit and unstage" />
                              <p className="text-sm text-muted-foreground mb-2 mt-3">⚠️ Delete commit and changes:</p>
                              <CommandBlock command="git reset --hard HEAD~1" description="CAUTION: Deletes everything!" />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">😱 I committed a secret/password!</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-3">
                                <p className="text-sm text-red-500 font-medium">⚠️ If already pushed, assume compromised! Change the secret immediately!</p>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">If NOT pushed yet:</p>
                              <CommandBlock command="# Remove the secret from file" />
                              <CommandBlock command='git add . && git commit -m "Remove secret"' />
                              <CommandBlock command="git reset --soft HEAD~2" description="Squash last 2 commits" />
                              <CommandBlock command='git commit -m "Add feature without secret"' />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">😱 I deleted a file by mistake!</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">Recover deleted file:</p>
                              <CommandBlock command="git checkout HEAD -- filename.txt" description="Restore from last commit" />
                              <p className="text-sm text-muted-foreground mb-2 mt-3">Find when file was deleted:</p>
                              <CommandBlock command="git log --diff-filter=D --summary | grep filename" />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">😱 I want to undo everything and start fresh!</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">⚠️ Nuclear option - discards ALL local changes:</p>
                              <CommandBlock command="git fetch origin" />
                              <CommandBlock command="git reset --hard origin/main" description="Match remote exactly" />
                              <CommandBlock command="git clean -fd" description="Remove untracked files" />
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Useful Diagnosis Commands */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Diagnosis Commands</h3>
                        <CommandBlock 
                          command="git status" 
                          description="Check current state - always start here!"
                        />
                        <CommandBlock 
                          command="git log --oneline --graph --all" 
                          description="Visualize branch structure"
                        />
                        <CommandBlock 
                          command="git reflog" 
                          description="History of HEAD movements - recover 'lost' commits"
                        />
                        <CommandBlock 
                          command="git remote -v" 
                          description="Check remote repository URLs"
                        />
                        <CommandBlock 
                          command="git branch -vv" 
                          description="See all branches and tracking info"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Pro Tips */}
                <TabsContent value="pro-tips" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Pro Tips & Best Practices
                      </CardTitle>
                      <CardDescription>
                        Level up your Git skills with expert techniques
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Commit Best Practices */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Commit Like a Pro</h3>
                        <div className="grid gap-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Make Atomic Commits
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              Each commit should represent ONE logical change. Makes it easier to review, revert, and understand history.
                              <div className="mt-2">
                                <p className="text-green-500">✓ Good: "Add login form validation"</p>
                                <p className="text-red-500">✗ Bad: "Fix bugs and add features and update docs"</p>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Use Conventional Commits
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-muted-foreground mb-2">Format: type(scope): description</p>
                              <div className="space-y-1 font-mono text-xs">
                                <p><span className="text-primary">feat:</span> new feature</p>
                                <p><span className="text-primary">fix:</span> bug fix</p>
                                <p><span className="text-primary">docs:</span> documentation only</p>
                                <p><span className="text-primary">style:</span> formatting, missing semicolons</p>
                                <p><span className="text-primary">refactor:</span> code restructuring</p>
                                <p><span className="text-primary">test:</span> adding tests</p>
                                <p><span className="text-primary">chore:</span> maintenance tasks</p>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Commit Often, Push Regularly
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              Commit small changes frequently (creates checkpoints). Push at least daily to backup work and enable collaboration.
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Time-Saving Aliases */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Time-Saving Git Aliases</h3>
                        <p className="text-sm text-muted-foreground mb-3">Add these to your Git config:</p>
                        <CommandBlock command='git config --global alias.st "status"' />
                        <CommandBlock command='git config --global alias.co "checkout"' />
                        <CommandBlock command='git config --global alias.br "branch"' />
                        <CommandBlock command='git config --global alias.ci "commit"' />
                        <CommandBlock command='git config --global alias.unstage "reset HEAD --"' />
                        <CommandBlock command='git config --global alias.last "log -1 HEAD"' />
                        <CommandBlock command='git config --global alias.visual "log --graph --oneline --decorate --all"' />
                        <CommandBlock command='git config --global alias.amend "commit --amend --no-edit"' />
                        <p className="text-sm text-muted-foreground mt-3">Now you can use: git st, git co, git br, etc.</p>
                      </div>

                      <Separator />

                      {/* Advanced Techniques */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Advanced Techniques</h3>
                        <div className="space-y-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Interactive Staging (Stage Parts of Files)</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CommandBlock command="git add -p filename.txt" description="Choose which changes to stage" />
                              <p className="text-xs text-muted-foreground mt-2">
                                y = stage this hunk | n = don't stage | s = split into smaller hunks
                              </p>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Search Commit History</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CommandBlock command='git log -S "function_name"' description="Find when text was added/removed" />
                              <CommandBlock command='git log --grep="bug"' description="Search commit messages" />
                              <CommandBlock command="git log --author=John" description="Find commits by author" />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Find Who Changed a Line</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CommandBlock command="git blame filename.txt" description="See who last modified each line" />
                              <CommandBlock command="git blame -L 10,20 filename.txt" description="Blame specific lines" />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Save Work Without Committing</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CommandBlock command='git stash save "work in progress"' />
                              <CommandBlock command="git stash list" />
                              <CommandBlock command="git stash apply stash@{0}" description="Apply specific stash" />
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Create Patch Files</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CommandBlock command="git diff > my-changes.patch" description="Save changes to file" />
                              <CommandBlock command="git apply my-changes.patch" description="Apply patch" />
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* GitHub Pro Tips */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">GitHub Pro Tips</h3>
                        <div className="grid gap-3">
                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <Badge className="mt-0.5">TIP</Badge>
                                <div className="text-sm flex-1">
                                  <p className="font-medium mb-1">Use GitHub CLI for faster workflow</p>
                                  <p className="text-muted-foreground text-xs mb-2">Install: https://cli.github.com</p>
                                  <CommandBlock command="gh pr create" description="Create PR from terminal" />
                                  <CommandBlock command="gh pr list" description="List PRs" />
                                  <CommandBlock command="gh pr checkout 123" description="Checkout PR locally" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <Badge className="mt-0.5">TIP</Badge>
                                <div className="text-sm flex-1">
                                  <p className="font-medium mb-1">Keyboard Shortcuts on GitHub</p>
                                  <div className="space-y-1 text-xs text-muted-foreground mt-2">
                                    <p><code className="px-1 py-0.5 bg-muted rounded">?</code> - Show all shortcuts</p>
                                    <p><code className="px-1 py-0.5 bg-muted rounded">t</code> - File finder</p>
                                    <p><code className="px-1 py-0.5 bg-muted rounded">l</code> - Jump to line</p>
                                    <p><code className="px-1 py-0.5 bg-muted rounded">b</code> - Open blame view</p>
                                    <p><code className="px-1 py-0.5 bg-muted rounded">.</code> - Open in VS Code web editor</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <Badge className="mt-0.5">TIP</Badge>
                                <div className="text-sm flex-1">
                                  <p className="font-medium mb-1">Use GitHub Actions for CI/CD</p>
                                  <p className="text-xs text-muted-foreground">Automate testing, building, and deployment on every push</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <Badge className="mt-0.5">TIP</Badge>
                                <div className="text-sm flex-1">
                                  <p className="font-medium mb-1">Protect Your Main Branch</p>
                                  <p className="text-xs text-muted-foreground mb-2">Settings → Branches → Add rule</p>
                                  <ul className="text-xs text-muted-foreground space-y-1">
                                    <li>✓ Require pull request reviews</li>
                                    <li>✓ Require status checks to pass</li>
                                    <li>✓ Prevent force pushes</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Security Best Practices */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Security Best Practices
                        </h3>
                        <div className="space-y-3">
                          <Card className="border-yellow-500/20">
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm flex-1">
                                  <p className="font-medium">Never Commit Secrets!</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Use .env files and add them to .gitignore. Use environment variables for API keys, passwords, tokens.
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-yellow-500/20">
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm flex-1">
                                  <p className="font-medium">Use SSH Keys Instead of HTTPS</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    More secure and no need to enter password every time
                                  </p>
                                  <CommandBlock command="ssh-keygen -t ed25519 -C 'your@email.com'" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-yellow-500/20">
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm flex-1">
                                  <p className="font-medium">Enable Two-Factor Authentication</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Protect your GitHub account with 2FA
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-yellow-500/20">
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm flex-1">
                                  <p className="font-medium">Sign Your Commits (GPG)</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Verify commit authenticity with GPG signatures (shows "Verified" badge on GitHub)
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      {/* Performance Tips */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Performance & Optimization</h3>
                        <div className="grid gap-3">
                          <CommandBlock 
                            command="git gc" 
                            description="Clean up unnecessary files and optimize repository"
                          />
                          <CommandBlock 
                            command="git clone --depth 1 repo-url" 
                            description="Shallow clone (faster for large repos)"
                          />
                          <CommandBlock 
                            command="git fetch --prune" 
                            description="Remove references to deleted remote branches"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Learning Path */}
                  <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Your Learning Path
                      </CardTitle>
                      <CardDescription>Recommended progression from beginner to expert</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="mt-0.5">Week 1-2</Badge>
                          <div className="text-sm flex-1">
                            <p className="font-medium">Master the basics</p>
                            <p className="text-xs text-muted-foreground">init, add, commit, push, pull, status, log</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="mt-0.5">Week 3-4</Badge>
                          <div className="text-sm flex-1">
                            <p className="font-medium">Learn branching & merging</p>
                            <p className="text-xs text-muted-foreground">branch, checkout, merge, handle conflicts</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="mt-0.5">Month 2</Badge>
                          <div className="text-sm flex-1">
                            <p className="font-medium">GitHub collaboration</p>
                            <p className="text-xs text-muted-foreground">Pull requests, code review, forking, issues</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="mt-0.5">Month 3+</Badge>
                          <div className="text-sm flex-1">
                            <p className="font-medium">Advanced workflows</p>
                            <p className="text-xs text-muted-foreground">Rebase, stash, cherry-pick, bisect, hooks</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Quick Reference Card */}
          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Quick Reference Cheat Sheet
              </CardTitle>
              <CardDescription>Most commonly used Git commands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Setup</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>git init</p>
                    <p>git clone [url]</p>
                    <p>git config --global user.name</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Basic</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>git status</p>
                    <p>git add .</p>
                    <p>git commit -m ""</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Branching</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>git branch</p>
                    <p>git checkout -b [name]</p>
                    <p>git merge [branch]</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Remote</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>git push origin [branch]</p>
                    <p>git pull origin [branch]</p>
                    <p>git fetch</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">History</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>git log</p>
                    <p>git log --oneline</p>
                    <p>git diff</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Undo</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>git restore [file]</p>
                    <p>git reset HEAD~1</p>
                    <p>git revert [commit]</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GitGithubDocs;

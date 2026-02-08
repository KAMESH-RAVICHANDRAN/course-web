import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Mail,
  FileText,
  Upload,
  Clock,
  Gift,
  ExternalLink,
  Shield,
  Zap,
  Award,
  CreditCard,
  BookOpen,
  Code2,
  Cloud,
  Lock,
  Palette,
  Smartphone,
  TrendingUp,
  Database,
  Search,
} from "lucide-react";

const GithubEducation = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const benefits = [
    {
      icon: Code2,
      title: "GitHub Pro",
      description: "Unlimited private repositories and advanced code review tools",
      value: "$4/month",
    },
    {
      icon: Zap,
      title: "Developer Tools",
      description: "Access to premium developer tools and services",
      value: "$200k+ value",
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Courses, certifications, and learning paths",
      value: "Free access",
    },
    {
      icon: CreditCard,
      title: "Cloud Credits",
      description: "AWS, Azure, DigitalOcean, and more cloud credits",
      value: "$1000s",
    },
  ];

  // Complete list of all GitHub Education Pack offers
  const allOffers = [
    {
      name: "GitHub Copilot",
      description: "Use GitHub Copilot to get autocomplete-style suggestions from an AI pair programmer as you code.",
      offer: "Free access to Copilot Pro while you're a student.",
      category: "Machine Learning & AI",
      icon: Code2,
      tags: ["Machine Learning & AI"],
    },
    {
      name: "GitHub Pro",
      description: "Powerful collaboration, code review, and code management",
      offer: "Free GitHub Pro while you are a student.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "GitHub Codespaces",
      description: "Create a codespace to start developing in a secure, configurable, and dedicated development environment.",
      offer: "Free Pro level access to Codespaces to use anywhere in your account.",
      category: "Developer tools",
      icon: Cloud,
      tags: ["Developer tools", "Cloud"],
    },
    {
      name: "DigitalOcean",
      description: "Simple cloud hosting, built for developers",
      offer: "Enjoy $200 in platform credit for 1 year!",
      category: "Cloud",
      icon: Cloud,
      tags: ["Cloud"],
    },
    {
      name: "Microsoft Azure",
      description: "Access to Microsoft Azure cloud services and learning resources",
      offer: "Free access to 25+ Microsoft Azure cloud services plus $100 in Azure credit. For students aged 18+.",
      category: "Cloud",
      icon: Cloud,
      tags: ["Cloud", "Virtual Events"],
    },
    {
      name: "Heroku",
      description: "A flexible, easy-to-use platform to deploy, run, and manage your apps.",
      offer: "Enjoy a credit of $13 USD per month for 24 months.",
      category: "Cloud",
      icon: Cloud,
      tags: ["Cloud", "Developer tools"],
    },
    {
      name: "JetBrains",
      description: "Professional desktop IDEs: IntelliJ IDEA, PyCharm, and more.",
      offer: "A free subscription for students, to be renewed annually.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "Visual Studio Code",
      description: "Microsoft's goal is to empower all students with the best resources and tools.",
      offer: "Coding packs for Java, Python, or .NET - download everything you need to start coding.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "Namecheap",
      description: "Affordable registration, hosting, and domain management",
      offer: "1 year domain name registration on the .me TLD + 1 SSL certificate free for 1 year.",
      category: "Domains",
      icon: ExternalLink,
      tags: ["Domains", "Virtual Events"],
    },
    {
      name: "Name.com",
      description: "Domains, Google Workspace, Titan, Wix, WordPress Hosting, and more.",
      offer: "Build your project on a select free domain with over 25 domain extensions.",
      category: "Domains",
      icon: ExternalLink,
      tags: ["Virtual Events", "Domains"],
    },
    {
      name: ".TECH Domains",
      description: "A powerful domain extension to convey that you belong to the technology industry.",
      offer: "One standard .TECH domain free for 1 year.",
      category: "Domains",
      icon: ExternalLink,
      tags: ["Domains"],
    },
    {
      name: "Notion",
      description: "Think, write, and plan in a single space. Capture thoughts, manage projects, or run an entire company.",
      offer: "Everything in the Notion Education plan with additional AI responses.",
      category: "Productivity",
      icon: BookOpen,
      tags: ["Productivity"],
    },
    {
      name: "DataCamp",
      description: "DataCamp helps companies and individuals make better use of data.",
      offer: "Three months of free access when you sign up with your GitHub student account.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn"],
    },
    {
      name: "Educative",
      description: "Discover the best learning environment with browser-based Playgrounds and interactive labs.",
      offer: "6 months of free access to over 70 practical courses, plus 30% discount on any subscription.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn"],
    },
    {
      name: "FrontendMasters",
      description: "Advance your skills with in-depth JavaScript, Node.js & front-end engineering courses.",
      offer: "Free 6-months access to all courses and workshops.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn"],
    },
    {
      name: "Codedex",
      description: "Learn-to-code platform for Gen Z with courses in Python, HTML, CSS, JavaScript, React, Git & more.",
      offer: "Verified students receive 6 months of Codédex Club premium membership for free.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn", "Developer tools", "Virtual Events"],
    },
    {
      name: "MongoDB",
      description: "A general purpose, document-based, distributed database built for modern application developers.",
      offer: "$50 in MongoDB Atlas Credits, plus access to MongoDB Compass and University including free certification valued at $150.",
      category: "Infrastructure & APIs",
      icon: Database,
      tags: ["Infrastructure & APIs"],
    },
    {
      name: "Stripe",
      description: "Web and mobile payments, built for developers",
      offer: "Waived transaction fees on first $1000 in revenue processed.",
      category: "Infrastructure & APIs",
      icon: CreditCard,
      tags: ["Infrastructure & APIs"],
    },
    {
      name: "Termius",
      description: "SSH client that works on desktop and mobile. Securely syncs data across all your devices.",
      offer: "Free access to all Termius Pro and Team features while you're a student.",
      category: "Developer tools",
      icon: Smartphone,
      tags: ["Developer tools", "Mobile"],
    },
    {
      name: "GitKraken",
      description: "The most popular Git client for Windows, Mac & Linux with GUI and terminal interface.",
      offer: "The GitKraken Student Plan: Free for 6 months then up to 80% off the Pro price.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "GitLens",
      description: "The #1 Git extension for VS Code with visualizations like inline blame and Commit Graph.",
      offer: "Free for 6 months and then up to 80% off the Pro price as long as you're a student.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "Bootstrap Studio",
      description: "Powerful desktop app for creating responsive websites using the Bootstrap framework.",
      offer: "A free license for Bootstrap Studio while you are a student.",
      category: "Design",
      icon: Palette,
      tags: ["Design", "Developer tools"],
    },
    {
      name: "Canva Pro",
      description: "Design presentation, social media graphics, and more with thousands of templates.",
      offer: "Free access to Canva Pro features for students.",
      category: "Design",
      icon: Palette,
      tags: ["Design"],
    },
    {
      name: "Icons8",
      description: "Icons8 provides design resources: icons, UI illustrations, photos and software.",
      offer: "Free 3-month subscription that includes: icons, photos, illustrations, and music.",
      category: "Design",
      icon: Palette,
      tags: ["Design"],
    },
    {
      name: "IconScout",
      description: "Design resources marketplace with over 4.9 million icons, illustrations, 3D assets.",
      offer: "Free access to 60 premium icons from selected contributors every month for 1 year.",
      category: "Design",
      icon: Palette,
      tags: ["Design"],
    },
    {
      name: "1Password",
      description: "Password manager designed to simplify and secure the software development process.",
      offer: "Get 1Password free for a year including 1Password Developer Tools.",
      category: "Security & analytics",
      icon: Lock,
      tags: ["Developer tools", "Security & analytics"],
    },
    {
      name: "Sentry",
      description: "Track errors in every language, framework, and library.",
      offer: "50K errors, 100K transactions, 1GB attachments, 500 replays, Team features for 1 year.",
      category: "Security & analytics",
      icon: Shield,
      tags: ["Infrastructure & APIs", "Developer tools"],
    },
    {
      name: "Datadog",
      description: "Cloud-based infrastructure monitoring.",
      offer: "Pro Account, including 10 servers. Free for 2 years.",
      category: "Security & analytics",
      icon: TrendingUp,
      tags: ["Security & analytics"],
    },
    {
      name: "BrowserStack",
      description: "Test your web apps with Real Device Cloud - 2000+ browsers and real devices.",
      offer: "Free Automate Mobile Plan for 1 parallel and 1 user for 1 year.",
      category: "Developer tools",
      icon: Smartphone,
      tags: ["Developer tools"],
    },
    {
      name: "Scrimba",
      description: "Interactive learning platform for frontend developers.",
      offer: "1 month of free access to Pro courses, projects, and challenges - includes 40+ courses.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn", "Developer tools"],
    },
    {
      name: "Appwrite",
      description: "Open-source Backend-as-a-Service platform for building web, mobile, native, or backend apps.",
      offer: "Free access to Appwrite's Education plan (worth $15/month) throughout your student career.",
      category: "Cloud",
      icon: Cloud,
      tags: ["Cloud", "Developer tools"],
    },
    {
      name: "LocalStack",
      description: "Emulates AWS services on your laptop, build and test cloud apps without connecting to AWS.",
      offer: "Free license to LocalStack's AWS emulator in a ready-to-use cloud environment.",
      category: "Cloud",
      icon: Cloud,
      tags: ["Cloud", "Developer tools", "Infrastructure & APIs"],
    },
    {
      name: "Deepnote",
      description: "Data notebook built for collaboration - Jupyter compatible, works in the cloud.",
      offer: "Free use of Deepnote Team plan with unlimited members, projects, and premium integrations.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools", "Machine Learning & AI"],
    },
    {
      name: "Polypane",
      description: "Powerful browser and developer tool for making better websites in less time.",
      offer: "Free use of Polypane's individual plan for 1 year.",
      category: "Design",
      icon: Palette,
      tags: ["Design", "Developer tools"],
    },
    {
      name: "AlgoExpert",
      description: "The ultimate resource to prepare for coding interviews.",
      offer: "Free access to 20 coding interview questions plus 10% discount on all products.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn", "Personal Portfolio"],
    },
    {
      name: "New Relic",
      description: "Observability platform that helps fully understand how to improve your software.",
      offer: "Free New Relic while you are a student. ($300/month value)",
      category: "Security & analytics",
      icon: TrendingUp,
      tags: ["Developer tools", "Cloud", "Security & analytics"],
    },
    {
      name: "Arduino",
      description: "Empower scientists and artists of the future with creative STEM programs.",
      offer: "Free Arduino Cloud for 6 months and discounts on selected hardware.",
      category: "Internet of Things",
      icon: Zap,
      tags: ["Internet of Things", "Infrastructure & APIs"],
    },
    {
      name: "Camber",
      description: "AI-powered, cloud-based platform for scientific computing, simulations, and data analysis.",
      offer: "Free Student plan with 200 CPU hours, 75GB storage, 200 LLM messages per month.",
      category: "Cloud",
      icon: Cloud,
      tags: ["Cloud", "Learn"],
    },
    {
      name: "Travis CI",
      description: "Continuous integration platform for open source and private projects",
      offer: "Private builds for free while you're a student.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools", "Infrastructure & APIs"],
    },
    {
      name: "Tower",
      description: "Git client that brings all of Git and GitHub's power to desktop, for Mac and Windows.",
      offer: "Free license for Tower Pro while you are a student.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "GoRails",
      description: "Tutorials for web developers learning Ruby, Rails, Javascript, and more.",
      offer: "Free access to all videos and lessons for 12 months.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn"],
    },
    {
      name: "SymfonyCasts",
      description: "Master Symfony and PHP with video tutorials and code challenges.",
      offer: "Free 3-month subscription for students.",
      category: "Learn",
      icon: BookOpen,
      tags: ["Learn"],
    },
    {
      name: "Testmail",
      description: "Get unlimited email addresses and mailboxes for automating email tests with powerful APIs.",
      offer: "Free Essential plan while you're a student.",
      category: "Developer tools",
      icon: Mail,
      tags: ["Developer tools"],
    },
    {
      name: "Doppler",
      description: "A different way to manage secrets. Works on every stack, scaling with your team.",
      offer: "Free Doppler Team subscription while the user is an active student.",
      category: "Security & analytics",
      icon: Lock,
      tags: ["Infrastructure & APIs", "Security & analytics", "Developer tools"],
    },
    {
      name: "Codecov",
      description: "Makes it easy to implement code coverage to develop healthier code",
      offer: "Free access to Codecov on public and private repositories.",
      category: "Developer tools",
      icon: Code2,
      tags: ["Developer tools"],
    },
    {
      name: "Blackfire",
      description: "Code performance measurement tool. Find & fix bottlenecks.",
      offer: "Free Developer subscription for students.",
      category: "Security & analytics",
      icon: TrendingUp,
      tags: ["Security & analytics"],
    },
    {
      name: "CodeScene",
      description: "Learn to write healthier code, pinpoint tech debt and code quality issues.",
      offer: "A free Student account to analyze private GitHub repositories.",
      category: "Security & analytics",
      icon: Search,
      tags: ["Security & analytics", "Developer tools"],
    },
    {
      name: "PomoDone",
      description: "Track your time and boost productivity by applying Pomodoro technique to your workflow.",
      offer: "PomoDone Lite plan free for 2-years.",
      category: "Productivity",
      icon: Clock,
      tags: ["Productivity"],
    },
    {
      name: "Visme",
      description: "All-in-one platform for creating engaging presentations and visual documents.",
      offer: "Get 3 months free access to Visme's Starter plan.",
      category: "Productivity",
      icon: Palette,
      tags: ["Productivity", "Design"],
    },
  ];

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allOffers.map(offer => offer.category)))];

  // Filter offers by category
  const filteredOffers = selectedCategory === "all" 
    ? allOffers 
    : allOffers.filter(offer => offer.category === selectedCategory);

  // Application steps with visual indicators
  const applicationSteps = [
    {
      number: 1,
      title: "Create a GitHub Account",
      description: "If you don't have one already, create a free GitHub account",
      steps: [
        "Go to github.com/signup",
        "Enter your details and verify your email",
        "Complete the account setup"
      ],
      icon: Code2,
      link: "https://github.com/signup"
    },
    {
      number: 2,
      title: "Add Your School Email",
      description: "Add and verify your .edu or .ac email address",
      steps: [
        "Go to Settings → Emails",
        "Click 'Add email address'",
        "Enter your college email",
        "Click the verification link sent to your email"
      ],
      icon: Mail,
      tip: "Keep your personal email as primary. Your school email just needs to be verified."
    },
    {
      number: 3,
      title: "Visit GitHub Education",
      description: "Navigate to the GitHub Student Developer Pack page",
      steps: [
        "Go to education.github.com/pack",
        "Click 'Sign up for Student Developer Pack'",
        "Make sure you're logged into your GitHub account"
      ],
      icon: GraduationCap,
      link: "https://education.github.com/pack"
    },
    {
      number: 4,
      title: "Fill Application Form",
      description: "Complete the student verification form with accurate information",
      steps: [
        "Enter full legal name (as on student ID)",
        "Select your verified school email",
        "Type and select school name from dropdown",
        "Describe how you plan to use GitHub",
        "Enter graduation year"
      ],
      icon: FileText,
    },
    {
      number: 5,
      title: "Upload Proof of Enrollment",
      description: "Upload a clear photo of your student ID or enrollment document",
      steps: [
        "Take a clear, well-lit photo",
        "Ensure all text is readable",
        "Shows current enrollment date",
        "School name visible",
        "Your name visible"
      ],
      icon: Upload,
      tip: "Accepted formats: JPG, PNG, PDF (max 5MB)"
    },
    {
      number: 6,
      title: "Submit & Wait for Approval",
      description: "Review your information and submit the application",
      steps: [
        "Double-check all information",
        "Click 'Submit your information'",
        "Wait for email confirmation (usually 1-7 days)",
        "Check spam folder if needed"
      ],
      icon: Clock,
      tip: "Most applications are approved within 24-48 hours!"
    },
    {
      number: 7,
      title: "Activate Benefits",
      description: "Once approved, start using your free tools!",
      steps: [
        "GitHub Pro account upgrade",
        "Access to partner offers page",
        "Email with activation instructions",
        "Badge on your GitHub profile"
      ],
      icon: Gift,
      isSuccess: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Student Benefits</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              GitHub Student Developer Pack
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Get free access to the best developer tools and services. Learn to ship software like a pro with GitHub Education.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="px-4 py-1">
                <Gift className="h-3 w-3 mr-1" />
                $200k+ Value
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                <Clock className="h-3 w-3 mr-1" />
                Renew Annually
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                <Shield className="h-3 w-3 mr-1" />
                Free for Students
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
              <TabsTrigger value="requirements" className="py-3">Requirements</TabsTrigger>
              <TabsTrigger value="steps" className="py-3">Application Steps</TabsTrigger>
              <TabsTrigger value="benefits" className="py-3">Benefits</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    What is GitHub Student Developer Pack?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    GitHub Student Developer Pack gives students free access to the best developer tools in one place. 
                    Learn to code and ship software like a pro with real-world tools used by millions of developers.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="relative block no-underline cursor-pointer group transition-all duration-300 overflow-hidden bg-accent border border-border hover:border-muted"
                        style={{
                          borderRadius: '30px',
                          padding: '6px'
                        }}
                      >
                        <div className="px-4 pt-3 pb-3 relative">
                          <div className="text-foreground text-base font-medium leading-tight mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {benefit.title}
                          </div>
                          <div className="text-muted-foreground font-normal text-xs line-clamp-1">
                            {benefit.value}
                          </div>
                        </div>

                        <div
                          className="h-[200px] overflow-hidden relative bg-background"
                          style={{
                            borderRadius: '24px'
                          }}
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <benefit.icon className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Alert className="mt-6 border-blue-500/20 bg-blue-500/5">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <AlertDescription className="text-sm">
                      <span className="font-medium text-blue-500">Valid while you're a student!</span> The pack is free as long as you're enrolled in school. You'll need to reverify annually.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Eligibility Requirements
                  </CardTitle>
                  <CardDescription>
                    Make sure you meet these requirements before applying
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold">Age Requirement</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Must be at least 13 years old to apply
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold">Valid Student Email</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        .edu or .ac domain email address that's verified
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold">Current Enrollment</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Currently enrolled in a degree or diploma granting institution
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Upload className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold">Proof Document</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Clear photo of student ID or enrollment document
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Acceptable Email Addresses
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Card className="border-green-500/20 bg-green-500/5">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <CardTitle className="text-sm text-green-500">✓ Accepted Formats</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">.edu</Badge>
                            <span className="text-xs text-muted-foreground">yourname@university.edu</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">.ac.in</Badge>
                            <span className="text-xs text-muted-foreground">student@college.ac.in</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">.edu.in</Badge>
                            <span className="text-xs text-muted-foreground">name@institution.edu.in</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">.ac.uk</Badge>
                            <span className="text-xs text-muted-foreground">email@school.ac.uk</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-red-500/20 bg-red-500/5">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                            <CardTitle className="text-sm text-red-500">✗ Not Accepted</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono bg-red-500/10">gmail.com</Badge>
                            <span className="text-xs text-muted-foreground">Personal email</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono bg-red-500/10">yahoo.com</Badge>
                            <span className="text-xs text-muted-foreground">Personal email</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono bg-red-500/10">outlook.com</Badge>
                            <span className="text-xs text-muted-foreground">Personal email</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono bg-red-500/10">hotmail.com</Badge>
                            <span className="text-xs text-muted-foreground">Personal email</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Acceptable Proof of Enrollment
                    </h3>
                    <div className="grid gap-3">
                      <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge>Option 1</Badge>
                                <p className="font-medium">Student ID Card</p>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                Clear photo showing your name, school name, and current enrollment date
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs">✓ Your name</Badge>
                                <Badge variant="secondary" className="text-xs">✓ School name</Badge>
                                <Badge variant="secondary" className="text-xs">✓ Valid date</Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Award className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge>Option 2</Badge>
                                <p className="font-medium">Official Transcript</p>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                Recent transcript showing current semester/term enrollment
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs">✓ Official seal</Badge>
                                <Badge variant="secondary" className="text-xs">✓ Current term</Badge>
                                <Badge variant="secondary" className="text-xs">✓ Your name</Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge>Option 3</Badge>
                                <p className="font-medium">Enrollment Letter</p>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                Official letter from school confirming current enrollment with letterhead
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs">✓ Letterhead</Badge>
                                <Badge variant="secondary" className="text-xs">✓ Official signature</Badge>
                                <Badge variant="secondary" className="text-xs">✓ Current year</Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Alert className="border-blue-500/20 bg-blue-500/5">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <AlertDescription className="text-sm">
                      <span className="font-medium text-blue-500">Important:</span> Your document must be recent (within current academic year) and clearly show your enrollment status. Rejected applications are often due to unclear or outdated documents.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Application Steps Tab */}
            <TabsContent value="steps" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Step-by-Step Application Guide
                  </CardTitle>
                  <CardDescription>
                    Follow these visual steps carefully to activate your GitHub Student Developer Pack
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-6">
                    {applicationSteps.map((step, index) => (
                      <div 
                        key={index} 
                        className={`relative pl-8 ${index < applicationSteps.length - 1 ? 'pb-6 border-l-2' : ''} ${
                          step.isSuccess ? 'border-green-500/20' : 'border-primary/20'
                        }`}
                      >
                        <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          step.isSuccess 
                            ? 'bg-green-500 text-white' 
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          {step.isSuccess ? '✓' : step.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <step.icon className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {step.description}
                          </p>
                          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                            {step.steps.map((substep, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{substep}</span>
                              </div>
                            ))}
                          </div>
                          {step.tip && (
                            <Alert className="mt-3 border-yellow-500/20 bg-yellow-500/5">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <AlertDescription className="text-xs">
                                <span className="font-medium text-yellow-500">Pro Tip:</span> {step.tip}
                              </AlertDescription>
                            </Alert>
                          )}
                          {step.link && (
                            <Button size="sm" variant="outline" className="mt-3" asChild>
                              <a href={step.link} target="_blank" rel="noopener noreferrer">
                                Visit {step.title.split(' ')[1] || 'Link'}
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Common Issues */}
              <Card className="border-yellow-500/20 bg-yellow-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-500">
                    <AlertCircle className="h-5 w-5" />
                    Common Issues & Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-background rounded-lg border">
                      <p className="font-medium mb-1">Application Rejected?</p>
                      <p className="text-sm text-muted-foreground">
                        Make sure your photo is clear, shows current dates, and matches the email domain. Reapply with better documentation.
                      </p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border">
                      <p className="font-medium mb-1">School Not Found?</p>
                      <p className="text-sm text-muted-foreground">
                        Your school might not be in the database. Use the "School not listed" option and provide additional proof.
                      </p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border">
                      <p className="font-medium mb-1">Email Not Verified?</p>
                      <p className="text-sm text-muted-foreground">
                        Check spam folder for verification email. Resend verification from GitHub Settings → Emails.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    All Partner Benefits ({allOffers.length}+ Tools & Services)
                  </CardTitle>
                  <CardDescription>
                    Access to $200,000+ worth of tools and services completely free. Filter by category to explore.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Category Filter */}
                  <ScrollArea className="w-full whitespace-nowrap pb-4">
                    <div className="flex gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          size="sm"
                          variant={selectedCategory === category ? "default" : "outline"}
                          onClick={() => setSelectedCategory(category)}
                          className="rounded-full capitalize"
                        >
                          {category === "all" ? "All Offers" : category}
                          {category !== "all" && (
                            <Badge variant="secondary" className="ml-2">
                              {allOffers.filter(o => o.category === category).length}
                            </Badge>
                          )}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>

                  <Separator className="my-6" />

                  {/* Benefits Cards Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredOffers.map((offer, index) => (
                      <div
                        key={index}
                        className="relative block no-underline cursor-pointer group transition-all duration-300 overflow-hidden bg-accent border border-border hover:border-muted"
                        style={{
                          borderRadius: '30px',
                          padding: '6px'
                        }}
                      >
                        <div className="px-4 pt-3 pb-3 relative">
                          <div className="text-foreground text-base font-medium leading-tight mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {offer.name}
                          </div>
                          <div className="text-muted-foreground font-normal text-xs line-clamp-1">
                            {offer.category}
                          </div>
                        </div>

                        <div
                          className="h-[200px] overflow-hidden relative bg-background"
                          style={{
                            borderRadius: '24px'
                          }}
                        >
                          <div className="w-full h-full flex flex-col justify-between p-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-center p-3 bg-primary/10 rounded-lg w-fit">
                                <offer.icon className="h-6 w-6 text-primary" />
                              </div>
                              
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {offer.description}
                              </p>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/20">
                                <p className="text-xs font-medium text-green-700 dark:text-green-400">
                                  🎁 {offer.offer}
                                </p>
                              </div>
                              
                              <div className="flex flex-wrap gap-1">
                                {offer.tags.slice(0, 2).map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {offer.tags.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{offer.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredOffers.length === 0 && (
                    <div className="text-center py-12">
                      <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">No offers found in this category.</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* How to Activate */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    How to Activate Partner Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <h4 className="font-semibold">Get Approved</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Complete the GitHub Student Developer Pack application and wait for approval.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <h4 className="font-semibold">Visit Offers Page</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Go to education.github.com/pack/offers to see all available benefits.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <h4 className="font-semibold">Click to Claim</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Each benefit has its own activation process. Click on any offer to claim it.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <h4 className="font-semibold">Follow Instructions</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Each partner provides unique redemption codes or direct access links.
                      </p>
                    </div>
                  </div>
                  <Alert>
                    <ExternalLink className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Visit the <a href="https://education.github.com/pack/offers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Partner Offers page</a> after approval to activate each benefit individually.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Renewal Info */}
              <Card className="border-blue-500/20 bg-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-500">
                    <Clock className="h-5 w-5" />
                    Renewal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your benefits are valid while you're a student. GitHub will ask you to reverify annually:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>• You'll receive an email when it's time to renew</p>
                    <p>• Upload new proof of enrollment showing current year</p>
                    <p>• Approval usually takes 1-3 days for renewals</p>
                    <p>• All your benefits continue during review period</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 sm:p-12 border border-primary/20 text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join millions of students learning to code with the world's best developer tools, completely free!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer">
                    Apply for Student Pack
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href="https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students" target="_blank" rel="noopener noreferrer">
                    Read Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GithubEducation;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with cart, payments, and admin dashboard",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task tracker with real-time updates and team management features",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      tags: ["TypeScript", "Firebase", "TailwindCSS"],
      category: "Productivity",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking app with forecasts, maps, and location-based alerts",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      tags: ["React", "API Integration", "Charts.js"],
      category: "Data Visualization",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Social Media Clone",
      description: "Instagram-inspired social platform with posts, stories, and messaging",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tags: ["Next.js", "PostgreSQL", "AWS S3"],
      category: "Social",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Website Builder",
      description: "No-code portfolio builder with customizable templates and drag-and-drop editor",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tags: ["React", "DnD Kit", "Supabase"],
      category: "Tools",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Workout logging app with progress tracking, meal planning, and fitness goals",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=300&fit=crop",
      tags: ["React Native", "Redux", "Chart.js"],
      category: "Health & Fitness",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 7,
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot powered by GPT with context awareness and multi-language support",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["Python", "OpenAI", "FastAPI"],
      category: "AI/ML",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 8,
      title: "Recipe Finder App",
      description: "Discover recipes based on ingredients, dietary preferences, and cooking time",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Spoonacular API", "Vuex"],
      category: "Food & Drink",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 9,
      title: "Code Snippet Manager",
      description: "Organize and share code snippets with syntax highlighting and collections",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop",
      tags: ["React", "Prism.js", "IndexedDB"],
      category: "Developer Tools",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 10,
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search, virtual tours, and agent portal",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tags: ["Next.js", "Prisma", "MapBox"],
      category: "Real Estate",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Explore our collection of innovative projects built with modern technologies and best practices
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="px-4 py-1">
                10 Projects
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                Multiple Stacks
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                Open Source
              </Badge>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 sm:p-12 border border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have a Project Idea?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking to collaborate on exciting projects. Get in touch to discuss your next big idea!
              </p>
              <Button size="lg" className="rounded-full px-8">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

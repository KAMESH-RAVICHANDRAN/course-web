import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap, Award, Users, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium animate-slide-down">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Free, beginner-friendly coding education
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight animate-slide-up">
              Learn to code.
              <br />
              <span className="text-accent">Build anything.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-1">
              Master HTML, CSS, and JavaScript from scratch with interactive lessons, 
              hands-on projects, and earn certificates to prove your skills.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
                <Link to="/courses">
                  Start Learning Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
                <Link to="/certifications">View Certifications</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Your learning path</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Go from complete beginner to confident developer with our structured curriculum
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* HTML */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 card-hover animate-slide-up stagger-1">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Step 1</div>
              <h3 className="text-2xl font-bold mb-3">HTML</h3>
              <p className="text-muted-foreground mb-6">
                Learn the foundation of every website. Structure your content with semantic HTML elements.
              </p>
              <Link 
                to="/courses?category=html" 
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                Start with HTML
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* CSS */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 card-hover animate-slide-up stagger-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Step 2</div>
              <h3 className="text-2xl font-bold mb-3">CSS</h3>
              <p className="text-muted-foreground mb-6">
                Style and design beautiful websites. Master layouts, animations, and responsive design.
              </p>
              <Link 
                to="/courses?category=css" 
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                Learn CSS
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* JavaScript */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 card-hover animate-slide-up stagger-3">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Step 3</div>
              <h3 className="text-2xl font-bold mb-3">JavaScript</h3>
              <p className="text-muted-foreground mb-6">
                Add interactivity and logic. Build dynamic web applications and master programming.
              </p>
              <Link 
                to="/courses?category=javascript" 
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                Explore JavaScript
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">12+ Free Courses</h3>
                <p className="text-muted-foreground">
                  Comprehensive curriculum covering everything from basics to advanced topics
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Earn Certificates</h3>
                <p className="text-muted-foreground">
                  Complete courses and earn verified certificates to showcase your skills
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn Together</h3>
                <p className="text-muted-foreground">
                  Join thousands of learners on their coding journey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">
              Ready to start coding?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join <span className="font-neoda">CodeCraft</span> today and begin your journey to becoming a web developer. 
              It's completely free to get started.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="rounded-full px-10 h-14 text-base font-medium"
            >
              <Link to="/auth">
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            {/* Backed by AJ STUDIOZ */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center justify-center gap-3 opacity-90">
                <p className="text-sm">Proudly backed by</p>
                <img 
                  src="/aj-logo.png" 
                  alt="AJ STUDIOZ" 
                  className="h-8 w-auto filter drop-shadow-lg"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="text-sm font-semibold font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

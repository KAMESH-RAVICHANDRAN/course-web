import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, Mail } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link to="/aj-studioz">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to AJ STUDIOZ
              </Link>
            </Button>
          </div>

          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/10 mb-6">
              <Rocket className="w-16 h-16 text-accent" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            <span className="font-neurobyte">
              <span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span>
            </span>
            <br />
            Starter Template
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Coming Soon
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We're working on an amazing starter template with all our custom branding, 
            fonts, and design system pre-configured. Get ready to kickstart your projects 
            with the <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span> style!
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="font-semibold mb-2">Pre-styled Components</h3>
              <p className="text-sm text-muted-foreground">
                Ready-to-use UI components with our signature design
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="text-2xl mb-3">✨</div>
              <h3 className="font-semibold mb-2">Custom Fonts Included</h3>
              <p className="text-sm text-muted-foreground">
                Neurobyte and Neoda fonts pre-configured and ready
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold mb-3">Modern Stack</h3>
              <p className="text-sm text-muted-foreground">
                React, TypeScript, TailwindCSS, and more
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Get Notified
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/color-palette">
                View Design System
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;

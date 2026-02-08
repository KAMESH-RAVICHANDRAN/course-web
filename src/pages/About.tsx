import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Code2, Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img 
            src="/cc-logo.png" 
            alt="CodeCraft" 
            className="w-16 h-16 rounded-2xl mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 animate-slide-down flex items-baseline justify-center gap-3">
            <span>About</span> <span className="font-neoda">CodeCraft</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-1">
            We believe everyone deserves access to quality coding education. 
            That's why we're building the most accessible, comprehensive, and free learning platform.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <span className="font-neoda">CodeCraft</span> was founded with a simple belief: everyone should have the opportunity to learn 
              how to code, regardless of their background, location, or financial situation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide a structured, project-based curriculum that takes you from complete beginner 
              to confident developer. Our courses are designed by experienced developers who understand 
              what it takes to succeed in the tech industry.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Forever</h3>
              <p className="text-muted-foreground">
                All our core courses and certifications are completely free. No hidden fees, 
                no premium tiers for essential content.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Project-Based Learning</h3>
              <p className="text-muted-foreground">
                Learn by building real projects. We believe the best way to learn coding is by 
                actually writing code, not just reading about it.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Join thousands of learners helping each other. Our community forums and 
                Discord server are always active with helpful members.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Relevant</h3>
              <p className="text-muted-foreground">
                Our curriculum is constantly updated to reflect what employers are actually 
                looking for. Learn skills that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">Join Our Growing Community</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold">12+</div>
              <div className="text-sm opacity-80">Free Courses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">3</div>
              <div className="text-sm opacity-80">Certifications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-sm opacity-80">Lessons</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

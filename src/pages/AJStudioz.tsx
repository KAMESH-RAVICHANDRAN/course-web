import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Users, Rocket, Award, Code, MessageSquare, Mail } from "lucide-react";

const AJStudioz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              Our Proud Backer
            </div>
            
            {/* AJ STUDIOZ Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src="/aj-logo.png" 
                alt="AJ STUDIOZ" 
                className="h-32 w-auto"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight">
              About
              <br />
              <span className="text-accent font-neurobyte">AJ STUDIOZ</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering the next generation of developers through innovative learning 
              platforms and cutting-edge educational technology.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                <span className="font-neurobyte">AJ STUDIOZ</span> is committed to democratizing tech education by backing 
                innovative learning platforms that make quality coding education 
                accessible to everyone, everywhere.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe that everyone deserves the opportunity to learn, grow, 
                and succeed in the digital age. Through strategic partnerships and 
                unwavering support, we're building a future where knowledge knows no bounds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-6 rounded-lg">
                <Target className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Innovation First</h3>
                <p className="text-sm text-muted-foreground">
                  Pioneering new approaches to tech education
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Community Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Building inclusive learning environments
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <Rocket className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Growth Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Accelerating learner success worldwide
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <Award className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  Maintaining excellence in every project
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30 rounded-3xl my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <span className="font-neurobyte">AJ STUDIOZ</span> provides comprehensive support for educational platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border">
              <Code className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Platform Development</h3>
              <p className="text-muted-foreground">
                We back and support the development of robust, scalable learning 
                platforms that deliver exceptional educational experiences.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border">
              <Sparkles className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Content Innovation</h3>
              <p className="text-muted-foreground">
                Supporting the creation of engaging, interactive learning content 
                that keeps students motivated and progressing.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border">
              <MessageSquare className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Building</h3>
              <p className="text-muted-foreground">
                Fostering vibrant learning communities where students and educators 
                connect, collaborate, and grow together.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50K+</div>
              <p className="text-muted-foreground">Students Reached</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Platforms Backed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every project, ensuring the highest quality standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-muted-foreground">
                Education should be accessible to all, regardless of background or circumstances.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly evolving to embrace new technologies and teaching methodologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Measuring success by the positive change we create in learners' lives.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Creativity</h3>
              <p className="text-muted-foreground">
                Encouraging creative problem-solving and out-of-the-box thinking.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Working together with partners, educators, and communities for shared success.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-accent/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of learners on our platform backed by <span className="font-neurobyte">AJ STUDIOZ</span> and 
              start your coding journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/courses">Start Learning</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AJStudioz;

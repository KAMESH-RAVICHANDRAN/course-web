import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Target, Users, Rocket, Award, Code, MessageSquare, Mail, Palette, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AJStudioz = () => {
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [logoStyle, setLogoStyle] = useState<"codecraft" | "ajstudioz">("codecraft");
  const [logoText, setLogoText] = useState("");
  const logoPreviewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const downloadLogo = async () => {
    if (!logoPreviewRef.current || !logoText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text for your logo",
        variant: "destructive",
      });
      return;
    }

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(logoPreviewRef.current, {
        backgroundColor: null,
        scale: 3,
      });
      
      const link = document.createElement('a');
      link.download = `${logoText.toLowerCase().replace(/\s+/g, '-')}-logo.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      toast({
        title: "Success!",
        description: "Your logo has been downloaded",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download logo. Please try again.",
        variant: "destructive",
      });
    }
  };

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
              <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span>
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
                <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span> is committed to democratizing tech education by backing 
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
              <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span> provides comprehensive support for educational platforms
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

        {/* Logo Generator Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Brand Logo Generator
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create stunning logos with our signature styling - perfect for your projects and branding
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => {
                setLogoStyle("codecraft");
                setLogoText("CodeCraft");
                setIsLogoModalOpen(true);
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Palette className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-neoda">CodeCraft Style</CardTitle>
                    <CardDescription>Modern, clean typography</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-background rounded-lg p-8 border border-border">
                  <div className="text-center">
                    <span className="text-4xl font-bold font-neoda">CodeCraft</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Palette className="w-4 h-4 mr-2" />
                  Generate Logo
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => {
                setLogoStyle("ajstudioz");
                setLogoText("AJ STUDIOZ");
                setIsLogoModalOpen(true);
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span> Style</CardTitle>
                    <CardDescription>Bold, futuristic design</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-background rounded-lg p-8 border border-border">
                  <div className="text-center">
                    <span className="text-4xl font-bold font-neurobyte">
                      <span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span>
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Logo
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Guide Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              How to Use in Your Application
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Implement our signature logo styles in your project with these simple code snippets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CodeCraft Style Implementation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span className="font-neoda">CodeCraft</span> Style - HTML/CSS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-semibold mb-2 block">1. Add Font to CSS</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`@font-face {
  font-family: 'Neoda';
  src: url('/fonts/neoda.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}`}</pre>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">2. HTML Structure</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`<span class="codecraft-logo">
  CodeCraft
</span>`}</pre>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">3. CSS Styling</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`.codecraft-logo {
  font-family: 'Neoda', sans-serif;
  font-weight: bold;
  font-size: 2rem;
}`}</pre>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">React/JSX Example</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`<span className="font-neoda font-bold text-4xl">
  CodeCraft
</span>`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AJ STUDIOZ Style Implementation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span> Style - HTML/CSS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-semibold mb-2 block">1. Add Font to CSS</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`@font-face {
  font-family: 'Neurobyte';
  src: url('/fonts/Neurobyte.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}`}</pre>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">2. HTML Structure</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`<span class="ajstudioz-logo">
  <span class="aj-text">AJ</span>
  <span class="studioz-text">STUDIOZ</span>
</span>`}</pre>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">3. CSS Styling</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`.ajstudioz-logo {
  font-family: 'Neurobyte', sans-serif;
  font-weight: bold;
  font-size: 2rem;
}
.aj-text { color: #4ade80; } /* green-400 */
.studioz-text { color: #ef4444; } /* red-500 */`}</pre>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">React/JSX Example</Label>
                  <div className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{`<span className="font-neurobyte font-bold text-4xl">
  <span className="text-green-400">AJ</span>{' '}
  <span className="text-red-500">STUDIOZ</span>
</span>`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Fonts Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Font Files
                </CardTitle>
                <CardDescription>
                  Get the font files needed to implement these styles in your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/fonts/neoda.otf';
                      link.download = 'neoda.otf';
                      link.click();
                      toast({
                        title: "Download Started",
                        description: "Neoda font is downloading",
                      });
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Neoda Font
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/fonts/Neurobyte.otf';
                      link.download = 'Neurobyte.otf';
                      link.click();
                      toast({
                        title: "Download Started",
                        description: "Neurobyte font is downloading",
                      });
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Neurobyte Font
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Note: Place font files in your project's public/fonts directory for web applications
                </p>
              </CardContent>
            </Card>
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
              Join thousands of learners on our platform backed by <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span> and 
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

      {/* Logo Generator Modal */}
      <Dialog open={isLogoModalOpen} onOpenChange={setIsLogoModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Generate Your Logo</DialogTitle>
            <DialogDescription>
              Customize your logo text and download it as a high-quality PNG
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="logoText">Logo Text</Label>
              <Input
                id="logoText"
                value={logoText}
                onChange={(e) => setLogoText(e.target.value)}
                placeholder="Enter your text"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label>Preview</Label>
              <div 
                ref={logoPreviewRef}
                className="bg-gradient-to-br from-background to-muted/30 rounded-xl p-12 border-2 border-dashed border-border flex items-center justify-center min-h-[200px]"
              >
                {logoText ? (
                  logoStyle === "codecraft" ? (
                    <span className="text-5xl md:text-6xl font-bold font-neoda text-center break-words max-w-full">
                      {logoText}
                    </span>
                  ) : (
                    <span className="text-5xl md:text-6xl font-bold font-neurobyte text-center break-words max-w-full">
                      {logoText.split(' ').slice(0, 1).map((word, i) => (
                        <span key={i} className="text-green-400">{word}</span>
                      ))}{' '}
                      {logoText.split(' ').slice(1).map((word, i) => (
                        <span key={i} className="text-red-500">{word} </span>
                      ))}
                    </span>
                  )
                ) : (
                  <p className="text-muted-foreground">Your logo will appear here</p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={downloadLogo}
                className="flex-1"
                disabled={!logoText.trim()}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
              <Button 
                onClick={() => setIsLogoModalOpen(false)}
                variant="outline"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AJStudioz;

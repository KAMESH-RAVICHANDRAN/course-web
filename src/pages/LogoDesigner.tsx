import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Palette, Sparkles, Download, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LogoDesigner = () => {
  const [logoStyle, setLogoStyle] = useState<"codecraft" | "ajstudioz">("codecraft");
  const [logoText, setLogoText] = useState("CodeCraft");
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/aj-studioz">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AJ STUDIOZ
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Logo Designer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create stunning logos with our signature styling - perfect for your projects and branding
          </p>
        </div>

        {/* Style Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card 
            className={`cursor-pointer transition-all hover:scale-[1.02] ${
              logoStyle === "codecraft" ? "ring-2 ring-accent" : ""
            }`}
            onClick={() => {
              setLogoStyle("codecraft");
              setLogoText("CodeCraft");
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
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all hover:scale-[1.02] ${
              logoStyle === "ajstudioz" ? "ring-2 ring-accent" : ""
            }`}
            onClick={() => {
              setLogoStyle("ajstudioz");
              setLogoText("AJ STUDIOZ");
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
            </CardContent>
          </Card>
        </div>

        {/* Logo Customization */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Customize Your Logo</CardTitle>
            <CardDescription>Enter your text and download your branded logo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="logoText" className="text-base">Logo Text</Label>
              <Input
                id="logoText"
                value={logoText}
                onChange={(e) => setLogoText(e.target.value)}
                placeholder="Enter your text"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Preview</Label>
              <div 
                ref={logoPreviewRef}
                className="bg-gradient-to-br from-background to-muted/30 rounded-xl p-16 border-2 border-dashed border-border flex items-center justify-center min-h-[250px]"
              >
                {logoText ? (
                  logoStyle === "codecraft" ? (
                    <span className="text-6xl md:text-7xl font-bold font-neoda text-center break-words max-w-full">
                      {logoText}
                    </span>
                  ) : (
                    <span className="text-6xl md:text-7xl font-bold font-neurobyte text-center break-words max-w-full">
                      {logoText.split(' ').slice(0, 1).map((word, i) => (
                        <span key={i} className="text-green-400">{word}</span>
                      ))}{' '}
                      {logoText.split(' ').slice(1).map((word, i) => (
                        <span key={i} className="text-red-500">{word} </span>
                      ))}
                    </span>
                  )
                ) : (
                  <p className="text-muted-foreground text-lg">Your logo will appear here</p>
                )}
              </div>
            </div>

            <Button 
              onClick={downloadLogo}
              className="w-full"
              size="lg"
              disabled={!logoText.trim()}
            >
              <Download className="w-5 h-5 mr-2" />
              Download as PNG
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default LogoDesigner;

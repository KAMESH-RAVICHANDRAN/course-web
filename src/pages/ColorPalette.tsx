import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ColorPalette = () => {
  const { toast } = useToast();
  const [copiedColor, setCopiedColor] = useState<string>("");

  const copyToClipboard = (color: string, name: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    toast({
      title: "Copied!",
      description: `${name} (${color}) copied to clipboard`,
    });
    setTimeout(() => setCopiedColor(""), 2000);
  };

  const brandColors = [
    { name: "AJ Green", hex: "#4ade80", class: "bg-green-400" },
    { name: "STUDIOZ Red", hex: "#ef4444", class: "bg-red-500" },
    { name: "Accent Green", hex: "hsl(140 20% 50%)", class: "bg-accent" },
  ];

  const themeColors = [
    // Dark Shades
    { name: "Slate Dark", hex: "#191919", class: "bg-[#191919]", group: "dark" },
    { name: "Slate Medium", hex: "#262625", class: "bg-[#262625]", group: "dark" },
    { name: "Slate Light", hex: "#4d4d3e", class: "bg-[#4d4d3e]", group: "dark" },
    
    // Gray Shades
    { name: "Cloud Dark", hex: "#666663", class: "bg-[#666663]", group: "gray" },
    { name: "Cloud Medium", hex: "#91918d", class: "bg-[#91918d]", group: "gray" },
    { name: "Cloud Light", hex: "#bfbfba", class: "bg-[#bfbfba]", group: "gray" },
    
    // Light Shades
    { name: "Ivory Dark", hex: "#e8e4df", class: "bg-[#e8e4df]", group: "light" },
    { name: "Ivory Medium", hex: "#f0f0eb", class: "bg-[#f0f0eb]", group: "light" },
    { name: "Ivory Light", hex: "#fafaf7", class: "bg-[#fafaf7]", group: "light" },
    
    // Warm Tones
    { name: "Book Cloth", hex: "#cc7e6c", class: "bg-[#cc7e6c]", group: "warm" },
    { name: "Kraft", hex: "#d4627f", class: "bg-[#d4627f]", group: "warm" },
    { name: "Manilla", hex: "#ebdb8c", class: "bg-[#ebdb8c]", group: "warm" },
  ];

  const accentColors = [
    { name: "Focus Ocean", hex: "#74b9ff", class: "bg-[#74b9ff]" },
    { name: "Error Crimson", hex: "#ff6b6b", class: "bg-[#ff6b6b]" },
  ];

  const typography = [
    { name: "CodeCraft", font: "font-neoda", sample: "CodeCraft", file: "Neoda" },
    { name: "AJ STUDIOZ", font: "font-neurobyte", sample: "AJ STUDIOZ", file: "Neurobyte", color: true },
    { name: "Headings", font: "font-serif", sample: "The quick brown fox", file: "System Serif" },
    { name: "Body Text", font: "font-sans", sample: "The quick brown fox jumps over the lazy dog", file: "System Sans-serif" },
  ];

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
            Design System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our complete brand color palette and typography guidelines
          </p>
        </div>

        {/* Brand Colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-serif mb-6">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandColors.map((color) => (
              <Card 
                key={color.name}
                className="cursor-pointer hover:shadow-lg transition-all"
                onClick={() => copyToClipboard(color.hex, color.name)}
              >
                <div className={`h-32 rounded-t-xl ${color.class}`} />
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{color.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                    </div>
                    {copiedColor === color.hex ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Theme Color Palette */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-serif mb-6">Theme Palette</h2>
          
          {/* Dark Shades */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Dark Shades</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {themeColors.filter(c => c.group === "dark").map((color) => (
                <Card 
                  key={color.name}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className={`h-32 rounded-t-xl ${color.class}`} />
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                      </div>
                      {copiedColor === color.hex ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gray Shades */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Gray Shades</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {themeColors.filter(c => c.group === "gray").map((color) => (
                <Card 
                  key={color.name}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className={`h-32 rounded-t-xl ${color.class}`} />
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                      </div>
                      {copiedColor === color.hex ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Light Shades */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Light Shades</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {themeColors.filter(c => c.group === "light").map((color) => (
                <Card 
                  key={color.name}
                  className="cursor-pointer hover:shadow-lg transition-all border-2"
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className={`h-32 rounded-t-xl ${color.class}`} />
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                      </div>
                      {copiedColor === color.hex ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Warm Tones */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Warm Tones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {themeColors.filter(c => c.group === "warm").map((color) => (
                <Card 
                  key={color.name}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className={`h-32 rounded-t-xl ${color.class}`} />
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                      </div>
                      {copiedColor === color.hex ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Accent Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accentColors.map((color) => (
                <Card 
                  key={color.name}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className={`h-32 rounded-t-xl ${color.class}`} />
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                      </div>
                      {copiedColor === color.hex ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-serif mb-6">Typography</h2>
          <div className="space-y-6">
            {typography.map((type) => (
              <Card key={type.name}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{type.name}</span>
                    <span className="text-sm text-muted-foreground font-normal">{type.file}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-4xl ${type.font} font-bold`}>
                    {type.color ? (
                      <>
                        <span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span>
                      </>
                    ) : (
                      type.sample
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div className={`${type.font} text-base`}>Aa Bb Cc</div>
                    <div className={`${type.font} text-lg`}>0123456789</div>
                    <div className={`${type.font}`}>!@#$%^&*()</div>
                    <div className={`${type.font}`}>Regular • Bold</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ColorPalette;

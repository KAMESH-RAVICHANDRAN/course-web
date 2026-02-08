import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Typography = () => {
  const { toast } = useToast();

  const typography = [
    { name: "CodeCraft", font: "font-neoda", sample: "CodeCraft", file: "Neoda", downloadUrl: "/fonts/neoda.otf" },
    { name: "AJ STUDIOZ", font: "font-neurobyte", sample: "AJ STUDIOZ", file: "Neurobyte", color: true, downloadUrl: "/fonts/Neurobyte.otf" },
    { name: "Headings", font: "font-serif", sample: "The quick brown fox", file: "System Serif", downloadUrl: null },
    { name: "Body Text", font: "font-sans", sample: "The quick brown fox jumps over the lazy dog", file: "System Sans-serif", downloadUrl: null },
  ];

  const downloadFont = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    toast({
      title: "Download Started",
      description: `${filename} is downloading`,
    });
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
            Typography System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our custom fonts and typography guidelines for consistent branding
          </p>
        </div>

        {/* Typography Section */}
        <section className="mb-12">
          <div className="space-y-6">
            {typography.map((type) => (
              <Card key={type.name}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{type.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground font-normal">{type.file}</span>
                      {type.downloadUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFont(type.downloadUrl!, `${type.file}.otf`)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl ${type.font} font-bold mb-4`}>
                    {type.color ? (
                      <>
                        <span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span>
                      </>
                    ) : (
                      type.sample
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-muted-foreground border-t pt-4">
                    <div className={`${type.font} text-base`}>Aa Bb Cc</div>
                    <div className={`${type.font} text-base`}>0123456789</div>
                    <div className={`${type.font} text-base`}>!@#$%</div>
                    <div className={`${type.font} text-xs`}>Regular • Bold</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Font Usage Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold font-serif mb-4">Usage Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* CodeCraft Example */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="font-neoda">CodeCraft</span> Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-950 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                  <pre>{`@font-face {
  font-family: 'Neoda';
  src: url('/fonts/neoda.otf');
}
.logo { font-family: 'Neoda'; }`}</pre>
                </div>
              </CardContent>
            </Card>

            {/* AJ STUDIOZ Example */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span> Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-950 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                  <pre>{`@font-face {
  font-family: 'Neurobyte';
  src: url('/fonts/Neurobyte.otf');
}
.aj { color: #4ade80; }
.studioz { color: #ef4444; }`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Guide */}
        <section>
          <Card className="bg-accent/5 border-accent/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Implementation Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-2">React/TailwindCSS</h4>
                <div className="bg-slate-950 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                  <pre>{`<span className="font-neoda font-bold">CodeCraft</span>
<span className="font-neurobyte font-bold">
  <span className="text-green-400">AJ</span>
  <span className="text-red-500">STUDIOZ</span>
</span>`}</pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">HTML/CSS</h4>
                <div className="bg-slate-950 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                  <pre>{`<span style="font-family: 'Neoda';">CodeCraft</span>
<span style="font-family: 'Neurobyte';">
  <span style="color: #4ade80;">AJ</span>
  <span style="color: #ef4444;">STUDIOZ</span>
</span>`}</pre>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Place font files in your project's public/fonts directory
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Typography;

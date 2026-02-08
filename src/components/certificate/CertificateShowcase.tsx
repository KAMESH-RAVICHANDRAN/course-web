import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const CertificateShowcase = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
          Certificate Preview
        </h2>
        <p className="text-muted-foreground text-lg">
          Here's what your certificate will look like when you complete a course
        </p>
      </div>

      <Card className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-background via-background to-accent/5 border-2">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full translate-x-20 translate-y-20" />
        
        {/* Border Decoration */}
        <div className="absolute inset-4 border-2 border-accent/20 rounded-lg" />
        
        <div className="relative z-10 text-center space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <Award className="w-16 h-16 text-accent mx-auto" />
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">
              Certificate of Completion
            </h3>
          </div>

          {/* Recipient */}
          <div className="space-y-4 py-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              This is to certify that
            </p>
            <h4 className="text-3xl md:text-4xl font-bold font-serif">
              Your Name
            </h4>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              has successfully completed
            </p>
            <h5 className="text-xl md:text-2xl font-bold text-accent">
              Course Title
            </h5>
          </div>

          {/* Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6 text-xs text-muted-foreground">
            <div>
              <p className="uppercase tracking-wider mb-1">Date</p>
              <p className="font-semibold text-foreground">January 15, 2026</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-border" />
            <div>
              <p className="uppercase tracking-wider mb-1">Category</p>
              <p className="font-semibold text-foreground uppercase">Web Development</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-border" />
            <div>
              <p className="uppercase tracking-wider mb-1">Platform</p>
              <p className="font-semibold text-foreground font-neoda">CodeCraft</p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-border/50 mt-6">
            <div className="flex items-center justify-center gap-2">
              <p className="text-xs text-muted-foreground">Backed by</p>
              <img 
                src="/aj-logo.png" 
                alt="AJ STUDIOZ" 
                className="h-4 w-auto"
              />
              <span className="text-xs font-semibold text-accent font-neurobyte"><span className="text-green-400">AJ</span> <span className="text-red-500">STUDIOZ</span></span>
              <span className="text-xs text-muted-foreground mx-2">|</span>
              <span className="text-xs text-muted-foreground">Certificate ID: SAMPLE123</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          ✨ Complete any course to earn your personalized certificate
        </p>
      </div>
    </section>
  );
};

export default CertificateShowcase;

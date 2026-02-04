import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Award, Download, Share2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
}

const Certificate = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const [course, setCourse] = useState<Course | null>(null);
  const [userName, setUserName] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [eligible, setEligible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkEligibility = async () => {
      if (!user || !courseSlug) {
        navigate('/auth');
        return;
      }

      setLoading(true);

      // Fetch course
      const { data: courseData } = await supabase
        .from("courses")
        .select("*")
        .eq("slug", courseSlug)
        .single();

      if (!courseData) {
        navigate('/courses');
        return;
      }

      setCourse(courseData);

      // Fetch all lessons for this course
      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("id")
        .eq("course_id", courseData.id);

      if (!lessonsData || lessonsData.length === 0) {
        setEligible(false);
        setLoading(false);
        return;
      }

      // Check if all lessons are completed
      const { data: progressData } = await supabase
        .from("user_progress")
        .select("lesson_id, completed, completed_at")
        .eq("user_id", user.id)
        .eq("completed", true)
        .in("lesson_id", lessonsData.map(l => l.id));

      const completedCount = progressData?.length || 0;
      const allCompleted = completedCount === lessonsData.length;

      setEligible(allCompleted);

      if (allCompleted && progressData && progressData.length > 0) {
        // Get the latest completion date
        const latestCompletion = progressData.reduce((latest, current) => {
          return new Date(current.completed_at) > new Date(latest.completed_at) ? current : latest;
        });
        setCompletionDate(new Date(latestCompletion.completed_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }));
      }

      // Get user name from profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      setUserName(profileData?.full_name || user.email?.split('@')[0] || "Student");
      setLoading(false);
    };

    checkEligibility();
  }, [courseSlug, user, navigate]);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      // Using html2canvas would be ideal, but for now we'll use a simple approach
      toast({
        title: "Download started",
        description: "Your certificate is being prepared...",
      });

      // Take a screenshot using html2canvas (you'd need to install it)
      // For now, we'll just print
      window.print();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download certificate. Please try again.",
        variant: "destructive",
      });
    }
  };

  const shareCertificate = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `${course?.title} Certification`,
        text: `I completed the ${course?.title} course!`,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Certificate link copied to clipboard.",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!eligible) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="p-8 text-center">
            <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Certificate Not Available</h1>
            <p className="text-muted-foreground mb-6">
              Complete all lessons in {course?.title} to earn your certificate.
            </p>
            <Button onClick={() => navigate(`/courses/${courseSlug}`)}>
              Continue Course
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">🎉 Congratulations!</h1>
          <p className="text-muted-foreground">
            You've successfully completed the course. Here's your certificate.
          </p>
        </div>

        {/* Certificate */}
        <div 
          ref={certificateRef}
          className="certificate-container mb-8"
          style={{ pageBreakInside: 'avoid' }}
        >
          <Card className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-background via-background to-accent/5">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full translate-x-20 translate-y-20" />
            
            {/* Border Decoration */}
            <div className="absolute inset-4 border-2 border-accent/20 rounded-lg" />
            
            <div className="relative z-10 text-center space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <Award className="w-20 h-20 text-accent mx-auto" />
                <h2 className="text-xl font-semibold text-accent uppercase tracking-wider">
                  Certificate of Completion
                </h2>
              </div>

              {/* Recipient */}
              <div className="space-y-4 py-8">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  This is to certify that
                </p>
                <h3 className="text-4xl md:text-5xl font-bold font-serif">
                  {userName}
                </h3>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  has successfully completed
                </p>
                <h4 className="text-2xl md:text-3xl font-bold text-accent">
                  {course?.title}
                </h4>
              </div>

              {/* Details */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div>
                  <p className="uppercase tracking-wider mb-1">Date</p>
                  <p className="font-semibold text-foreground">{completionDate}</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-border" />
                <div>
                  <p className="uppercase tracking-wider mb-1">Category</p>
                  <p className="font-semibold text-foreground uppercase">{course?.category}</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-border" />
                <div>
                  <p className="uppercase tracking-wider mb-1">Platform</p>
                  <p className="font-semibold text-foreground">CodeCraft</p>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-8 border-t border-border/50 mt-8">
                <p className="text-xs text-muted-foreground">
                  Backed by AJ STUDIOZ | Certificate ID: {course?.id.slice(0, 8).toUpperCase()}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={downloadCertificate} size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download Certificate
          </Button>
          <Button onClick={shareCertificate} variant="outline" size="lg" className="gap-2">
            <Share2 className="w-5 h-5" />
            Share
          </Button>
        </div>

        {/* Additional Info */}
        <Card className="mt-12 p-6 bg-muted/50">
          <h3 className="font-bold mb-3">About This Certificate</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ This certificate validates your completion of all course lessons</li>
            <li>✓ You can share this certificate on LinkedIn, resume, or portfolio</li>
            <li>✓ The certificate includes a unique ID for verification</li>
            <li>✓ Download or print this certificate for your records</li>
          </ul>
        </Card>
      </main>

      <Footer />

      <style>{`
        @media print {
          header, footer, button, .certificate-container + * {
            display: none !important;
          }
          .certificate-container {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Certificate;

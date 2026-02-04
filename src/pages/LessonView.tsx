import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import CodeChallenge from "@/components/lesson/CodeChallenge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle,
  Loader2,
  Menu,
  X,
  Code
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Course {
  id: string;
  title: string;
  slug: string;
}

interface Lesson {
  id: string;
  title: string;
  slug: string;
  content: string;
  order_index: number;
  estimated_minutes: number;
  course_id: string;
}

const LessonView = () => {
  const { courseSlug, lessonSlug } = useParams<{ courseSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!courseSlug || !lessonSlug) return;
      
      // Require authentication to access lessons
      if (!user) {
        navigate(`/auth?redirect=/courses/${courseSlug}/lessons/${lessonSlug}`);
        return;
      }
      
      setLoading(true);
      
      // Fetch course
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("id, title, slug")
        .eq("slug", courseSlug)
        .eq("is_published", true)
        .single();

      if (courseError || !courseData) {
        navigate("/courses");
        return;
      }

      setCourse(courseData);

      // Fetch all lessons for navigation
      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("id, title, slug, content, order_index, estimated_minutes, course_id")
        .eq("course_id", courseData.id)
        .order("order_index");

      setAllLessons(lessonsData || []);

      // Find current lesson
      const currentLesson = (lessonsData || []).find(l => l.slug === lessonSlug);
      if (!currentLesson) {
        navigate(`/courses/${courseSlug}`);
        return;
      }

      setLesson(currentLesson);

      // Check if completed
      if (user) {
        const { data: progressData } = await supabase
          .from("user_progress")
          .select("completed")
          .eq("user_id", user.id)
          .eq("lesson_id", currentLesson.id)
          .single();

        setCompleted(progressData?.completed || false);
      }

      setLoading(false);
    };

    fetchData();
  }, [courseSlug, lessonSlug, user, navigate]);

  const markComplete = async () => {
    if (!user || !lesson) {
      toast({
        title: "Sign in required",
        description: "Please sign in to track your progress.",
        variant: "destructive",
      });
      return;
    }

    setCompleting(true);

    const { error } = await supabase
      .from("user_progress")
      .upsert({
        user_id: user.id,
        lesson_id: lesson.id,
        completed: true,
        completed_at: new Date().toISOString(),
      }, {
        onConflict: "user_id,lesson_id"
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to save progress. Please try again.",
        variant: "destructive",
      });
    } else {
      setCompleted(true);
      toast({
        title: "Lesson completed!",
        description: "Great job! Keep up the momentum.",
      });
    }

    setCompleting(false);
  };

  const currentIndex = allLessons.findIndex(l => l.id === lesson?.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!lesson || !course) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-80 border-r border-border h-[calc(100vh-80px)] sticky top-20 overflow-y-auto">
          <div className="p-4">
            <Link 
              to={`/courses/${courseSlug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Course
            </Link>
            <h2 className="font-bold text-lg mt-4 mb-4">{course.title}</h2>
            
            <nav className="space-y-1">
              {allLessons.map((l, index) => (
                <Link
                  key={l.id}
                  to={`/courses/${courseSlug}/lessons/${l.slug}`}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm transition-all ${
                    l.id === lesson.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    l.id === lesson.id
                      ? 'bg-primary-foreground/20'
                      : 'bg-muted'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="truncate">{l.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-4 left-4 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
            <aside className="w-80 h-full bg-background border-r border-border overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-4">
                <Link 
                  to={`/courses/${courseSlug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 inline-flex items-center"
                  onClick={() => setSidebarOpen(false)}
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Course
                </Link>
                <h2 className="font-bold text-lg mt-4 mb-4">{course.title}</h2>
                
                <nav className="space-y-1">
                  {allLessons.map((l, index) => (
                    <Link
                      key={l.id}
                      to={`/courses/${courseSlug}/lessons/${l.slug}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl text-sm transition-all ${
                        l.id === lesson.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                        l.id === lesson.id
                          ? 'bg-primary-foreground/20'
                          : 'bg-muted'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="truncate">{l.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
            {/* Lesson Header */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                Lesson {currentIndex + 1} of {allLessons.length}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                {lesson.title}
              </h1>
              <p className="text-muted-foreground">
                {lesson.estimated_minutes} min read
              </p>
            </div>

            {/* Lesson Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold font-serif mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold font-serif mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
                  code: ({ className, children }) => {
                    const isBlock = className?.includes('language-');
                    if (isBlock) {
                      return (
                        <pre className="bg-muted rounded-xl p-4 overflow-x-auto my-4">
                          <code className="text-sm">{children}</code>
                        </pre>
                      );
                    }
                    return <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>;
                  },
                  ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">{children}</ol>,
                  li: ({ children }) => <li>{children}</li>,
                }}
              >
                {lesson.content}
              </ReactMarkdown>
            </div>

            {/* Interactive Coding Challenges */}
            <div className="mb-12 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold font-serif">Practice Challenge</h2>
              </div>
              
              {/* HTML Challenge Example */}
              {course.slug === 'html-basics' && (
                <CodeChallenge
                  title="Create Your First HTML Element"
                  description="Create a paragraph element that says 'Hello, World!'"
                  hints={[
                    "Use the <p> tag to create a paragraph",
                    "Place your text between the opening and closing tags",
                    "Remember to close the tag with </p>"
                  ]}
                  starterCode={`<!-- Write your HTML code here -->\n\n`}
                  solution={`<p>Hello, World!</p>`}
                  onComplete={markComplete}
                />
              )}

              {/* CSS Challenge Example */}
              {course.slug === 'css-fundamentals' && (
                <CodeChallenge
                  title="Style a Button"
                  description="Create a CSS rule to make a button blue with white text"
                  hints={[
                    "Use the 'background-color' property for the blue background",
                    "Use the 'color' property for white text",
                    "Target the button with the selector 'button'"
                  ]}
                  starterCode={`button {\n  /* Add your CSS properties here */\n}\n`}
                  solution={`button {\n  background-color: blue;\n  color: white;\n}`}
                  onComplete={markComplete}
                />
              )}

              {/* JavaScript Challenge Example */}
              {course.slug === 'javascript-essentials' && (
                <CodeChallenge
                  title="Create a Function"
                  description="Write a function that returns the sum of two numbers"
                  hints={[
                    "Use the 'function' keyword to define a function",
                    "The function should take two parameters",
                    "Use the 'return' keyword to return the sum"
                  ]}
                  starterCode={`function sum(a, b) {\n  // Write your code here\n}\n\nconsole.log(sum(5, 3)); // Should output: 8`}
                  solution={`function sum(a, b) {\n  return a + b;\n}\n\nconsole.log(sum(5, 3));`}
                  onComplete={markComplete}
                />
              )}

              {/* Generic Challenge for other courses */}
              {!['html-basics', 'css-fundamentals', 'javascript-essentials'].includes(course.slug || '') && (
                <CodeChallenge
                  title="Practice Exercise"
                  description="Try the code example from this lesson"
                  hints={[
                    "Review the lesson content above",
                    "Try to apply what you learned",
                    "Experiment with different variations"
                  ]}
                  starterCode={`// Write your code here\n\n`}
                  solution={`// Solution will vary based on the lesson content`}
                  onComplete={markComplete}
                />
              )}
            </div>

            {/* Complete Button */}
            {!completed ? (
              <Button 
                onClick={markComplete} 
                size="lg" 
                className="w-full rounded-xl mb-8"
                disabled={completing}
              >
                {completing ? (
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                  <CheckCircle className="w-5 h-5 mr-2" />
                )}
                Mark as Complete
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-accent font-medium mb-8 p-4 bg-accent/10 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                Lesson Completed
              </div>
            )}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
              {prevLesson ? (
                <Button 
                  asChild 
                  variant="outline" 
                  className="flex-1 rounded-xl h-auto py-4"
                >
                  <Link to={`/courses/${courseSlug}/lessons/${prevLesson.slug}`}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Previous</div>
                      <div className="font-medium truncate">{prevLesson.title}</div>
                    </div>
                  </Link>
                </Button>
              ) : (
                <div className="flex-1" />
              )}
              
              {nextLesson ? (
                <Button 
                  asChild 
                  className="flex-1 rounded-xl h-auto py-4"
                >
                  <Link to={`/courses/${courseSlug}/lessons/${nextLesson.slug}`}>
                    <div className="text-left flex-1">
                      <div className="text-xs opacity-80">Next</div>
                      <div className="font-medium truncate">{nextLesson.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              ) : (
                <Button 
                  asChild 
                  className="flex-1 rounded-xl h-auto py-4"
                >
                  <Link to={`/courses/${courseSlug}`}>
                    <div className="text-left flex-1">
                      <div className="text-xs opacity-80">Finished!</div>
                      <div className="font-medium">Back to Course</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default LessonView;

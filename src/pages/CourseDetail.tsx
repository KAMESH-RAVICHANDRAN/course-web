import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  Circle,
  Loader2,
  Play,
  Award
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  estimated_hours: number;
}

interface Lesson {
  id: string;
  title: string;
  slug: string;
  order_index: number;
  estimated_minutes: number;
}

interface Progress {
  lesson_id: string;
  completed: boolean;
}

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!slug) return;
      
      // Require authentication to access courses
      if (!user) {
        navigate('/auth?redirect=/courses/' + slug);
        return;
      }
      
      setLoading(true);
      
      // Fetch course
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (courseError || !courseData) {
        console.error("Error fetching course:", courseError);
        navigate("/courses");
        return;
      }

      setCourse(courseData);

      // Fetch lessons
      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("id, title, slug, order_index, estimated_minutes")
        .eq("course_id", courseData.id)
        .order("order_index");

      setLessons(lessonsData || []);

      // Fetch progress if logged in
      if (user) {
        const lessonIds = (lessonsData || []).map(l => l.id);
        if (lessonIds.length > 0) {
          const { data: progressData } = await supabase
            .from("user_progress")
            .select("lesson_id, completed")
            .eq("user_id", user.id)
            .in("lesson_id", lessonIds);

          setProgress(progressData || []);
        }
      }

      setLoading(false);
    };

    fetchCourseData();
  }, [slug, user, navigate]);

  const completedCount = progress.filter(p => p.completed).length;
  const progressPercent = lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0;

  const isLessonCompleted = (lessonId: string) => {
    return progress.some(p => p.lesson_id === lessonId && p.completed);
  };

  const getNextLesson = () => {
    for (const lesson of lessons) {
      if (!isLessonCompleted(lesson.id)) {
        return lesson;
      }
    }
    return lessons[0];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!course) {
    return null;
  }

  const categoryColors: Record<string, string> = {
    html: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    css: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    javascript: "bg-gradient-to-r from-yellow-500 to-amber-500 text-white",
  };

  const difficultyColors: Record<string, string> = {
    beginner: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
    intermediate: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    advanced: "bg-gradient-to-r from-red-500 to-rose-500 text-white",
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link 
          to="/courses" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={`${categoryColors[course.category]} border-0 px-3 py-1 font-semibold shadow-sm`}>
              {course.category.toUpperCase()}
            </Badge>
            <Badge className={`${difficultyColors[course.difficulty]} border-0 px-3 py-1 font-semibold shadow-sm`}>
              {course.difficulty}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            {course.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{course.estimated_hours} hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{lessons.length} lessons</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        {user && lessons.length > 0 && (
          <div className="bg-card rounded-2xl p-6 mb-8 border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Your Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedCount} of {lessons.length} completed
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-accent rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            {/* Certificate Button */}
            {progressPercent === 100 && (
              <Button 
                asChild 
                variant="outline" 
                className="w-full gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Link to={`/courses/${slug}/certificate`}>
                  <Award className="w-5 h-5" />
                  Get Your Certificate
                </Link>
              </Button>
            )}
          </div>
        )}

        {/* Start/Continue Button */}
        {lessons.length > 0 && (
          <Button 
            asChild 
            size="lg" 
            className="rounded-full mb-10 w-full sm:w-auto"
          >
            <Link to={`/courses/${slug}/lessons/${getNextLesson()?.slug}`}>
              <Play className="w-5 h-5 mr-2" />
              {completedCount > 0 ? "Continue Learning" : "Start Course"}
            </Link>
          </Button>
        )}

        {/* Lessons List */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold mb-4">Course Content</h2>
          
          {lessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            
            return (
              <Link
                key={lesson.id}
                to={`/courses/${slug}/lessons/${lesson.slug}`}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:bg-muted/50 ${
                  completed 
                    ? 'border-accent/30 bg-accent/5' 
                    : 'border-border/50 bg-card'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  completed 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {completed ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="font-medium">{index + 1}</span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium truncate ${completed ? 'text-muted-foreground' : ''}`}>
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lesson.estimated_minutes} min
                  </p>
                </div>
                
                {completed && (
                  <Badge variant="secondary" className="flex-shrink-0">
                    Completed
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>

        {lessons.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No lessons available yet. Check back soon!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;

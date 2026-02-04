import { Link } from "react-router-dom";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  estimatedHours: number;
  lessonCount?: number;
  progress?: number;
}

const categoryConfig: Record<string, { bg: string; accent: string; gradient: string; icon: string }> = {
  html: { 
    bg: "from-orange-500/20 to-orange-600/20", 
    accent: "text-orange-600 dark:text-orange-400",
    gradient: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900",
    icon: "🌐"
  },
  css: { 
    bg: "from-blue-500/20 to-blue-600/20", 
    accent: "text-blue-600 dark:text-blue-400",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
    icon: "🎨"
  },
  javascript: { 
    bg: "from-yellow-500/20 to-yellow-600/20", 
    accent: "text-yellow-600 dark:text-yellow-400",
    gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900",
    icon: "⚡"
  },
};

const difficultyColors: Record<string, string> = {
  beginner: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-sm",
  intermediate: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm",
  advanced: "bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-sm",
};

const CourseCard = ({
  title,
  slug,
  description,
  category,
  difficulty,
  estimatedHours,
  lessonCount = 0,
  progress,
}: CourseCardProps) => {
  const config = categoryConfig[category] || categoryConfig.html;

  return (
    <Link 
      to={`/courses/${slug}`} 
      className="block group h-full"
    >
      <article className="bg-card rounded-3xl overflow-hidden h-full border border-border shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-accent/50 flex flex-col">
        {/* Thumbnail/Hero Section */}
        <div className={`relative h-48 ${config.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br ${config.bg} opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl opacity-20 group-hover:scale-110 transition-transform duration-300">
              {config.icon}
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute top-4 right-4">
            <Badge className={`${difficultyColors[difficulty]} border-0 px-3 py-1 font-semibold text-xs uppercase tracking-wide`}>
              {difficulty}
            </Badge>
          </div>

          {/* Progress indicator */}
          {progress !== undefined && progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category tag */}
          <div className="mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider ${config.accent}`}>
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{estimatedHours}h</span>
              </div>
              {lessonCount > 0 && (
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">{lessonCount} lessons</span>
                </div>
              )}
            </div>

            {/* Arrow indicator */}
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CourseCard;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Code2, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">CodeCraft</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              to="/courses" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                isActive('/courses') ? 'bg-muted' : 'hover:bg-muted/60'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/certifications" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                isActive('/certifications') ? 'bg-muted' : 'hover:bg-muted/60'
              }`}
            >
              Certifications
            </Link>
            {user && (
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                  isActive('/dashboard') ? 'bg-muted' : 'hover:bg-muted/60'
                }`}
              >
                Dashboard
              </Link>
            )}
            <Link 
              to="/git-github" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                isActive('/git-github') ? 'bg-muted' : 'hover:bg-muted/60'
              }`}
            >
              Git & GitHub
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                isActive('/about') ? 'bg-muted' : 'hover:bg-muted/60'
              }`}
            >
              About
            </Link>
            <Link 
              to="/aj-studioz" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                isActive('/aj-studioz') ? 'bg-muted' : 'hover:bg-muted/60'
              }`}
            >
              AJ STUDIOZ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={signOut}
                    className="flex items-center gap-2 text-destructive"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild className="hidden md:flex rounded-full px-6">
                <Link to="/auth">Start Learning</Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 mt-2 rounded-2xl bg-card border border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link 
                to="/courses" 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/certifications" 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              {user && (
                <Link 
                  to="/dashboard" 
                  className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              <Link 
                to="/git-github" 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Git & GitHub
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/aj-studioz" 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                AJ STUDIOZ
              </Link>
              {!user && (
                <Button asChild className="rounded-full mt-2">
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Start Learning</Link>
                </Button>
              )}
              {user && (
                <Button 
                  variant="ghost" 
                  className="justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

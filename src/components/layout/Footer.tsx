import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses?category=html" className="hover:text-accent transition-colors">HTML</Link></li>
              <li><Link to="/courses?category=css" className="hover:text-accent transition-colors">CSS</Link></li>
              <li><Link to="/courses?category=javascript" className="hover:text-accent transition-colors">JavaScript</Link></li>
              <li><Link to="/certifications" className="hover:text-accent transition-colors">Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses" className="hover:text-accent transition-colors">All Courses</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/aj-studioz" className="hover:text-accent transition-colors font-neurobyte">AJ STUDIOZ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Discord</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/cc-logo.png" 
              alt="CodeCraft" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold font-serif">CodeCraft</span>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 CodeCraft. Learn to code for free.</p>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
              <p className="text-xs">Proudly backed by</p>
              <Link to="/aj-studioz" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <img 
                  src="/aj-logo.png" 
                  alt="AJ STUDIOZ" 
                  className="h-5 w-auto"
                />
                <span className="text-accent font-semibold text-xs font-neurobyte">AJ STUDIOZ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

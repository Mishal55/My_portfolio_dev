import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground">Built with</span>
            <Code2 size={16} className="text-primary" />
            <span className="text-muted-foreground">by Mishal</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mishal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
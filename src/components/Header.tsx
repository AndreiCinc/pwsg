import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Acasă' },
    { path: '/servicii', label: 'Servicii' },
    { path: '/despre', label: 'Despre' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-heading font-bold text-primary group-hover:text-primary/80 transition-colors hidden sm:inline">
              PWSG Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-paragraph text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:0747075974" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">0747 075 974</span>
            </a>
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-6 py-2 h-auto shadow-md shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Consultație
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav 
            className="lg:hidden pb-6 border-t border-border/30 pt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-paragraph text-base font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:0747075974"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-paragraph">0747 075 974</span>
              </a>
              <Button 
                asChild 
                className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg w-full mt-2 py-3 h-auto shadow-md shadow-accent/20"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                  Consultație gratuită
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-heading font-bold hover:opacity-90 transition-opacity">
            PWSG Group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base hover:text-accent transition-colors ${
                  isActive(link.path) ? 'text-accent font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0747075974" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-paragraph">0747 075 974</span>
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Consultație gratuită</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/80 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-base hover:text-accent transition-colors ${
                    isActive(link.path) ? 'text-accent font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:0747075974"
                className="flex items-center gap-2 text-base hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-paragraph">0747 075 974</span>
              </a>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Consultație gratuită
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

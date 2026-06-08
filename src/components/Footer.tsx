import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">PWSG Group</h3>
            <p className="font-paragraph text-sm text-primary-foreground/80 mb-4">
              Servicii complete pentru proprietatea ta în Cluj-Napoca. De la curățenie profesională până la administrare regim hotelier.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Link-uri rapide</h4>
            <ul className="space-y-2 font-paragraph text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="hover:text-accent transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/despre" className="hover:text-accent transition-colors">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 font-paragraph text-sm text-primary-foreground/80">
              <li>Administrare Regim Hotelier</li>
              <li>Curățenie Profesională</li>
              <li>Amenajări Spații Verzi</li>
              <li>Spălare sub Presiune</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 font-paragraph text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Cluj-Napoca, România</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:0747075974" className="hover:text-accent transition-colors">
                  0747 075 974
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">Disponibili 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-paragraph text-sm text-primary-foreground/80">
            © 2026 annoying-wix-sync-flow.base44.app. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

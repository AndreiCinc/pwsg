import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F3C5A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#3DAA3C] flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-heading font-bold">PWSG Group</span>
            </div>
            <p className="font-paragraph text-sm text-white/75 mb-6 leading-relaxed">
              Servicii complete pentru proprietatea ta în Cluj-Napoca. De la curățenie profesională până la administrare regim hotelier.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#3DAA3C] flex items-center justify-center transition-all duration-300 text-white/70 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#3DAA3C] flex items-center justify-center transition-all duration-300 text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#3DAA3C] flex items-center justify-center transition-all duration-300 text-white/70 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-6 text-white">Link-uri rapide</h4>
            <ul className="space-y-3 font-paragraph text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#3DAA3C] transition-colors duration-300">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="text-white/70 hover:text-[#3DAA3C] transition-colors duration-300">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-white/70 hover:text-[#3DAA3C] transition-colors duration-300">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#3DAA3C] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-6 text-white">Servicii principale</h4>
            <ul className="space-y-3 font-paragraph text-sm text-white/70">
              <li className="hover:text-[#3DAA3C] transition-colors duration-300 cursor-pointer">Administrare Regim Hotelier</li>
              <li className="hover:text-[#3DAA3C] transition-colors duration-300 cursor-pointer">Curățenie Profesională</li>
              <li className="hover:text-[#3DAA3C] transition-colors duration-300 cursor-pointer">Amenajări Spații Verzi</li>
              <li className="hover:text-[#3DAA3C] transition-colors duration-300 cursor-pointer">Spălare sub Presiune</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 font-paragraph text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#3DAA3C]" />
                <span className="text-white/70">Cluj-Napoca, România</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#3DAA3C]" />
                <a href="tel:0747075974" className="text-white/70 hover:text-[#3DAA3C] transition-colors duration-300">
                  0747 075 974
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#3DAA3C]" />
                <a href="mailto:info@pwsggroup.ro" className="text-white/70 hover:text-[#3DAA3C] transition-colors duration-300">
                  info@pwsggroup.ro
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-[#3DAA3C]" />
                <span className="text-white/70">Disponibili 24/7</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-6 text-white">Rămâi informat</h4>
            <p className="font-paragraph text-sm text-white/70 mb-4">Abonează-te la newsletter-ul nostru pentru ultimele noutăți.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email-ul tău" 
                className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 font-paragraph text-sm focus:outline-none focus:border-[#3DAA3C] transition-colors duration-300"
              />
              <button className="px-4 py-2.5 rounded-lg bg-[#3DAA3C] hover:bg-[#3DAA3C]/90 text-white font-paragraph text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#3DAA3C]/30">
                Abonează-te
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-paragraph text-sm text-white/60">
            © 2026 PWSG Group. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 font-paragraph text-sm text-white/60">
            <a href="#" className="hover:text-[#3DAA3C] transition-colors duration-300">Politica de confidențialitate</a>
            <a href="#" className="hover:text-[#3DAA3C] transition-colors duration-300">Termeni și condiții</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

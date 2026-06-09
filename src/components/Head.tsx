export const Head = () => {
  return (

  );
};
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO = "https://media.base44.com/images/public/6a22cb9fdee4197bc1a93918/553855345_Designfrtitlu.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Acasă' },
    { to: '/servicii', label: 'Servicii' },
    { to: '/administrare-airbnb', label: 'Regim Hotelier' },
    { to: '/despre', label: 'Despre noi' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Fonts */}
        <link rel="preconnect" href="https://static.parastorage.com" />
      </>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="PWSG Group" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors hover:text-[#3DAA3C] ${
                isActive(to)
                  ? 'text-[#3DAA3C] border-b-2 border-[#3DAA3C] pb-0.5'
                  : 'text-[#1F3C5A]'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+40747075974"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:brightness-110"
            style={{ backgroundColor: '#3DAA3C' }}
          >
            0747 075 974
          </a>
        </div>

        <button className="md:hidden text-[#1F3C5A]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                isActive(to) ? 'text-[#3DAA3C]' : 'text-[#1F3C5A] hover:text-[#3DAA3C]'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+40747075974"
            className="mt-3 block text-center py-3 rounded-lg font-semibold text-white text-sm"
            style={{ backgroundColor: '#3DAA3C' }}
          >
            Sună acum: 0747 075 974
          </a>
        </div>
      )}
    </nav>
  );
}

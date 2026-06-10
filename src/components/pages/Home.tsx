import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Image } from '@/components/ui/image';
import { CheckCircle, ChevronRight, Clock, MessageCircle, Shield, Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMG = "https://static.wixstatic.com/media/88f881_a3a976e03c9544239af781068a3bbde1~mv2.jpg/v1/fill/w_1760,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/88f881_a3a976e03c9544239af781068a3bbde1~mv2.jpg";
const CLEAN_IMG = "https://static.wixstatic.com/media/5d213c151f9a41259084a8a85041a42b.jpg/v1/fill/w_582,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/5d213c151f9a41259084a8a85041a42b.jpg";
const GREEN_IMG = "https://static.wixstatic.com/media/88f881_20cd43317a83448fa80dcf358fa07a44~mv2.png/v1/fill/w_582,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/88f881_20cd43317a83448fa80dcf358fa07a44~mv2.png";
const PRESSURE_IMG = "https://static.wixstatic.com/media/88f881_9e1900345be841f28538fbde439dab08~mv2.jpg/v1/fill/w_582,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/88f881_9e1900345be841f28538fbde439dab08~mv2.jpg";
const AIRBNB_IMG = "https://static.wixstatic.com/media/88f881_266d2806ab7544748020b1b4f988a226~mv2.png?originWidth=768&originHeight=576";

const stats = [
  { number: '100+', label: 'Clienți mulțumiți' },
  { number: '24/7', label: 'Disponibilitate' },
  { number: '5★', label: 'Rating mediu' },
  { number: '4+ ani', label: 'Experiență în domeniu' },
];

const services = [
  {
    img: AIRBNB_IMG,
    title: 'Administrare Regim Hotelier',
    desc: 'Gestionăm complet proprietatea ta pe Airbnb, Booking.com și alte platforme. Tu încasezi, noi ne ocupăm de tot.',
    to: '/admin-airbnb',
    badge: 'NOU',
  },
  {
    img: CLEAN_IMG,
    title: 'Curățenie & Spălătorie Profesională',
    desc: 'Curățenie impecabilă pentru locuințe, proprietăți turistice și spații comerciale. Produse ecologice.',
    to: '/servicii',
    badge: null,
  },
  {
    img: GREEN_IMG,
    title: 'Amenajări Spații Verzi',
    desc: 'Întreținere gazon, tundere arbori, amenajări peisagistice și sisteme de irigare în Cluj-Napoca.',
    to: '/servicii',
    badge: null,
  },
  {
    img: PRESSURE_IMG,
    title: 'Spălare sub Presiune & Deszăpezire',
    desc: 'Curățare hidro pentru pavaje, terase, fațade. Servicii de deszăpezire rapide și eficiente.',
    to: '/servicii',
    badge: null,
  },
];

const whyUs = [
  { icon: TrendingUp, title: 'Venituri Maximizate', desc: 'Optimizăm tarifele dinamic pe toate platformele pentru ocupare și venituri maxime.' },
  { icon: Shield, title: 'Siguranță & Legalitate', desc: 'Operăm legal, cu documentație completă și poliță de asigurare pentru proprietatea ta.' },
  { icon: Clock, title: 'Disponibilitate 24/7', desc: 'Echipa noastră este disponibilă non-stop pentru proprietari și oaspeți.' },
  { icon: Users, title: 'Echipă Profesionistă', desc: 'Personal calificat, verificat și dedicat excelenței în fiecare detaliu.' },
];

const testimonials = [
  {
    text: '"De când am predat administrarea apartamentului către PWSG Group, gradul meu de ocupare a crescut cu peste 40%. Nu mă mai ocup de nimic!"',
    name: 'Andrei M.', role: 'Proprietar Cluj-Napoca', rating: 5,
  },
  {
    text: '"Curățenia și întreținerea spațiilor verzi sunt impecabile. Profesioniști adevărați, recomand cu căldură!"',
    name: 'Maria P.', role: 'Clientă fidelă', rating: 5,
  },
  {
    text: '"Mi-au transformat apartamentul într-o sursă de venit pasiv. Totul este gestionat perfect, de la check-in la curățenie."',
    name: 'Radu D.', role: 'Investitor imobiliar', rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[95vh] lg:min-h-screen flex items-start sm:items-center justify-center md:items-center pt-12 sm:pt-0">
          {/* Imaginea reală — scaled down on mobile */}
          <Image src={HERO_IMG} alt="Proprietate PWSG Group Cluj-Napoca" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center' }} />
          {/* Overlay rafinat: gradient de jos în sus, nu blochează imaginea */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(10,22,38,0.82) 0%, rgba(10,22,38,0.55) 55%, rgba(10,22,38,0.15) 100%)'
          }} />
          {/* Linie de accent verde jos */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #3DAA3C, transparent)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4 md:py-8 w-full flex items-start sm:items-center justify-center">
            <div className="max-w-xl text-center sm:text-left">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold mb-4 sm:mb-6 tracking-widest uppercase" style={{ backgroundColor: '#3DAA3C', color: '#fff' }}>
                Proprietatea ta, prioritatea noastră
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-5 drop-shadow-lg">
                Servicii complete <span style={{ color: '#3DAA3C' }}>pentru proprietatea ta</span>
                <span className="block text-xs sm:text-base md:text-2xl lg:text-3xl font-medium text-white/80 mt-2">Curățenie · Spații verzi · Regim hotelier — Cluj-Napoca</span>
              </h1>
              <p className="text-white/85 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 drop-shadow">
                De la curățenie profesională și întreținerea grădinii, până la administrarea completă a locuințelor în regim hotelier — o singură echipă pentru toate nevoile proprietății tale.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/admin-airbnb"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white transition-all hover:brightness-110 hover:shadow-2xl shadow-lg text-sm sm:text-base"
                  style={{ backgroundColor: '#3DAA3C' }}
                >
                  Descoperă serviciul <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/40747075974?text=Salut%20PWSG%20Group%2C%20sunt%20interesat%20de%20serviciile%20voastre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white backdrop-blur-sm border border-white/40 hover:bg-white/15 transition-all text-sm sm:text-base"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: 0747 075 974</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
              {stats.map(({ number, label }) => (
                <div key={label}>
                  <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#3DAA3C' }}>{number}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: '#F5F7F8' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-[#3DAA3C] font-medium text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">Ce oferim</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#1F3C5A' }}>Serviciile noastre complete</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map(({ img, title, desc, to, badge }) => (
                <Link key={title} to={to} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <Image src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#3DAA3C' }}>
                        {badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: '#1F3C5A' }}>{title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: '#3DAA3C' }}>
                      Află mai mult <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Airbnb highlight */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div>
                <p className="text-[#3DAA3C] font-medium text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">Serviciul nostru premium</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: '#1F3C5A' }}>
                  Închiriezi pe Airbnb sau Booking?<br/>
                  <span style={{ color: '#3DAA3C' }}>Noi ne ocupăm de tot.</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  Ești proprietar în Cluj-Napoca și vrei să câștigi mai mult din apartamentul tău în regim hotelier? PWSG Group preia administrarea completă — de la listare și fotografii profesionale, la comunicarea cu oaspeții, curățenie și check-out.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    'Listare și optimizare pe Airbnb, Booking.com, Travelminit',
                    'Gestionare rezervări și comunicare oaspeți 24/7',
                    'Curățenie profesională la fiecare check-out',
                    'Fotografii profesionale pentru anunț',
                    'Optimizare dinamică tarife pentru venituri maxime',
                    'Rapoarte lunare de performanță',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3DAA3C' }} />
                      <span className="text-gray-600 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/admin-airbnb"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110 text-sm sm:text-base"
                  style={{ backgroundColor: '#3DAA3C' }}
                >
                  Descoperă administrarea 360° <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <Image src={AIRBNB_IMG} alt="Administrare Airbnb Booking Cluj" className="rounded-2xl shadow-2xl w-full object-cover h-64 sm:h-80 md:h-[480px]" />
                <div className="absolute -bottom-4 sm:-bottom-5 -left-4 sm:-left-5 bg-white rounded-2xl p-4 sm:p-5 shadow-xl hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#EAF7F1' }}>
                      <TrendingUp className="w-6 h-6" style={{ color: '#3DAA3C' }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Creștere medie venituri</p>
                      <p className="text-2xl font-bold" style={{ color: '#1F3C5A' }}>+260%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: '#F5F7F8' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-[#3DAA3C] font-medium text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">De ce noi</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#1F3C5A' }}>De ce să alegi PWSG Group</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm text-center">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5" style={{ backgroundColor: '#EAF7F1' }}>
                    <Icon className="w-6 sm:w-7 h-6 sm:h-7" style={{ color: '#3DAA3C' }} />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3" style={{ color: '#1F3C5A' }}>{title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: '#1F3C5A' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Ce spun clienții noștri</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map(({ text, name, role, rating }) => (
                <div key={name} className="bg-white/10 backdrop-blur rounded-2xl p-5 sm:p-7">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-blue-100 italic leading-relaxed mb-5 text-xs sm:text-sm">{text}</p>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm">{name}</p>
                    <p className="text-[#3DAA3C] text-xs">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5" style={{ color: '#1F3C5A' }}>
              Gata să îți maximizezi veniturile?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Contactează-ne pentru o consultație gratuită. Analizăm proprietatea ta și îți spunem exact cât poți câștiga cu administrarea noastră 360°.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110 text-sm sm:text-base"
                style={{ backgroundColor: '#3DAA3C' }}
              >
                Consultație gratuită <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+40747075974"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50 text-sm sm:text-base"
                style={{ color: '#1F3C5A', borderColor: '#1F3C5A' }}
              >
                0747 075 974
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart2, Camera, CheckCircle, ChevronRight, Key, MessageCircle, Shield, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// SEO-optimized page: "Administrare Airbnb Booking Cluj-Napoca"

const steps = [
  { icon: Camera, title: 'Fotografii & Listare', desc: 'Realizăm fotografii profesionale și creăm anunțuri optimizate pe Airbnb, Booking.com, Travelminit și alte platforme relevante.' },
  { icon: BarChart2, title: 'Optimizare Tarife', desc: 'Monitorizăm piața zilnic și ajustăm tarifele dinamic pentru a maximiza gradul de ocupare și veniturile tale.' },
  { icon: MessageCircle, title: 'Comunicare Oaspeți 24/7', desc: 'Gestionăm toate mesajele, întrebările și situațiile de urgență cu oaspeții, non-stop, în orice limbă.' },
  { icon: Key, title: 'Check-in / Check-out', desc: 'Organizăm predarea și primirea cheilor, welcoming package și tot ce au nevoie oaspeții la sosire.' },
  { icon: Sparkles, title: 'Curățenie & Pregătire', desc: 'Echipa noastră de curățenie profesională pregătește proprietatea impecabil înainte de fiecare nouă rezervare.' },
  { icon: BarChart2, title: 'Raportare Lunară', desc: 'Primești lunar un raport detaliat cu veniturile, gradul de ocupare, recenziile și performanța proprietății.' },
];

const included = [
  'Listare și optimizare pe Airbnb, Booking.com, Travelminit, Vrbo',
  'Fotografii profesionale ale proprietății',
  'Gestionare completă rezervări și calendar disponibilitate',
  'Comunicare cu oaspeții 24/7 (mesaje, urgențe, recenzii)',
  'Check-in și check-out organizat (fizic sau digital)',
  'Curățenie profesională la fiecare schimbare de oaspeți',
  'Servicii de spălătorie pentru lenjerie și prosoape',
  'Optimizare dinamică tarife (revenue management)',
  'Fotografii și descrieri optimizate pentru SEO pe platforme',
  'Asigurare suplimentară pentru proprietăți turistice',
  'Documentație legală și raportări fiscale',
  'Raport lunar de performanță pentru proprietar',
];

const platforms = [
  { name: 'Airbnb', rating: '5.0 ★', color: '#FF5A5F' },
  { name: 'Booking.com', rating: '9.5 / 10', color: '#003580' },
  { name: 'Travelminit', rating: 'Top Host', color: '#3DAA3C' },
  { name: 'Vrbo', rating: 'Premier', color: '#1F3C5A' },
];

const faqs = [
  {
    q: 'Cât câștig dacă îmi administrezi apartamentul?',
    a: 'Depinde de locație, dimensiune și dotări, însă clienții noștri au înregistrat creșteri de venituri de până la 260% față de situația anterioară. Contactează-ne pentru o estimare gratuită pentru proprietatea ta.',
  },
  {
    q: 'Ce comision percepeți?',
    a: 'Lucrăm pe baza unui comision din veniturile generate. Banii din rezervări intră direct în contul tău de proprietar, iar noi facturăm comisionul separat. Nu există costuri ascunse.',
  },
  {
    q: 'Pot accesa proprietatea oricând vreau?',
    a: 'Absolut! Proprietatea rămâne a ta. Poți vizita oricând și poți bloca perioadele în care vrei să o folosești personal.',
  },
  {
    q: 'Ce se întâmplă dacă oaspeții produc daune?',
    a: 'Avem poliță de asigurare suplimentară pentru proprietăți turistice. În plus, platformele precum Airbnb oferă protecție de până la 3.000.000 USD prin programul AirCover.',
  },
  {
    q: 'Cât durează să îmi listați proprietatea?',
    a: 'În general, în 5-7 zile lucrătoare de la semnarea contractului, proprietatea ta este listată, fotografiată și activă pe toate platformele.',
  },
  {
    q: 'Oferiți servicii și în afara Clujului?',
    a: 'Momentan operăm în Cluj-Napoca și împrejurimi. Contactați-ne pentru a verifica disponibilitatea pentru zona dumneavoastră.',
  },
];

export default function AdministrareAirbnb() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
      {/* SEO Hero */}
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-widest uppercase" style={{ backgroundColor: '#EAF7F1', color: '#3DAA3C' }}>
                Cluj-Napoca · Disponibili 24/7
              </span>
              {/* H1 cu keywords principale */}
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: '#1F3C5A' }}>
                Administrare Airbnb & Booking.com în Cluj-Napoca
              </h1>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Ne ocupăm de <strong>administrarea locuințelor în regim hotelier</strong> în Cluj-Napoca. Listăm, gestionăm rezervările, facem check-in, curățenie — tu nu trebuie să faci nimic, doar să încasezi.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Clienții noștri au ajuns să câștige cu până la <strong>260% mai mult</strong> față de chiria clasică, cu un grad de ocupare mai mare și fără bătăi de cap.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: '#3DAA3C' }}
                >
                  Consultație gratuită <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+40747075974"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
                  style={{ color: '#1F3C5A', borderColor: '#1F3C5A' }}
                >
                  0747 075 974
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1F3C5A] to-[#2d5475] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Calculează venitul estimat</h3>
              <div className="space-y-4">
                {[
                  { label: 'Apartament 2 camere Cluj', old: '1.200 lei/lună', nou: '3.500+ lei/lună' },
                  { label: 'Apartament 3 camere Cluj', old: '1.800 lei/lună', nou: '5.200+ lei/lună' },
                  { label: 'Casă / Vilă Cluj', old: '2.500 lei/lună', nou: '8.000+ lei/lună' },
                ].map(({ label, old, nou }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-blue-200 text-sm mb-2">{label}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-blue-300">Fără administrare</p>
                        <p className="text-lg font-semibold text-blue-200 line-through">{old}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#3DAA3C]" />
                      <div className="text-right">
                        <p className="text-xs text-[#3DAA3C]">Cu PWSG Group</p>
                        <p className="text-xl font-bold text-white">{nou}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-blue-300 text-xs mt-4">* Estimări medii bazate pe proprietăți similare gestionate. Rezultatele pot varia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-10 border-y border-gray-100" style={{ backgroundColor: '#F5F7F8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm font-medium mb-6">Gestionăm proprietatea ta pe toate platformele majore</p>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map(({ name, rating, color }) => (
              <div key={name} className="bg-white rounded-xl px-6 py-3 shadow-sm flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-semibold text-sm" style={{ color: '#1F3C5A' }}>{name}</span>
                <span className="text-xs font-medium" style={{ color }}>{rating}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cum functioneaza */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Procesul nostru</p>
            <h2 className="text-4xl font-bold" style={{ color: '#1F3C5A' }}>Cum funcționează administrarea 360°</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">De la semnarea contractului până la primele rezervări, știi exact ce facem și în ce ordine.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-[#F5F7F8] rounded-2xl p-7 relative">
                <span className="absolute top-4 right-4 text-5xl font-black text-gray-100 select-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#EAF7F1' }}>
                  <Icon className="w-6 h-6" style={{ color: '#3DAA3C' }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: '#1F3C5A' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce include */}
      <section className="py-24" style={{ backgroundColor: '#1F3C5A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Pachet complet</p>
              <h2 className="text-4xl font-bold text-white mb-6">Ce include administrarea 360°</h2>
              <p className="text-blue-200 leading-relaxed mb-8">
                Nu mai ții evidența curățeniei, nu mai răspunzi la mesaje noaptea, nu mai coordonezi check-in-uri. Noi preluăm tot, tu primești banii la sfârșitul lunii.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110"
                style={{ backgroundColor: '#3DAA3C' }}
              >
                Solicită ofertă personalizată <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3DAA3C' }} />
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficii / Garantii */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Garanții & Beneficii</p>
            <h2 className="text-4xl font-bold" style={{ color: '#1F3C5A' }}>De ce proprietarii aleg PWSG Group</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Beneficii',
                items: [
                  'Colaborezi cu o echipă dedicată și profesionistă',
                  'Disponibilitate 24/7 pentru proprietari și oaspeți',
                  'Banii intră direct în contul tău, comisionul se plătește ulterior',
                  'Câștigi timp și bani fără efort',
                  'Prețuri competitive raportat la calitate',
                ],
              },
              {
                icon: Shield,
                title: 'Garanții',
                items: [
                  'Poliță de asigurare pentru unități turistice',
                  'Contract transparent pe 6 luni, cu opțiune de prelungire',
                  'Acces la software de rezervări pentru monitorizare',
                  'Poți vizita proprietatea oricând',
                  'Poți renunța la colaborare dacă nu ești mulțumit',
                ],
              },
              {
                icon: Star,
                title: 'Avantaje',
                items: [
                  'Consultanță privind taxele și obligațiile legale',
                  'Documentație completă din punct de vedere legal',
                  'Întreținere și supraveghere permanentă',
                  'Creșterea valorii proprietății pe piață',
                  'Vii la tine acasă ca la hotel',
                ],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#EAF7F1' }}>
                  <Icon className="w-6 h-6" style={{ color: '#3DAA3C' }} />
                </div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#1F3C5A' }}>{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#3DAA3C' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - SEO boost */}
      <section className="py-24" style={{ backgroundColor: '#F5F7F8' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Întrebări frecvente</p>
            <h2 className="text-4xl font-bold" style={{ color: '#1F3C5A' }}>Totul despre administrarea Airbnb</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-3" style={{ color: '#1F3C5A' }}>{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5" style={{ color: '#1F3C5A' }}>
            Începe să câștigi mai mult din proprietatea ta
          </h2>
          <p className="text-gray-600 mb-8">
            Sună-ne sau trimite-ne un mesaj și îți facem o estimare gratuită. Îți spunem cât poate aduce apartamentul tău și cum arată colaborarea concret.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: '#3DAA3C' }}
            >
              Consultație gratuită <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+40747075974"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
              style={{ color: '#1F3C5A', borderColor: '#1F3C5A' }}
            >
              Sună: 0747 075 974
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

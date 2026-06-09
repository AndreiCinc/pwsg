import { Image } from '@/components/ui/image';
import { Award, ChevronRight, Eye, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ABOUT_IMG = 'https://static.wixstatic.com/media/d99169_7388fedba3ab44e4ad8ffe1d05a1117b~mv2_d_4608_3072_s_4_2.jpg/v1/fill/w_900,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d99169_7388fedba3ab44e4ad8ffe1d05a1117b~mv2_d_4608_3072_s_4_2.jpg';
const CLEAN_IMG = 'https://static.wixstatic.com/media/d99169_52d1d64a2a084379a42689b9cb93866d~mv2_d_4608_3072_s_4_2.jpg/v1/fill/w_900,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d99169_52d1d64a2a084379a42689b9cb93866d~mv2_d_4608_3072_s_4_2.jpg';

const values = [
  {
    icon: Target,
    title: 'Misiunea noastră',
    desc: 'Vrem ca proprietarii din Cluj-Napoca să nu mai piardă timp cu gestionarea locuințelor. Ne ocupăm noi de tot, ei se bucură de venituri.',
  },
  {
    icon: Eye,
    title: 'Viziunea noastră',
    desc: 'Să fim firma la care apelează proprietarii din Cluj când vor să scoată mai mult dintr-un apartament sau să aibă curtea îngrijită fără bătăi de cap.',
  },
  {
    icon: Heart,
    title: 'Valorile noastre',
    desc: 'Suntem corecți, punctuali și deschiși. Spunem mereu cum stau lucrurile și tratăm fiecare proprietate cu aceeași grijă.',
  },
  {
    icon: Award,
    title: 'Calitate garantată',
    desc: 'Folosim echipamente profesionale și produse certificate. Dacă ceva nu e bine, remediem fără discuții.',
  },
];

export default function Despre() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-10 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Cine suntem</p>
              <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ color: '#1F3C5A' }}>
                Partenerul tău de încredere în Cluj-Napoca
              </h1>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                PWSG Group este o firmă din Cluj-Napoca care se ocupă cu <strong>administrarea locuințelor în regim hotelier</strong>, curățenie profesională, spălătorie, amenajări spații verzi și spălare sub presiune.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Ne-am extins treptat ca să acoperim tot ce are nevoie un proprietar: listare pe Airbnb și Booking.com, curățenie după fiecare oaspete, întreținerea curții și nu numai.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110"
                style={{ backgroundColor: '#3DAA3C' }}
              >
                Contactează-ne <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <Image src={ABOUT_IMG} alt="Echipa PWSG Group Cluj" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24" style={{ backgroundColor: '#F5F7F8' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Valorile noastre</p>
              <h2 className="text-4xl font-bold" style={{ color: '#1F3C5A' }}>Ce ne definește</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#EAF7F1' }}>
                    <Icon className="w-7 h-7" style={{ color: '#3DAA3C' }} />
                  </div>
                  <h3 className="text-base font-semibold mb-3" style={{ color: '#1F3C5A' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Povestea */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image src={CLEAN_IMG} alt="Curățenie profesională PWSG" className="rounded-2xl shadow-xl w-full object-cover h-[420px]" />
            </div>
            <div>
              <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Povestea noastră</p>
              <h2 className="text-3xl font-bold mb-5" style={{ color: '#1F3C5A' }}>De la curățenie la administrare completă</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Am început cu servicii de curățenie și amenajare spații verzi în Cluj-Napoca. În timp, tot mai mulți clienți ne-au întrebat dacă ne putem ocupa și de apartamentele lor pe Airbnb sau Booking.com.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Așa am ajuns să oferim și administrare completă: fotografii, listare, comunicare cu oaspeții, curățenie după fiecare check-out și tot ce mai apare pe parcurs.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Acum lucrăm cu zeci de proprietari din Cluj care câștigă mai bine din apartamentele lor fără să fie nevoiți să se implice zilnic.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20" style={{ backgroundColor: '#1F3C5A' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '100+', label: 'Clienți mulțumiți' },
                { number: '5★', label: 'Rating mediu Airbnb' },
                { number: '24/7', label: 'Disponibilitate' },
                { number: '360°', label: 'Administrare completă' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p className="text-4xl font-bold mb-2" style={{ color: '#3DAA3C' }}>{number}</p>
                  <p className="text-blue-200 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-5" style={{ color: '#1F3C5A' }}>Hai să colaborăm</h2>
            <p className="text-gray-500 mb-8">Sună-ne sau trimite-ne un mesaj și îți spunem concret ce putem face pentru proprietatea ta.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: '#3DAA3C' }}
            >
              Contactează-ne <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

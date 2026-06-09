import { Image } from '@/components/ui/image';
import { CheckCircle, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Curățenie & Întreținere Profesională în Cluj-Napoca',
    badge: '⭐ Cel mai solicitat',
    img: 'https://static.wixstatic.com/media/5d213c151f9a41259084a8a85041a42b.jpg/v1/fill/w_582,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/5d213c151f9a41259084a8a85041a42b.jpg',
    desc: 'Oferim servicii de curățenie de înaltă calitate pentru locuințe, proprietăți în regim hotelier, birouri și spații comerciale. Fie că ai nevoie de curățenie periodică, generală sau post-renovare, echipa noastră este pregătită.',
    features: [
      'Curățenie generală și de întreținere periodică',
      'Curățenie post-renovare și post-construcție',
      'Curățenie pentru proprietăți Airbnb / Booking la fiecare check-out',
      'Dezinfecție profesională cu produse certificate',
      'Spații industriale, parcări și zone speciale',
      'Curățenie birouri și spații comerciale',
    ],
  },
  {
    title: 'Servicii de Spălătorie Cluj-Napoca',
    badge: '🚀 Colectare la domiciliu',
    img: 'https://static.wixstatic.com/media/88f881_266d2806ab7544748020b1b4f988a226~mv2.png?originWidth=768&originHeight=576',
    desc: 'Servicii complete de spălătorie și călcătorie pentru lenjerie de pat, prosoape, perdele și orice textile. Ideal pentru proprietăți în regim hotelier care necesită schimburi frecvente de lenjerie.',
    features: [
      'Spălare, uscare și călcare lenjerie de pat',
      'Prosoape și textile pentru proprietăți turistice',
      'Tratamente speciale pentru pete dificile',
      'Serviciu rapid pentru proprietăți Airbnb',
      'Ambalare și etichetare profesională',
    ],
  },
  {
    title: 'Amenajări Spații Verzi Cluj-Napoca',
    badge: '🌿 Sezon activ',
    img: 'https://static.wixstatic.com/media/88f881_20cd43317a83448fa80dcf358fa07a44~mv2.png/v1/fill/w_582,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/88f881_20cd43317a83448fa80dcf358fa07a44~mv2.png',
    desc: 'Curtea ta din Cluj-Napoca merită mai mult! Oferim servicii complete de amenajare și întreținere a spațiilor verzi, de la gazon și arbori decorativi la sisteme de irigare și pavaje.',
    features: [
      'Tuns și întreținere gazon regulată',
      'Tundere și modelare arbori, arbuști, gard viu',
      'Amenajări peisagistice personalizate',
      'Instalare și întreținere sisteme de irigare',
      'Tratamente fitosanitare sezoniere',
      'Plantări și reamenajări complete',
    ],
  },
  {
    title: 'Spălare cu Apă sub Presiune Cluj-Napoca',
    badge: null,
    img: 'https://static.wixstatic.com/media/88f881_9e1900345be841f28538fbde439dab08~mv2.jpg/v1/fill/w_582,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/88f881_9e1900345be841f28538fbde439dab08~mv2.jpg',
    desc: 'Curățăm eficient pavaje, terase, fațade, garduri și orice suprafețe exterioare cu echipamente profesionale de înaltă presiune. Rezultate spectaculoase în timp record.',
    features: [
      'Curățare pavaje, alei și terase',
      'Spălare fațade clădiri și garduri',
      'Curățare acoperișuri și jgheaburi',
      'Îndepărtare mușchi, alge și depuneri',
      'Spălare parcări și spații industriale',
      'Tratament hidrofob după curățare',
    ],
  },
  {
    title: 'Deszăpezire Cluj-Napoca',
    badge: '❄️ Contracte sezoniere',
    img: 'https://static.wixstatic.com/media/656345a4b3cc41e98c007cebf2a8a0e4.jpg/v1/fill/w_582,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/656345a4b3cc41e98c007cebf2a8a0e4.jpg',
    desc: 'Servicii rapide și eficiente de deszăpezire pentru proprietăți rezidențiale, comerciale și industriale din Cluj-Napoca. Intervenție promptă chiar și în condiții meteorologice extreme.',
    features: [
      'Deszăpezire manuală și mecanizată',
      'Intervenție rapidă în aceeași zi',
      'Împrăștiere materiale antiderapante',
      'Contracte sezoniere avantajoase',
      'Alei de acces, parcări și curți',
      'Disponibilitate 24/7 în sezonul de iarnă',
    ],
  },
];

export default function Servicii() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-10 pb-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Cluj-Napoca · Disponibili 24/7</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1F3C5A' }}>Servicii Profesionale în Cluj-Napoca</h1>
            <p className="text-gray-500 leading-relaxed text-lg mb-6">
              De la curățenie și spălătorie profesională, la îngrijirea spațiilor verzi și deszăpezire. O singură echipă de încredere pentru toate nevoile proprietății tale din
              <br />Cluj-Napoca.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+40747075974"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110 shadow-md"
                style={{ backgroundColor: '#3DAA3C' }}
              >
                <Phone className="w-4 h-4" /> Sună acum: 0747 075 974
              </a>
              <Link
                to="/admin-airbnb"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border-2 transition-all hover:bg-gray-50"
                style={{ color: '#1F3C5A', borderColor: '#1F3C5A' }}
              >
                Administrare Airbnb/Booking <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <div>
          {services.map((service, i) => (
            <section
              key={service.title}
              className="py-20"
              style={{ backgroundColor: i % 2 === 0 ? '#F5F7F8' : '#FFFFFF' }}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}>
                  <div className={i % 2 !== 0 ? '[direction:ltr]' : ''}>
                    <Image src={service.img} alt={service.title} className="rounded-2xl shadow-xl w-full object-cover h-[380px]" />
                  </div>
                  <div className={i % 2 !== 0 ? '[direction:ltr]' : ''}>
                    {service.badge && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: '#EAF7F1', color: '#3DAA3C' }}>
                        {service.badge}
                      </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#1F3C5A' }}>
                      {service.title.replace(' Cluj-Napoca', '')}<br />Cluj-Napoca
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-7">{service.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3DAA3C' }} />
                          <span className="text-gray-600 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110"
                        style={{ backgroundColor: '#3DAA3C' }}
                      >
                        Solicită ofertă gratuită <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="tel:+40747075974"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border-2 transition-all hover:bg-gray-50"
                        style={{ color: '#1F3C5A', borderColor: '#1F3C5A' }}
                      >
                        <Phone className="w-4 h-4" /> Sună direct
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: '#1F3C5A' }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Hai să discutăm despre proprietatea ta!</h2>
            <p className="text-blue-200 mb-2">Suntem disponibili 24/7 pentru o consultație gratuită.</p>
            <p className="text-[#3DAA3C] font-semibold text-lg mb-8">Răspundem în mai puțin de 1 oră.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+40747075974"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:brightness-110 shadow-lg text-lg"
                style={{ backgroundColor: '#3DAA3C' }}
              >
                <Phone className="w-5 h-5" /> 0747 075 974
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
              >
                Trimite un mesaj <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

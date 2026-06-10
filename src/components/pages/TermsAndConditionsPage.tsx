import { ChevronRight, Shield, Lock, FileText, AlertCircle, CheckCircle2, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TermsAndConditionsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');

  const sections = [
    {
      id: 'intro',
      title: '1. Introducere și Acceptare',
      icon: FileText,
      content: `Acești Termeni și Condiții (denumiți în continuare "Termenii") reglementează utilizarea serviciilor oferite de PWSG Group ("Compania", "noi", "nostru"). Prin accesarea și utilizarea site-ului nostru, precum și prin utilizarea oricăruia dintre serviciile noastre, voi acceptați în totalitate acești Termeni. Dacă nu sunteți de acord cu oricare dintre prevederile acestor Termeni, vă rugăm să nu utilizați serviciile noastre.`
    },
    {
      id: 'services',
      title: '2. Descrierea Serviciilor',
      icon: Shield,
      content: `PWSG Group oferă o gamă completă de servicii de management al proprietăților, inclusiv:
• Administrarea locuințelor în regim hotelier (Airbnb, Booking.com)
• Servicii de curățenie profesională
• Amenajări și întreținere spații verzi
• Spălare sub presiune și servicii de curățare
• Consultanță și suport pentru proprietari

Serviciile sunt oferite în Cluj-Napoca și zonele limitrofe. Descrierile detaliate ale fiecărui serviciu sunt disponibile pe site-ul nostru.`
    },
    {
      id: 'obligations',
      title: '3. Obligațiile Clientului',
      icon: CheckCircle2,
      content: `Ca și client al PWSG Group, voi sunteți responsabil pentru:
• Furnizarea de informații corecte și complete la momentul contractării
• Menținerea comunicării regulate cu echipa noastră
• Asigurarea accesului la proprietate pentru prestarea serviciilor
• Plata facturilor în termenele stabilite
• Respectarea legislației locale și a regulamentelor aplicabile
• Informarea noastră cu privire la orice schimbări în situația proprietății`
    },
    {
      id: 'payment',
      title: '4. Condiții de Plată',
      icon: Clock,
      content: `• Facturile sunt emise lunar și trebuie plătite în termenul de 5 zile de la data emiterii
• Metodele de plată acceptate sunt: transfer bancar, card de credit/debit
• Întârzierile la plată vor atrage o penalizare de 0,5% pe zi
• Serviciile pot fi suspendate dacă plata nu este efectuată în termenul stabilit
• Prețurile sunt în lei românesc și includ TVA, dacă nu se specifică altfel
• Orice modificare de preț va fi comunicată cu cel puțin 30 de zile înainte`
    },
    {
      id: 'liability',
      title: '5. Limitarea Răspunderii',
      icon: AlertCircle,
      content: `PWSG Group nu este responsabilă pentru:
• Daune cauzate de forță majoră (dezastre naturale, pandemii, etc.)
• Pierderi indirecte, incidentale sau consecutive
• Daune cauzate de nerespectarea instrucțiunilor noastre
• Pagube materiale cauzate de terți
• Pierderi de venituri din cauze externe

Răspunderea noastră totală nu va depăși valoarea serviciilor plătite în ultimele 3 luni.`
    },
    {
      id: 'termination',
      title: '6. Rezilierea Contractului',
      icon: FileText,
      content: `• Orice parte poate rezilia contractul cu notificare scrisă de 30 de zile
• Rezilierea imediată este posibilă în caz de nerespectare gravă a obligațiilor
• La rezilierea contractului, clientul rămâne responsabil pentru serviciile prestate
• Orice depozite de garanție vor fi returnate în termen de 15 zile după rezilierea contractului
• Clientul trebuie să asigure accesul la proprietate pentru finalizarea serviciilor`
    },
    {
      id: 'confidentiality',
      title: '7. Confidențialitate și Protecția Datelor',
      icon: Lock,
      content: `• Informațiile personale ale clienților sunt protejate conform GDPR
• Nu vom divulga informații despre proprietate sau clienți terților
• Datele sunt stocate în siguranță și accesate doar de personalul autorizat
• Clienții au dreptul de acces, rectificare și ștergere a datelor personale
• Pentru mai multe detalii, consultați Politica noastră de Confidențialitate`
    },
    {
      id: 'insurance',
      title: '8. Asigurări și Responsabilitate',
      icon: Shield,
      content: `• PWSG Group deține asigurări de răspundere civilă profesională
• Clienții sunt responsabili pentru asigurarea proprietății lor
• Echipa noastră va lua măsuri rezonabile pentru protejarea proprietății
• Orice daună trebuie raportată în termen de 24 de ore
• Investigațiile vor fi efectuate conform procedurilor noastre standard`
    },
    {
      id: 'modifications',
      title: '9. Modificări ale Termenilor',
      icon: FileText,
      content: `• Acești Termeni pot fi modificați oricând de către PWSG Group
• Modificările vor fi comunicate cu cel puțin 15 zile înainte de intrarea în vigoare
• Continuarea utilizării serviciilor după notificare constituie acceptarea noilor termeni
• Versiunea curentă a Termenilor este întotdeauna disponibilă pe site-ul nostru`
    },
    {
      id: 'disputes',
      title: '10. Rezolvarea Litigiilor',
      icon: AlertCircle,
      content: `• Orice dispută va fi rezolvată mai întâi prin negociere directă
• Dacă negocierea eșuează, litigiile vor fi soluționate prin mediere
• Dacă medierea nu reușește, litigiile vor fi adresate instanțelor competente din Cluj-Napoca
• Acești Termeni sunt reglementați de legea României
• Ambele părți acceptă jurisdicția instanțelor din Cluj-Napoca`
    },
    {
      id: 'contact',
      title: '11. Contact și Suport',
      icon: Phone,
      content: `Pentru orice întrebări sau reclamații privind acești Termeni:
• Email: info@pwsggroup.ro
• Telefon: 0747 075 974
• Adresă: Cluj-Napoca, România
• Disponibilitate: 24/7 pentru urgențe

Răspunsurile la întrebări vor fi furnizate în termen de 24-48 de ore.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <section className="bg-white border-b border-border/20">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm font-paragraph text-foreground/60">
              <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-semibold">Termeni și Condiții</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pt-16 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-xs uppercase tracking-widest">Informații Legale</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
                Termeni și Condiții
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-paragraph leading-relaxed mb-8">
                Citiți cu atenție termenii și condițiile care reglementează utilizarea serviciilor PWSG Group. Suntem transparenți și dornim ca fiecare client să înțeleagă pe deplin obligațiile și drepturile sale.
              </p>
              <p className="text-sm text-foreground/50 font-paragraph">
                📅 Ultima actualizare: 10 iunie 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-white border-b border-border/30">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-8">Cuprins</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setExpandedSection(section.id)}
                    variants={itemVariants}
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-accent/10 transition-all duration-300 border border-border/20 hover:border-accent/30 text-left"
                  >
                    <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-paragraph text-sm text-foreground/70 group-hover:text-primary transition-colors">
                      {section.title}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {sections.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSection === section.id;
                return (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    variants={itemVariants}
                    className="scroll-mt-24"
                  >
                    <button
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === section.id ? null : section.id
                        )
                      }
                      className="w-full group flex items-start justify-between p-6 rounded-xl border border-border/30 hover:border-accent/50 bg-white hover:bg-accent/5 transition-all duration-300 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-primary group-hover:text-accent transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      >
                        <ChevronRight className="w-5 h-5 text-accent" />
                      </div>
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 p-6 bg-secondary/50 rounded-xl border border-border/20"
                      >
                        <p className="font-paragraph text-foreground/80 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    Notă Importantă
                  </h3>
                  <p className="font-paragraph text-foreground/80 leading-relaxed mb-4">
                    Acești Termeni și Condiții sunt valabili pentru toate serviciile oferite de PWSG Group. Prin utilizarea serviciilor noastre, confirmați că ați citit și acceptat integral acești termeni. Dacă aveți întrebări sau nelămuriri, vă rugăm să ne contactați înainte de a utiliza serviciile.
                  </p>
                  <p className="font-paragraph text-sm text-foreground/60 p-4 bg-secondary/50 rounded-lg">
                    ✓ Versiunea curentă a acestor termeni a intrat în vigoare pe 10 iunie 2026 și va rămâne valabilă până la o nouă actualizare.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Ai întrebări?
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto font-paragraph leading-relaxed">
                Contactează-ne și vom clarifica orice nelamuriri privind termenii și condițiile noastre. Echipa noastră este disponibilă 24/7 pentru a te ajuta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Contactează-ne <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0747075974"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-accent bg-accent/10 hover:bg-accent/20 border border-accent/30 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" /> 0747 075 974
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

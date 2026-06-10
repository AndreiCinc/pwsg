import { ChevronRight, Shield, Lock, FileText, AlertCircle, Cookie, Eye, Database, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');

  const sections = [
    {
      id: 'intro',
      title: '1. Introducere și Scop',
      icon: FileText,
      content: `Această Politică de Confidențialitate (denumită în continuare "Politica") descrie modul în care PWSG Group ("Compania", "noi", "nostru") colectează, utilizează, stochează și protejează datele personale ale clienților, vizitatorilor și altor persoane care interacționează cu serviciile noastre.

Suntem angajați să protejezi confidențialitatea și securitatea datelor tale personale. Această politică explică practicile noastre de confidențialitate și drepturile tale conform Regulamentului General privind Protecția Datelor (GDPR) și legislației române aplicabile.

Prin utilizarea site-ului nostru și a serviciilor noastre, consimți la colectarea și utilizarea datelor personale conform acestei politici.`
    },
    {
      id: 'data-collection',
      title: '2. Datele Personale pe Care le Colectăm',
      icon: Database,
      content: `Colectăm următoarele categorii de date personale:

A. INFORMAȚII DE IDENTIFICARE:
• Nume complet
• Adresă de email
• Număr de telefon
• Adresa proprietății
• Informații despre proprietate (tip, dimensiune, locație)

B. INFORMAȚII DE CONTACT:
• Adresă poștală
• Numere de telefon suplimentare
• Preferințe de comunicare

C. INFORMAȚII FINANCIARE:
• Date bancare pentru plăți
• Informații despre facturare
• Istoricul tranzacțiilor

D. INFORMAȚII TEHNICE:
• Adresa IP
• Tipul și versiunea browserului
• Sistemul de operare
• Pagini vizitate și timp petrecut
• Referrer-ul paginii

E. INFORMAȚII DESPRE UTILIZARE:
• Serviciile solicitate
• Data și ora accesării
• Interacțiuni cu site-ul nostru

F. INFORMAȚII SUPLIMENTARE:
• Fotografii ale proprietății (dacă sunt furnizate)
• Documente relevante pentru servicii
• Comunicări și corespondență`
    },
    {
      id: 'data-usage',
      title: '3. Cum Utilizăm Datele Tale',
      icon: Zap,
      content: `Utilizăm datele personale colectate pentru următoarele scopuri:

A. PRESTAREA SERVICIILOR:
• Furnizarea serviciilor de management al proprietăților
• Comunicare cu privire la serviciile contractate
• Facturare și procesare plăți
• Gestionarea contractelor și acordurilor

B. COMUNICARE:
• Răspunsuri la întrebări și solicitări
• Notificări despre schimbări în servicii
• Actualizări importante și informații de urgență
• Suport pentru clienți

C. ÎMBUNĂTĂȚIRE SERVICII:
• Analiza utilizării site-ului
• Identificarea problemelor și îmbunătățiri
• Dezvoltarea de noi servicii
• Cercetare și statistici

D. CONFORMITATE LEGALĂ:
• Respectarea obligațiilor legale și reglementare
• Prevenirea fraudei și abuzurilor
• Protecția drepturilor și proprietății noastre
• Rezolvarea litigiilor

E. MARKETING (cu consimțământul tău):
• Trimitere de newsletter și oferte speciale
• Informații despre servicii noi
• Sondaje și feedback

F. SECURITATE:
• Protecția împotriva accesului neautorizat
• Detectarea și prevenirea activităților frauduloase
• Asigurarea integrității sistemelor`
    },
    {
      id: 'legal-basis',
      title: '4. Baza Legală pentru Prelucrare',
      icon: Shield,
      content: `Prelucrăm datele tale personale pe baza următoarelor baze legale conform GDPR:

A. EXECUTAREA CONTRACTULUI:
• Datele necesare pentru prestarea serviciilor contractate
• Informații de facturare și plată

B. OBLIGAȚII LEGALE:
• Conformitate cu legislația fiscală și contabilă
• Obligații de raportare la autorități
• Prevenirea fraudei și criminalității

C. INTERESE LEGITIME:
• Îmbunătățirea serviciilor și site-ului
• Comunicare cu clienții
• Protecția drepturilor și proprietății noastre
• Analiza și statistici

D. CONSIMȚĂMÂNT:
• Marketing și comunicări promiționale
• Utilizarea cookie-urilor non-esențiale
• Fotografii și materiale promiționale

E. INTERES PUBLIC:
• Respectarea reglementărilor de sănătate și siguranță
• Conformitate cu cerințele autorităților`
    },
    {
      id: 'cookies',
      title: '5. Politica Privind Cookie-urile',
      icon: Cookie,
      content: `A. CE SUNT COOKIE-URILE?

Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău care conțin informații despre navigarea ta. Acestea ajută site-urile să-și amintească preferințele și să ofere o experiență mai bună.

B. TIPURILE DE COOKIE-URI PE CARE LE UTILIZĂM:

1. COOKIE-URI ESENȚIALE (Necesare):
• Autentificare și securitate
• Preferințe de limbă și regiune
• Funcționalități de bază ale site-ului
• Protecția împotriva CSRF
• Stare sesiune
Status: Activate automat, nu pot fi dezactivate
Durata: Sesiune sau până la 1 an

2. COOKIE-URI DE PERFORMANȚĂ:
• Google Analytics - pentru analiza traficului
• Măsurarea performanței site-ului
• Identificarea problemelor tehnice
• Optimizarea vitezei de încărcare
Status: Necesită consimțământ
Durata: Până la 2 ani

3. COOKIE-URI DE FUNCȚIONALITATE:
• Memorarea preferințelor utilizatorului
• Personalizarea conținutului
• Salvarea setărilor
Status: Necesită consimțământ
Durata: Până la 1 an

4. COOKIE-URI DE MARKETING:
• Publicitate direcționată
• Urmărirea conversiilor
• Retargeting pe rețele sociale
• Analiza comportamentului utilizatorului
Status: Necesită consimțământ explicit
Durata: Până la 2 ani

5. COOKIE-URI DE TERȚI:
• Google Ads
• Facebook Pixel
• LinkedIn Insights
• Alte servicii de marketing
Status: Necesită consimțământ
Durata: Variază

C. COOKIE-URI SPECIFICE UTILIZATE:

Cookie-uri Esențiale:
• _session_id - Identificator sesiune
• _csrf_token - Protecție CSRF
• language_preference - Preferință limbă
• user_preferences - Setări utilizator

Cookie-uri Analytics:
• _ga - Google Analytics ID
• _gid - Google Analytics sesiune
• _gat - Google Analytics throttle

Cookie-uri Marketing:
• fbp - Facebook Pixel
• _fbp - Facebook Business ID
• li_buid - LinkedIn Business ID

D. CONSIMȚĂMÂNT PENTRU COOKIE-URI:

La prima vizită, vei vedea o banner de consimțământ pentru cookie-uri. Poți:
• Accepta toate cookie-urile
• Refuza cookie-urile non-esențiale
• Personaliza preferințele tale
• Modifica alegerea oricând din setări

E. DEZACTIVAREA COOKIE-URILOR:

Poți controla cookie-urile prin:
• Setările browserului tău
• Panoul de preferințe de pe site-ul nostru
• Servicii de opt-out pentru publicitate

Dezactivarea cookie-urilor poate afecta funcționalitatea site-ului.

F. COOKIE-URI TERȚI:

Utilizăm servicii terțe care pot stabili propriile cookie-uri:
• Google Analytics - https://policies.google.com/privacy
• Facebook - https://www.facebook.com/policies/cookies/
• LinkedIn - https://www.linkedin.com/legal/cookie-policy

G. DURATA STOCĂRII:

• Cookie-uri de sesiune: Șterse la închiderea browserului
• Cookie-uri persistente: Șterse după perioada specificată
• Poți șterge manual cookie-urile oricând

H. DREPTURI PRIVIND COOKIE-URILE:

• Dreptul de a fi informat despre utilizarea cookie-urilor
• Dreptul de a consimți înainte de plasarea cookie-urilor
• Dreptul de a refuza cookie-urile non-esențiale
• Dreptul de a-ți retrage consimțământul oricând`
    },
    {
      id: 'data-sharing',
      title: '6. Partajarea Datelor',
      icon: Users,
      content: `A. CU CINE PARTAJĂM DATELE TALE:

1. FURNIZORI DE SERVICII:
• Procesatori de plăți
• Furnizori de hosting
• Servicii de email marketing
• Platforme de analiză
• Servicii cloud

2. PARTENERI COMERCIALI:
• Furnizori de servicii complementare
• Platforme de rezervare (Airbnb, Booking.com)
• Servicii de curățenie și întreținere

3. AUTORITĂȚI LEGALE:
• Dacă este necesar conform legii
• Pentru protecția drepturilor noastre
• La cererea autorităților competente

4. ALTE ENTITĂȚI:
• În caz de fuziune sau achiziție
• Cu consimțământul tău explicit
• Pentru scopuri de cercetare (anonimizate)

B. PROTECȚIA DATELOR PARTAJATE:

• Contracte de prelucrare a datelor cu toți partenerii
• Standarde de securitate echivalente
• Restricții privind utilizarea datelor
• Obligații de confidențialitate

C. TRANSFER INTERNAȚIONAL:

• Datele pot fi transferate în UE/SEE
• Transfer în afara UE numai cu mecanisme de protecție
• Clauze contractuale standard
• Decizii de adecvare

D. NU VINDEM DATELE:

• Nu vândem datele personale ale clienților
• Nu partajăm pentru scop comercial direct
• Utilizare doar conform acestei politici`
    },
    {
      id: 'data-security',
      title: '7. Securitatea Datelor',
      icon: Lock,
      content: `A. MĂSURI DE SECURITATE:

1. CRIPTARE:
• SSL/TLS pentru transmisie de date
• Criptare end-to-end pentru informații sensibile
• Criptare a datelor în repaus

2. CONTROL ACCES:
• Autentificare cu parolă puternică
• Autentificare multi-factor
• Acces restricționat la personal autorizat
• Roluri și permisiuni granulare

3. MONITORIZARE:
• Monitorizare continuă a sistemelor
• Detectare anomalii
• Jurnalizare activităților
• Alertări de securitate

4. BACKUP ȘI RECUPERARE:
• Backup regulat al datelor
• Teste de recuperare
• Planuri de continuitate
• Redundanță sistemelor

5. PROTECȚIA FIZICĂ:
• Acces restricționat la servere
• Camere de supraveghere
• Sisteme de alarmă
• Protecție împotriva dezastrelor

B. RESPONSABILITĂȚI ALE UTILIZATORULUI:

• Păstrarea parolei în secret
• Logout după utilizare
• Raportarea accesului neautorizat
• Actualizarea informațiilor de contact

C. LIMITĂRI:

• Nicio metodă de transmisie este 100% sigură
• Responsabilitate limitată pentru breșe de securitate
• Notificare în caz de incident de securitate

D. INCIDENTE DE SECURITATE:

• Investigare imediată
• Notificare autorităților dacă este necesar
• Comunicare cu utilizatorii afectați
• Măsuri corective`
    },
    {
      id: 'user-rights',
      title: '8. Drepturile Tale Conform GDPR',
      icon: Eye,
      content: `Conform Regulamentului General privind Protecția Datelor (GDPR), ai următoarele drepturi:

A. DREPTUL DE ACCES:
• Dreptul de a ști ce date personale deții
• Copie a datelor în format ușor de utilizat
• Informații despre prelucrare
• Cerere: info@pwsggroup.ro

B. DREPTUL DE RECTIFICARE:
• Corectarea datelor inexacte
• Completarea datelor incomplete
• Actualizare informații de contact
• Cerere: info@pwsggroup.ro

C. DREPTUL LA ȘTERGERE:
• Ștergerea datelor în anumite condiții
• "Dreptul de a fi uitat"
• Excepții pentru obligații legale
• Cerere: info@pwsggroup.ro

D. DREPTUL DE RESTRICȚIE:
• Limitarea prelucrării datelor
• Suspendarea utilizării temporare
• Păstrarea datelor fără prelucrare
• Cerere: info@pwsggroup.ro

E. DREPTUL LA PORTABILITATE:
• Primirea datelor în format structurat
• Transfer la alt responsabil
• Datele în format machine-readable
• Cerere: info@pwsggroup.ro

F. DREPTUL DE OPOZIȚIE:
• Refuzul prelucrării pentru marketing
• Opoziție la profilare
• Opoziție la scopuri de cercetare
• Cerere: info@pwsggroup.ro

G. DREPTURI PRIVIND DECIZIILE AUTOMATIZATE:
• Dreptul de a nu fi supus deciziilor automate
• Intervenție umană
• Explicații privind deciziile
• Cerere: info@pwsggroup.ro

H. RETRAGEREA CONSIMȚĂMÂNTULUI:
• Retragere oricând
• Fără penalizări
• Ușor de realizat
• Cerere: info@pwsggroup.ro

I. DEPUNEREA UNEI PLÂNGERI:
• Dreptul de a depune plângere la autoritatea de protecție
• Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
• Fără a afecta alte căi de atac

J. EXERCITAREA DREPTURILOR:

Pentru a-ți exercita drepturile:
• Trimite o cerere scrisă la: info@pwsggroup.ro
• Include: nume, email, descrierea cererii
• Răspuns în termen de 30 de zile
• Extensie cu 60 de zile dacă necesar
• Fără taxe în general`
    },
    {
      id: 'data-retention',
      title: '9. Retenția Datelor',
      icon: Clock,
      content: `A. PERIOADELE DE RETENȚIE:

1. DATELE CLIENȚILOR ACTIVI:
• Păstrate pe toată durata contractului
• Minimum 1 an după rezilierea contractului
• Conform obligațiilor fiscale (7 ani)

2. DATELE CLIENȚILOR INACTIVI:
• Păstrate 3 ani după ultima interacțiune
• Ștergere după notificare și consimțământ
• Excepții pentru obligații legale

3. DATELE FINANCIARE:
• Păstrate 7 ani conform legislației fiscale
• Arhivare după 3 ani
• Ștergere după expirarea termenului

4. DATELE TEHNICE:
• Log-uri: 90 de zile
• Cookie-uri: Conform duratei specificate
• Backup-uri: 30 de zile

5. DATELE DE MARKETING:
• Păstrate până la retragerea consimțământului
• Ștergere la cerere
• Ștergere automată după 2 ani de inactivitate

B. CRITERII DE ȘTERGERE:

• Scopul pentru care au fost colectate nu mai este relevant
• Consimțământul a fost retras
• Opoziție la prelucrare
• Încălcarea obligațiilor legale
• Cerere de ștergere de la utilizator

C. ȘTERGERE SECURIZATĂ:

• Ștergere ireversibilă
• Suprascrierea datelor
• Distrugerea suporturilor fizice
• Certificare de ștergere

D. EXCEPȚII LA ȘTERGERE:

• Obligații legale și fiscale
• Litigii în curs
• Prevenirea fraudei
• Interese legitime
• Consimț de la utilizator`
    },
    {
      id: 'contact',
      title: '10. Contact și Responsabil cu Protecția Datelor',
      icon: AlertCircle,
      content: `A. RESPONSABIL CU PROTECȚIA DATELOR (DPO):

Dacă ai întrebări privind protecția datelor sau această politică:

Email: privacy@pwsggroup.ro
Telefon: 0747 075 974
Adresă: Cluj-Napoca, România
Disponibilitate: 24/7 pentru urgențe

B. RESPONSABIL DE PRELUCRARE:

PWSG Group
Cluj-Napoca, România
Email: info@pwsggroup.ro
Telefon: 0747 075 974

C. EXERCITAREA DREPTURILOR:

Pentru a-ți exercita drepturile GDPR:
• Trimite cerere la: privacy@pwsggroup.ro
• Include: nume, email, tip de cerere
• Răspuns în termen de 30 de zile

D. DEPUNEREA PLÂNGERILOR:

Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
Adresă: Bd. Gheorghe Magheru nr. 28-30, sector 1, București
Email: anspdcp@dataprotection.ro
Telefon: +40 21 308 34 00
Website: www.dataprotection.ro

E. ACTUALIZĂRI ALE POLITICII:

• Politica este actualizată periodic
• Notificare despre schimbări importante
• Versiunea curentă: 10 iunie 2026
• Arhiva versiunilor anterioare disponibilă la cerere

F. TIMP DE RĂSPUNS:

• Răspunsuri la întrebări: 24-48 de ore
• Răspunsuri la cereri GDPR: 30 de zile
• Urgențe: Contact imediat`
    },
    {
      id: 'third-party',
      title: '11. Servicii și Linkuri Terțe',
      icon: Users,
      content: `A. SERVICII TERȚE INTEGRATE:

1. GOOGLE ANALYTICS:
• Colectează date despre utilizare
• Politica de confidențialitate: https://policies.google.com/privacy
• Poți dezactiva: https://tools.google.com/dlpage/gaoptout

2. FACEBOOK PIXEL:
• Urmărire conversii
• Retargeting publicitar
• Politica: https://www.facebook.com/policies/cookies/

3. LINKEDIN INSIGHTS:
• Analiza comportamentului
• Publicitate direcționată
• Politica: https://www.linkedin.com/legal/cookie-policy

4. STRIPE / PAYPAL (Procesare plăți):
• Prelucrare plăți securizate
• Politica: https://stripe.com/privacy

B. LINKURI EXTERNE:

• Site-ul nostru poate conține linkuri la site-uri terțe
• Nu suntem responsabili pentru politicile lor
• Citește politica de confidențialitate a fiecărui site
• Acces pe propria ta răspundere

C. REȚELE SOCIALE:

• Linkuri la profilurile noastre pe rețele sociale
• Politici separate pentru fiecare platformă
• Datele tale sunt supuse politicilor lor

D. PROTECȚIA DATELOR:

• Verificare standarde de securitate ale partenerilor
• Contracte de prelucrare a datelor
• Audit periodic al conformității
• Notificare în caz de breșă`
    },
    {
      id: 'children',
      title: '12. Protecția Copiilor',
      icon: Shield,
      content: `A. VÂRSTA MINIMĂ:

• Serviciile noastre sunt destinate adulților
• Vârsta minimă: 18 ani
• Părinții pot contacta pentru ștergere date

B. DATELE COPIILOR:

• Nu colectăm intenționat date de la copii
• Dacă descoperim colectare accidentală, ștergem imediat
• Părinții pot cere ștergere

C. CONSIMȚĂMÂNT PARENTAL:

• Pentru copii sub 18 ani, consimțământ parental necesar
• Verificare vârstă la înregistrare
• Contactare părinților dacă necesar

D. CONTACT:

• Raportează colectare de date de copii la: privacy@pwsggroup.ro
• Ștergere imediată
• Investigare și măsuri corective`
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
              <span className="text-primary font-semibold">Politica de Confidențialitate</span>
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
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-xs uppercase tracking-widest">Protecția Datelor</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
                Politica de Confidențialitate
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-paragraph leading-relaxed mb-8">
                Confidențialitatea și securitatea datelor tale sunt prioritatea noastră. Citește cum colectăm, utilizăm și protejăm informațiile tale personale, inclusiv detalii complete despre utilizarea cookie-urilor.
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
                    Această Politică de Confidențialitate este valabilă pentru toate serviciile oferite de PWSG Group și pentru site-ul nostru. Prin utilizarea serviciilor noastre, confirmați că ați citit și acceptat integral această politică. Dacă aveți întrebări sau nelămuriri, vă rugăm să ne contactați înainte de a utiliza serviciile.
                  </p>
                  <p className="font-paragraph text-sm text-foreground/60 p-4 bg-secondary/50 rounded-lg">
                    ✓ Versiunea curentă a acestei politici a intrat în vigoare pe 10 iunie 2026 și va rămâne valabilă până la o nouă actualizare. Modificările importante vor fi comunicate prin email.
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
                Ai întrebări privind confidențialitatea?
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto font-paragraph leading-relaxed">
                Contactează-ne și vom clarifica orice nelămuriri privind protecția datelor și utilizarea cookie-urilor. Echipa noastră de protecție a datelor este disponibilă 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:privacy@pwsggroup.ro"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  privacy@pwsggroup.ro <ChevronRight className="w-4 h-4" />
                </a>
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

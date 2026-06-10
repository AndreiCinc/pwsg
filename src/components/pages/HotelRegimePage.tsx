import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HotelRegimePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-primary to-slate-800 text-white py-20">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                Regim Hotelier
              </h1>
              <p className="font-paragraph text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
                Servicii complete de management pentru proprietăți în regim hotelier
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-16 sm:py-20 bg-white">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-12 text-center">
              Ce oferim
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Gestionare Rezervări
                </h3>
                <p className="font-paragraph text-slate-600">
                  Sistem complet de management al rezervărilor cu sincronizare pe platformele majore de booking.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Curățenie și Mentenanță
                </h3>
                <p className="font-paragraph text-slate-600">
                  Servicii profesionale de curățenie între oaspeți și mentenanță preventivă a proprietății.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Rapoarte și Analize
                </h3>
                <p className="font-paragraph text-slate-600">
                  Rapoarte detaliate despre ocupare, venituri și performanța proprietății dvs.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Suport Oaspeți 24/7
                </h3>
                <p className="font-paragraph text-slate-600">
                  Asistență completă pentru oaspeți disponibilă non-stop în limba română și engleză.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Pricing Dinamic
                </h3>
                <p className="font-paragraph text-slate-600">
                  Optimizare automată a prețurilor pe baza cererii și sezonalității pentru venituri maxime.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Comunicare Oaspeți
                </h3>
                <p className="font-paragraph text-slate-600">
                  Mesaje automate și comunicare personalizată cu oaspeții înainte și după sejur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 sm:py-20 bg-slate-50">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-12 text-center">
              De ce să ne alegeți
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Experiență Dovedită
                </h3>
                <p className="font-paragraph text-slate-600 mb-6">
                  Cu ani de experiență în managementul proprietăților hoteliere, cunoaștem fiecare detaliu al industriei.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="font-paragraph text-slate-600">Gestionare eficientă a ocupării</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="font-paragraph text-slate-600">Maximizare venituri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="font-paragraph text-slate-600">Satisfacție oaspeți ridicată</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Tehnologie Modernă
                </h3>
                <p className="font-paragraph text-slate-600 mb-6">
                  Utilizăm cele mai avansate sisteme de management pentru a asigura eficiență maximă.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="font-paragraph text-slate-600">Platformă integrată și ușor de utilizat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="font-paragraph text-slate-600">Rapoarte în timp real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="font-paragraph text-slate-600">Automatizare procese</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 sm:py-20 bg-primary text-white">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Gata să vă dezvoltați afacerea?
            </h2>
            <p className="font-paragraph text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Contactați-ne astazi pentru o consultație gratuită și aflați cum putem ajuta proprietatea dvs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contactează-ne
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, TrendingUp, Users, Award, Target, Heart, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AnimatedElement: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('is-visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <div 
      ref={ref} 
      className={`${className} opacity-0 translate-y-8 transition-all duration-700 ease-out`}
    >
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Despre PWSG Group
            </h1>
            <p className="text-xl md:text-2xl font-paragraph text-primary-foreground/90 max-w-3xl mx-auto">
              Parteneri de încredere pentru proprietatea ta în Cluj-Napoca
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Cine suntem
                </h2>
                <p className="text-lg font-paragraph text-muted-foreground leading-relaxed mb-6">
                  PWSG Group este liderul în servicii complete de management proprietăți în Cluj-Napoca. Cu peste 4 ani de experiență și peste 100 de clienți mulțumiți, oferim soluții profesionale pentru curățenie, întreținere spații verzi și administrare regim hotelier.
                </p>
                <p className="text-lg font-paragraph text-muted-foreground leading-relaxed">
                  Misiunea noastră este să transformăm proprietățile clienților noștri în surse de venit pasiv, oferind servicii de cea mai înaltă calitate și disponibilitate 24/7. Operăm legal, cu documentație completă și asigurare pentru fiecare proprietate pe care o gestionăm.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Valorile noastre
              </h2>
              <p className="text-lg font-paragraph text-muted-foreground">
                Ce ne ghidează în fiecare zi
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Dedicare',
                description: 'Ne dedicăm excelenței în fiecare detaliu al serviciilor noastre.'
              },
              {
                icon: Shield,
                title: 'Încredere',
                description: 'Construim relații pe termen lung bazate pe transparență și profesionalism.'
              },
              {
                icon: Zap,
                title: 'Eficiență',
                description: 'Răspundem rapid și eficient la toate nevoile clienților noștri.'
              },
              {
                icon: Award,
                title: 'Calitate',
                description: 'Standardele noastre înalte garantează rezultate impecabile.'
              }
            ].map((value, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border group">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="font-paragraph text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                De ce să alegi PWSG Group
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'Venituri Maximizate',
                description: 'Optimizăm tarifele dinamic pe toate platformele pentru ocupare și venituri maxime. Clienții noștri văd în medie o creștere de 260% a veniturilor.'
              },
              {
                icon: Shield,
                title: 'Siguranță & Legalitate',
                description: 'Operăm legal, cu documentație completă și poliță de asigurare pentru proprietatea ta. Respectăm toate reglementările locale și naționale.'
              },
              {
                icon: Clock,
                title: 'Disponibilitate 24/7',
                description: 'Echipa noastră este disponibilă non-stop pentru proprietari și oaspeți. Răspundem imediat la orice situație de urgență.'
              },
              {
                icon: Users,
                title: 'Echipă Profesionistă',
                description: 'Personal calificat, verificat și dedicat excelenței în fiecare detaliu. Fiecare membru al echipei este instruit și certificat.'
              },
              {
                icon: Target,
                title: 'Abordare Personalizată',
                description: 'Fiecare proprietate este unică. Creăm strategii personalizate pentru a maximiza potențialul fiecărei locuințe.'
              },
              {
                icon: Award,
                title: 'Experiență Dovedită',
                description: 'Peste 4 ani de experiență și 100+ clienți mulțumiți. Rating mediu de 5 stele pe toate platformele.'
              }
            ].map((item, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border group h-full">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Rezultatele noastre vorbesc
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '100+', label: 'Clienți mulțumiți' },
              { number: '24/7', label: 'Disponibilitate' },
              { number: '5★', label: 'Rating mediu' },
              { number: '4+ ani', label: 'Experiență' }
            ].map((stat, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-base font-paragraph text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-12 shadow-xl border border-border">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Hai să colaborăm
              </h2>
              <p className="text-lg font-paragraph text-muted-foreground mb-8">
                Contactează-ne astăzi pentru o consultație gratuită și descoperă cum putem transforma proprietatea ta într-o sursă de venit pasiv.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  <Link to="/contact">Consultație gratuită</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 hover:scale-105 transition-transform border-2"
                >
                  <a href="tel:0747075974">0747 075 974</a>
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}

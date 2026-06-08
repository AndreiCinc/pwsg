import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { PropertyManagementServices } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { CheckCircle } from 'lucide-react';
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

export default function ServicesPage() {
  const [services, setServices] = useState<PropertyManagementServices[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<PropertyManagementServices>('services');
      setServices(result.items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              Serviciile noastre complete
            </h1>
            <p className="text-xl md:text-2xl font-paragraph text-primary-foreground/90 max-w-3xl mx-auto">
              Soluții profesionale pentru toate nevoile proprietății tale în Cluj-Napoca
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="min-h-[500px]">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
              </div>
            ) : services.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {services.map((service, index) => (
                  <AnimatedElement key={service._id} delay={index * 100}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card border-border">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto overflow-hidden">
                          {service.serviceImage && (
                            <Image 
                              src={service.serviceImage} 
                              alt={service.serviceName || 'Service'} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              width={400}
                            />
                          )}
                          {service.category === 'NOU' && (
                            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                              NOU
                            </div>
                          )}
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                            {service.serviceName}
                          </h3>
                          {service.tagline && (
                            <p className="text-base font-paragraph text-accent mb-4 font-semibold">
                              {service.tagline}
                            </p>
                          )}
                          {service.description && (
                            <p className="text-base font-paragraph text-muted-foreground mb-4">
                              {service.description}
                            </p>
                          )}
                          {service.benefits && (
                            <div className="space-y-2">
                              {service.benefits.split('\n').filter(b => b.trim()).map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                  <span className="text-sm font-paragraph text-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </div>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg font-paragraph text-muted-foreground">
                  Nu există servicii disponibile momentan.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-12 shadow-xl border border-border">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ai nevoie de serviciile noastre?
              </h2>
              <p className="text-lg font-paragraph text-muted-foreground mb-8">
                Contactează-ne astăzi pentru o consultație gratuită și descoperă cum putem ajuta proprietatea ta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  <Link to="/contact">Solicită consultație</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 hover:scale-105 transition-transform border-2"
                >
                  <a href="tel:0747075974">Sună acum</a>
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

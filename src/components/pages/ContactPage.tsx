import { useState, useEffect, useRef } from 'react';
import { BaseCrudService } from '@/integrations';
import { ConsultationRequests } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    propertyAddress: '',
    propertyType: '',
    numberOfBedrooms: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requestData: ConsultationRequests = {
        _id: crypto.randomUUID(),
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        propertyAddress: formData.propertyAddress,
        propertyType: formData.propertyType,
        numberOfBedrooms: formData.numberOfBedrooms ? parseInt(formData.numberOfBedrooms) : undefined,
        notes: formData.notes
      };

      await BaseCrudService.create('consultationrequests', requestData);
      
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        propertyAddress: '',
        propertyType: '',
        numberOfBedrooms: '',
        notes: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
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
              Contactează-ne
            </h1>
            <p className="text-xl md:text-2xl font-paragraph text-primary-foreground/90 max-w-3xl mx-auto">
              Solicită o consultație gratuită și descoperă potențialul proprietății tale
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedElement>
              <Card className="p-8 shadow-xl border-border bg-card">
                <CardContent className="p-0">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                    Solicită consultație gratuită
                  </h2>
                  
                  {isSuccess && (
                    <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-paragraph text-foreground font-semibold">
                          Mulțumim pentru solicitare!
                        </p>
                        <p className="font-paragraph text-muted-foreground text-sm">
                          Te vom contacta în cel mai scurt timp pentru a discuta despre proprietatea ta.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="font-paragraph text-foreground">
                        Nume complet *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Ion Popescu"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="font-paragraph text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="ion@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phoneNumber" className="font-paragraph text-foreground">
                          Telefon *
                        </Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="0747 075 974"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="propertyAddress" className="font-paragraph text-foreground">
                        Adresa proprietății *
                      </Label>
                      <Input
                        id="propertyAddress"
                        name="propertyAddress"
                        value={formData.propertyAddress}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Str. Exemplu, Nr. 10, Cluj-Napoca"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyType" className="font-paragraph text-foreground">
                          Tip proprietate *
                        </Label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                          className="mt-2 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                          <option value="">Selectează</option>
                          <option value="Apartament">Apartament</option>
                          <option value="Casă">Casă</option>
                          <option value="Vilă">Vilă</option>
                          <option value="Studio">Studio</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="numberOfBedrooms" className="font-paragraph text-foreground">
                          Număr camere
                        </Label>
                        <Input
                          id="numberOfBedrooms"
                          name="numberOfBedrooms"
                          type="number"
                          min="1"
                          value={formData.numberOfBedrooms}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes" className="font-paragraph text-foreground">
                        Mesaj / Detalii suplimentare
                      </Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="mt-2"
                        rows={4}
                        placeholder="Spune-ne mai multe despre proprietatea ta și ce servicii te interesează..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 hover:scale-105 transition-transform"
                    >
                      {isSubmitting ? 'Se trimite...' : 'Trimite solicitarea'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedElement delay={100}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                    Informații de contact
                  </h2>
                  <p className="font-paragraph text-muted-foreground mb-8">
                    Suntem aici pentru tine 24/7. Contactează-ne prin orice metodă preferată și îți vom răspunde în cel mai scurt timp.
                  </p>
                </div>
              </AnimatedElement>

              <div className="space-y-6">
                <AnimatedElement delay={200}>
                  <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Telefon</h3>
                        <a 
                          href="tel:0747075974" 
                          className="font-paragraph text-muted-foreground hover:text-accent transition-colors"
                        >
                          0747 075 974
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>

                <AnimatedElement delay={300}>
                  <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Locație</h3>
                        <p className="font-paragraph text-muted-foreground">
                          Cluj-Napoca, România
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>

                <AnimatedElement delay={400}>
                  <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Program</h3>
                        <p className="font-paragraph text-muted-foreground">
                          Disponibili 24/7
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </div>

              <AnimatedElement delay={500}>
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                      De ce să ne contactezi?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Consultație gratuită pentru proprietatea ta',
                        'Analiză detaliată a potențialului de venit',
                        'Răspuns rapid în maxim 24 de ore',
                        'Ofertă personalizată pentru nevoile tale'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="font-paragraph text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// WI-HPI
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { PropertyManagementServices } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { 
  Phone, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Leaf,
  Sparkles,
  Home,
  Droplets
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// --- Static Data (Fallback/Structure based on scraped content) ---
const statsData = [
  { value: "100+", label: "Clienți mulțumiți" },
  { value: "24/7", label: "Disponibilitate" },
  { value: "5★", label: "Rating mediu" },
  { value: "4+ ani", label: "Experiență în domeniu" }
];

const featuresData = [
  {
    icon: TrendingUp,
    title: 'Venituri Maximizate',
    description: 'Optimizăm tarifele dinamic pe toate platformele pentru ocupare și venituri maxime.'
  },
  {
    icon: ShieldCheck,
    title: 'Siguranță & Legalitate',
    description: 'Operăm legal, cu documentație completă și poliță de asigurare pentru proprietatea ta.'
  },
  {
    icon: Clock,
    title: 'Disponibilitate 24/7',
    description: 'Echipa noastră este disponibilă non-stop pentru proprietari și oaspeți.'
  },
  {
    icon: Users,
    title: 'Echipă Profesionistă',
    description: 'Personal calificat, verificat și dedicat excelenței în fiecare detaliu.'
  }
];

const testimonialsData = [
  {
    quote: "De când am predat administrarea apartamentului către PWSG Group, gradul meu de ocupare a crescut cu peste 40%. Nu mă mai ocup de nimic!",
    author: "Andrei M.",
    role: "Proprietar Cluj-Napoca"
  },
  {
    quote: "Curățenia și întreținerea spațiilor verzi sunt impecabile. Profesioniști adevărați, recomand cu căldură!",
    author: "Maria P.",
    role: "Clientă fidelă"
  },
  {
    quote: "Mi-au transformat apartamentul într-o sursă de venit pasiv. Totul este gestionat perfect, de la check-in la curățenie.",
    author: "Radu D.",
    role: "Investitor imobiliar"
  }
];

export default function HomePage() {
  const [services, setServices] = useState<PropertyManagementServices[]>([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoadingServices(true);
        const result = await BaseCrudService.getAll<PropertyManagementServices>('services', [], { limit: 4 });
        setServices(result.items);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setIsLoadingServices(false);
      }
    };

    loadServices();
  }, []);

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground selection:bg-accent/30 selection:text-primary" dir="ltr">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax feel */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(https://static.wixstatic.com/media/88f881_a3a976e03c9544239af781068a3bbde1~mv2.jpg/v1/fill/w_1760,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/88f881_a3a976e03c9544239af781068a3bbde1~mv2.jpg)' 
            }}
          />
          {/* Sophisticated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold tracking-wide uppercase">Cluj-Napoca · Disponibili 24/7</span>
              </span>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-[1.1] tracking-tight">
                Servicii complete <br/>
                <span className="text-accent">pentru proprietatea ta</span>
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-light">
                Curățenie · Spații verzi · Regim hotelier
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
                De la curățenie profesională și întreținerea grădinii, până la administrarea completă a locuințelor în regim hotelier — o singură echipă pentru toate nevoile proprietății tale.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:-translate-y-1 group"
              >
                <Link to="/servicii" className="flex items-center gap-2">
                  Descoperă serviciul
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/5 hover:bg-white/10 text-white border-white/20 text-lg px-8 py-6 h-auto rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <a href="tel:0747075974" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Sună acum: 0747 075 974
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-background relative z-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white rounded-2xl shadow-xl shadow-primary/5 p-6 md:p-10 border border-border/50"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {statsData.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center group">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Ce oferim</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Serviciile noastre complete
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50" />
          </motion.div>

          <div className="min-h-[400px]">
            {isLoadingServices ? (
              <div className="flex justify-center items-center h-64">
                <LoadingSpinner className="w-10 h-10 text-accent" />
              </div>
            ) : services.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {services.map((service, index) => (
                  <motion.div key={service._id} variants={fadeInUp} className="h-full">
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-border/50 group flex flex-col rounded-2xl">
                      <div className="relative h-56 overflow-hidden">
                        {service.serviceImage ? (
                          <Image 
                            src={service.serviceImage} 
                            alt={service.serviceName || 'Service'} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <Home className="w-12 h-12 text-muted-foreground/30" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {service.category === 'NOU' && (
                          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                            NOU
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                          {service.serviceName}
                        </h3>
                        {service.tagline && (
                          <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3">
                            {service.tagline}
                          </p>
                        )}
                        <Button 
                          asChild 
                          variant="ghost" 
                          className="w-full justify-between p-0 hover:bg-transparent hover:text-accent text-primary font-semibold mt-auto group/btn"
                        >
                          <Link to={`/servicii/${service._id}`}>
                            Află mai mult
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-2xl border border-dashed border-border">
                <p className="text-lg text-muted-foreground">
                  Nu există servicii disponibile momentan.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PREMIUM SERVICE SECTION (Split Layout) */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-6">
                Serviciul nostru premium
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Închiriezi pe Airbnb sau Booking? <br/>
                <span className="text-accent">Noi ne ocupăm de tot.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ești proprietar în Cluj-Napoca și vrei să câștigi mai mult din apartamentul tău în regim hotelier? PWSG Group preia administrarea completă — de la listare și fotografii profesionale, la comunicarea cu oaspeții, curățenie și check-out.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Listare și optimizare pe Airbnb, Booking.com, Travelminit',
                  'Gestionare rezervări și comunicare oaspeți 24/7',
                  'Curățenie profesională la fiecare check-out',
                  'Fotografii profesionale pentru anunț',
                  'Optimizare dinamică tarife pentru venituri maxime',
                  'Rapoarte lunare de performanță'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/contact">Descoperă administrarea 360°</Link>
              </Button>
            </motion.div>

            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" 
                  alt="Administrare Airbnb Booking Cluj" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Stat Badge */}
              <motion.div 
                className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-2xl border border-border/50 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">+260%</div>
                  <div className="text-sm font-medium text-muted-foreground">Creștere medie venituri</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">De ce noi</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              De ce să alegi PWSG Group
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuresData.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-border/50 group rounded-2xl">
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 rotate-3 group-hover:rotate-6">
                      <feature.icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ce spun clienții noștri
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-80" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-8 italic leading-relaxed flex-grow text-lg">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="font-heading font-bold text-white text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-white/60 font-medium">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/50 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-border/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Gata să îți maximizezi veniturile?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Contactează-ne pentru o consultație gratuită. Analizăm proprietatea ta și îți spunem exact cât poți câștiga cu administrarea noastră 360°.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 h-auto rounded-xl shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/contact">Consultație gratuită</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-primary border-primary/20 hover:bg-primary/5 text-lg px-10 py-6 h-auto rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="tel:0747075974" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  0747 075 974
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
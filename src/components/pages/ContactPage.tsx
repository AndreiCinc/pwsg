import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await BaseCrudService.create('consultationrequests', {
        _id: crypto.randomUUID(),
        fullName: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phoneNumber: form.phone,
        propertyType: form.service,
        notes: form.message,
      });
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setError('A apărut o eroare. Te rog încearcă din nou.');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-10 pb-14 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-[#3DAA3C] font-medium text-sm uppercase tracking-widest mb-3">Contactează-ne</p>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1F3C5A' }}>Hai să vorbim</h1>
            <p className="text-gray-500 leading-relaxed text-lg">
              Suntem disponibili 24/7. Contactează-ne pentru o consultație gratuită sau o ofertă personalizată.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#F5F7F8' }}>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#1F3C5A' }}>Date de contact</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Adresă', value: 'Cluj-Napoca, România', href: null },
                  { icon: Phone, label: 'Telefon', value: '0747 075 974', href: 'tel:+40747075974' },
                  { icon: Mail, label: 'Email', value: 'contact@pwsg-group.ro', href: 'mailto:contact@pwsg-group.ro' },
                  { icon: Clock, label: 'Program', value: 'Disponibili 24/7', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EAF7F1' }}>
                      <Icon className="w-5 h-5" style={{ color: '#3DAA3C' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#1F3C5A' }}>{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-500 text-sm hover:text-[#3DAA3C] transition-colors">{value}</a>
                      ) : (
                        <p className="text-gray-500 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl" style={{ backgroundColor: '#1F3C5A' }}>
                <p className="text-white font-semibold mb-2">Vrei să știi cât poți câștiga?</p>
                <p className="text-blue-200 text-sm mb-4">Îți oferim o estimare gratuită a veniturilor din Airbnb/Booking pentru proprietatea ta.</p>
                <a
                  href="tel:+40747075974"
                  className="block text-center py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110"
                  style={{ backgroundColor: '#3DAA3C' }}
                >
                  Sună acum: 0747 075 974
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#EAF7F1' }}>
                    <CheckCircle className="w-10 h-10" style={{ color: '#3DAA3C' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3C5A' }}>Mesaj trimis cu succes!</h3>
                  <p className="text-gray-500 max-w-sm">Îți mulțumim! Te vom contacta în cel mai scurt timp, de regulă în mai puțin de 24 de ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F3C5A' }}>Trimite-ne un mesaj</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1F3C5A' }}>Prenume <span className="text-red-500">*</span></label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DAA3C] focus:border-transparent"
                        placeholder="Ion" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1F3C5A' }}>Nume <span className="text-red-500">*</span></label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DAA3C] focus:border-transparent"
                        placeholder="Popescu" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1F3C5A' }}>Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DAA3C] focus:border-transparent"
                        placeholder="ion@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1F3C5A' }}>Telefon</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DAA3C] focus:border-transparent"
                        placeholder="0740 000 000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#1F3C5A' }}>Serviciu de interes</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DAA3C] focus:border-transparent bg-white">
                      <option value="">Selectează un serviciu...</option>
                      <option value="airbnb">Administrare Airbnb / Booking 360°</option>
                      <option value="curatenie">Curățenie Profesională</option>
                      <option value="spalatorie">Servicii Spălătorie</option>
                      <option value="spatii-verzi">Amenajări Spații Verzi</option>
                      <option value="presiune">Spălare sub Presiune</option>
                      <option value="deszapezire">Deszăpezire</option>
                      <option value="pachet">Pachet Complet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#1F3C5A' }}>Mesaj</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DAA3C] focus:border-transparent resize-none"
                      placeholder="Descrie ce ai nevoie sau pune-ne orice întrebare..." />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110 disabled:opacity-70"
                    style={{ backgroundColor: '#3DAA3C' }}>
                    {loading
                      ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      : <><Send className="w-4 h-4" /> Trimite mesajul</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

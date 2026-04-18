'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactForm from '@/components/ui/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphones',
    details: ['+237 697 849 968', '+237 674 655 427', '+237 679 103 116'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['infos@csbie.org'],
    color: 'bg-csbie-gold/10 text-csbie-gold',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    details: ['Mini Prix Bastos, Yaoundé', 'BP: 1234, Cameroun'],
    color: 'bg-green-50 text-green-600',
  },
];

export default function ContactPage() {
  return (
    <div className="pb-24">
      {/* Hero Contact */}
      <section className="bg-csbie-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="section-container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-titles font-bold mb-6"
          >
            Contactez-nous
          </motion.h1>
          <p className="text-xl text-white/70 font-body max-w-2xl mx-auto">
            Une question ? Un projet d'inscription ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform"
              >
                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <info.icon size={32} />
                </div>
                <h3 className="font-titles font-bold text-xl text-csbie-primary mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="font-body text-csbie-text/70">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-zinc-100">
              <SectionTitle 
                title="Envoyez-nous un message" 
                subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h ouvrées."
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Map & Socials */}
            <div className="space-y-12">
              <div>
                <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-6 flex items-center gap-3">
                  <MapPin size={24} className="text-csbie-gold" /> Localisation
                </h3>
                <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-inner border border-zinc-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.364448202581!2d11.5165!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a5f6e809f%3A0x6b8f10d2d3e4!2sBastos%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div>
                <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Youtube, href: '#', label: 'YouTube' },
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-csbie-primary text-white rounded-full flex items-center justify-center hover:bg-csbie-gold transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-csbie-gold/5 p-8 rounded-[2rem] border border-csbie-gold/20">
                <h3 className="font-titles text-xl font-bold text-csbie-primary mb-4 flex items-center gap-3">
                  <Clock size={20} className="text-csbie-gold" /> Heures d'ouverture
                </h3>
                <div className="space-y-2 text-sm font-ui text-csbie-text/70">
                  <p className="flex justify-between"><span>Lundi - Vendredi:</span> <span className="font-bold">07:30 - 17:00</span></p>
                  <p className="flex justify-between"><span>Samedi:</span> <span className="font-bold">08:00 - 13:00</span></p>
                  <p className="flex justify-between"><span>Dimanche:</span> <span className="font-bold">Fermé</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

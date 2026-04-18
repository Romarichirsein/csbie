'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function Footer() {
  return (
    <footer className="bg-csbie-primary text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-csbie-gold/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      
      {/* Section principale */}
      <div className="section-container py-24 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
        >
          {/* Colonne 1 : Logo & Description */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-8 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="CSBIE Logo"
                  width={140}
                  height={140}
                  className="h-28 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
                />
              </motion.div>
            </div>
            <p className="text-white/60 font-body text-base leading-relaxed mb-8">
              Complexe Scolaire Bilingue International Espérance. 
              <br />
              <span className="text-white/80 font-semibold italic">Excellence académique et sportive au cœur de Yaoundé.</span>
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://web.facebook.com/ComplexeScolaireBilingueEsperance/?_rdc=1&_rdr#' },
                { Icon: Instagram, href: 'https://www.instagram.com/csbiesperance/' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }, i) => (
                <motion.a 
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={scaleIn}
                  whileHover={{ y: -5, backgroundColor: '#C9A84C' }}
                  className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 : Liens rapides */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-titles text-csbie-gold font-bold text-xl mb-8 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: 'Notre établissement', href: '/etablissement' },
                { label: 'Équipe pédagogique', href: '/etablissement/staff' },
                { label: 'Programme Cambridge', href: '/cambridge' },
                { label: 'Académie Sportive', href: '/academie-sports' },
                { label: 'Admission', href: '/admission' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-csbie-gold font-ui text-sm transition-all duration-300 flex items-center gap-0 hover:gap-3 group"
                  >
                    <span className="w-0 h-0.5 bg-csbie-gold group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 : Horaires */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-titles text-csbie-gold font-bold text-xl mb-8 uppercase tracking-widest flex items-center gap-2">
              <Clock size={20} /> Horaires
            </h3>
            <div className="space-y-6 text-sm font-ui">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-csbie-gold font-bold mb-1 uppercase tracking-tighter">Lundi – Vendredi</p>
                <p className="text-white/80">Primaire : 08:00 – 13:30</p>
                <p className="text-white/80">Collège : 07:30 – 15:50</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-csbie-gold font-bold mb-1 uppercase tracking-tighter">Activités & Sports</p>
                <p className="text-white/80">Mardi & Jeudi : 14:10 – 16:30</p>
                <p className="text-white/80">Samedi : 09:00 – 14:00</p>
              </div>
            </div>
          </motion.div>

          {/* Colonne 4 : Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-titles text-csbie-gold font-bold text-xl mb-8 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70 font-ui text-sm">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                   <MapPin size={18} className="text-csbie-gold" />
                </div>
                <span className="pt-1">Mini Prix Bastos, Yaoundé, Cameroun</span>
              </li>
              <li className="space-y-3">
                {['+237 697 849 968', '+237 679 103 116'].map((tel) => (
                  <a key={tel} href={`tel:${tel.replace(/\s/g, '')}`} className="flex items-center gap-4 text-white/70 hover:text-csbie-gold font-ui text-sm transition-all group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-csbie-gold/20 transition-all">
                       <Phone size={18} className="text-csbie-gold" />
                    </div>
                    {tel}
                  </a>
                ))}
              </li>
              <li className="flex items-center gap-4 text-white/70 font-ui text-sm">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                   <Mail size={18} className="text-csbie-gold" />
                </div>
                <a href="mailto:infos@csbie.org" className="hover:text-csbie-gold transition-colors">infos@csbie.org</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Barre de copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="border-t border-white/10 py-8"
      >
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-ui font-bold uppercase tracking-widest text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p>&copy; {new Date().getFullYear()} Complexe Scolaire Bilingue International Espérance.</p>
            <p className="text-csbie-gold hover:text-white transition-colors">
              Powered by <a href="#" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-csbie-gold/50">Wellborne</a>
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/contact" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Mentions Légales</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

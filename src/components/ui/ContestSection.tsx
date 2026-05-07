'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  CalendarDays,
  Clock,
  MapPin,
  FileText,
  Pencil,
  PenTool,
  Package,
  Phone,
  X,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ContestSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* ─── Homepage Section ─── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-csbie-primary via-csbie-secondary to-csbie-primary">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-csbie-gold/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-csbie-accent/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-csbie-gold" />
                  <span className="text-csbie-gold font-ui text-xs font-semibold uppercase tracking-widest">
                    Concours 2026
                  </span>
                  <div className="h-[2px] w-8 bg-csbie-gold" />
                </div>
                <h2 className="font-titles text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Concours d&apos;Entrée{' '}
                  <span className="text-csbie-gold">en 6ème</span>
                </h2>
                <p className="font-body text-white/80 text-lg leading-relaxed mb-4">
                  Le <strong className="text-white">Complexe Scolaire Bilingue International Espérance</strong>, situé à{' '}
                  <strong className="text-csbie-gold">Mini Prix Bastos</strong>, lance son concours d&apos;entrée en{' '}
                  <strong className="text-white">Sixième (francophone)</strong> et en{' '}
                  <strong className="text-white">Form One (Anglophone)</strong>, ainsi que du{' '}
                  <strong className="text-csbie-gold">système International Cambridge</strong>.
                </p>
              </motion.div>

              {/* Key info cards */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="bg-csbie-gold/20 p-3 rounded-xl">
                    <CalendarDays className="text-csbie-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-titles font-bold text-white text-sm">Date</p>
                    <p className="font-body text-white/70 text-sm">Samedi 23 Mai 2026</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="bg-csbie-gold/20 p-3 rounded-xl">
                    <Clock className="text-csbie-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-titles font-bold text-white text-sm">Heure</p>
                    <p className="font-body text-white/70 text-sm">08h00 précises</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="bg-csbie-gold/20 p-3 rounded-xl">
                    <MapPin className="text-csbie-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-titles font-bold text-white text-sm">Lieu</p>
                    <p className="font-body text-white/70 text-sm">Mini Prix Bastos, Yaoundé</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="bg-csbie-gold/20 p-3 rounded-xl">
                    <Phone className="text-csbie-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-titles font-bold text-white text-sm">Contacts</p>
                    <p className="font-body text-white/70 text-sm">697 84 99 68 / 679 10 31 16</p>
                  </div>
                </div>
              </motion.div>

              {/* Inscription badge + CTA */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className="bg-green-500 text-white px-5 py-2.5 rounded-full font-ui font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-500/30"
                >
                  <Sparkles size={16} />
                  Inscriptions ouvertes !
                </motion.div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-white text-csbie-primary px-8 py-4 rounded-2xl font-ui font-bold hover:bg-csbie-gold hover:text-white transition-all duration-300 shadow-2xl group active:scale-95"
                >
                  En savoir plus
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Flyer preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <div
                className="relative cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                {/* Glow effect behind the image */}
                <div className="absolute -inset-4 bg-csbie-gold/20 rounded-[2.5rem] blur-2xl group-hover:bg-csbie-gold/30 transition-colors duration-500" />

                <div className="relative rounded-3xl overflow-hidden border-[6px] border-white/20 shadow-2xl group-hover:border-csbie-gold/50 transition-all duration-500">
                  <Image
                    src="/images/concour.jpeg"
                    alt="Concours d'entrée CSBIE 2026"
                    width={550}
                    height={350}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-csbie-primary/0 group-hover:bg-csbie-primary/40 transition-colors duration-500 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white font-titles font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-csbie-gold/90 px-6 py-3 rounded-xl"
                    >
                      Voir le flyer
                    </motion.span>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 bg-csbie-gold p-5 rounded-2xl shadow-2xl border-4 border-csbie-primary z-20"
                >
                  <GraduationCap size={32} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Modal Popup ─── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 bg-csbie-primary/80 hover:bg-csbie-primary text-white p-2.5 rounded-full transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Modal header with image */}
              <div className="relative w-full">
                <Image
                  src="/images/concour.jpeg"
                  alt="Concours d'entrée CSBIE 2026"
                  width={900}
                  height={500}
                  className="w-full h-auto rounded-t-3xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-t-3xl" />
              </div>

              {/* Modal body */}
              <div className="px-8 pb-10 -mt-10 relative z-10">
                {/* Title area */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[2px] w-8 bg-csbie-gold" />
                    <span className="text-csbie-gold font-ui text-xs font-semibold uppercase tracking-widest">
                      Année scolaire 2026-2027
                    </span>
                  </div>
                  <h3 className="font-titles text-2xl sm:text-3xl font-bold text-csbie-primary leading-tight">
                    Concours d&apos;Entrée en 6ème / Form One
                  </h3>
                  <p className="font-body text-csbie-text/70 mt-3 leading-relaxed">
                    Parents d&apos;élèves, bonne nouvelle ! Le{' '}
                    <strong className="text-csbie-primary">Complexe Scolaire Bilingue International Espérance</strong>, situé à{' '}
                    <strong className="text-csbie-gold">Mini Prix Bastos</strong>, lance son concours d&apos;entrée en{' '}
                    <strong>Sixième (francophone)</strong> et en{' '}
                    <strong>Form One (Anglophone)</strong>, ainsi que du{' '}
                    <strong className="text-csbie-gold">système International Cambridge</strong>.
                  </p>
                </div>

                {/* Date & Time highlight */}
                <div className="bg-gradient-to-r from-csbie-primary to-csbie-secondary rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={28} className="text-csbie-gold" />
                    <span className="font-titles font-bold text-xl">Samedi 23 Mai 2026</span>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-white/30" />
                  <div className="flex items-center gap-3">
                    <Clock size={28} className="text-csbie-gold" />
                    <span className="font-titles font-bold text-xl">08h00 précises</span>
                  </div>
                </div>

                {/* Two-column info grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Pièces à fournir */}
                  <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                    <h4 className="font-titles font-bold text-csbie-primary text-lg mb-4 flex items-center gap-2">
                      <FileText size={20} className="text-csbie-gold" />
                      Pièces à fournir
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-csbie-gold flex-shrink-0" />
                        <span className="font-body text-csbie-text/80 text-sm">
                          Photocopie de l&apos;acte de naissance
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-csbie-gold flex-shrink-0" />
                        <span className="font-body text-csbie-text/80 text-sm">
                          Photocopie du bulletin de l&apos;année en cours
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Matériel requis */}
                  <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                    <h4 className="font-titles font-bold text-csbie-primary text-lg mb-4 flex items-center gap-2">
                      <Package size={20} className="text-csbie-gold" />
                      Matériel requis le jour du concours
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <PenTool size={16} className="mt-0.5 text-csbie-accent flex-shrink-0" />
                        <span className="font-body text-csbie-text/80 text-sm">Stylo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Pencil size={16} className="mt-0.5 text-csbie-accent flex-shrink-0" />
                        <span className="font-body text-csbie-text/80 text-sm">Crayon</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Package size={16} className="mt-0.5 text-csbie-accent flex-shrink-0" />
                        <span className="font-body text-csbie-text/80 text-sm">Boîte académique complète</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Quote / Motto */}
                <div className="bg-csbie-gold/10 border-l-4 border-csbie-gold rounded-r-xl p-5 mb-8">
                  <p className="font-body text-csbie-primary italic text-base font-medium">
                    &laquo; Nos enfants nous sont chers, donnons-leur le meilleur. &raquo;
                  </p>
                  <p className="font-ui text-csbie-text/50 text-xs mt-1">— Complexe Scolaire Bilingue International Espérance</p>
                </div>

                {/* Contact & CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-csbie-gold" />
                    <div>
                      <p className="font-ui text-xs text-csbie-text/50 uppercase tracking-wide">Contacts</p>
                      <p className="font-titles font-bold text-csbie-primary">697 84 99 68 / 679 10 31 16</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/237679103116?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20le%20concours%20d%27entr%C3%A9e%20en%206%C3%A8me%20au%20CSBIE.%20Merci."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-ui font-bold transition-all shadow-lg hover:shadow-green-600/30 group active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Nous contacter sur WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

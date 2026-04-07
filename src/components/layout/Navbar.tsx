'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

// Structure de navigation
const navItems = [
  {
    label: 'Établissement',
    href: '/etablissement',
    children: [
      { label: 'Notre école', href: '/etablissement' },
      { label: 'Notre équipe', href: '/etablissement/staff' },
      { label: 'Résultats 2024-2025', href: '/etablissement/resultats-2024-2025' },
      { label: 'Résultats 2025-2026', href: '/etablissement/resultats-2025-2026' },
    ],
  },
  {
    label: 'Admission',
    href: '/admission',
    children: [
      { label: 'Procédure d\'admission', href: '/admission' },
      { label: 'Frais de scolarité', href: '/frais-de-scolarite' },
    ],
  },
  {
    label: 'Académie Sports',
    href: '/academie-sports',
    children: [
      { label: "L'académie", href: '/academie-sports' },
      { label: 'Profils joueurs', href: '/academie-sports/profils-joueurs' },
      { label: 'Palmarès', href: '/academie-sports/palmares' },
    ],
  },
  { label: 'Cambridge', href: '/cambridge' },
  { label: 'Activités', href: '/activites-periscolaires' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-csbie-gold z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-csbie-primary/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] py-3 border-b border-white/10' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        {/* Bandeau de contact discret */}
        <div className={`hidden lg:block border-b border-white/5 text-white/40 text-[10px] uppercase tracking-[0.2em] py-1 transition-all duration-700 ${
          scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mb-4'
        }`}>
          <div className="section-container flex justify-end gap-10 font-ui font-bold">
            <a href="tel:+237697849968" className="flex items-center gap-2 hover:text-csbie-gold transition-colors group">
              <Phone size={12} className="group-hover:scale-110 transition-transform" /> +237 697 849 968
            </a>
            <a href="tel:+237674655427" className="flex items-center gap-2 hover:text-csbie-gold transition-colors group">
              <Phone size={12} className="group-hover:scale-110 transition-transform" /> +237 674 655 427
            </a>
          </div>
        </div>

        <nav className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="CSBIE Shield Logo"
                width={160}
                height={160}
                priority
                className={`w-auto object-contain transition-all duration-700 drop-shadow-2xl ${
                  scrolled ? 'h-14' : 'h-24'
                }`}
              />
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-csbie-gold/20 blur-2xl -z-10 rounded-full" 
              />
            </motion.div>
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative group/nav"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1.5 text-white/80 hover:text-white font-ui text-sm font-bold px-5 py-3 rounded-xl transition-all duration-300 uppercase tracking-wider"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-50 group-hover/nav:rotate-180 transition-transform duration-300" />}
                  <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-csbie-gold scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300" />
                </Link>

                {/* Mega-menu dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                      className="absolute top-full left-0 bg-csbie-primary/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl py-4 min-w-[280px] border border-white/10 mt-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-6 py-3 text-white/70 hover:text-csbie-gold hover:bg-white/5 font-ui text-sm font-medium transition-all group/item"
                        >
                          {child.label}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/admission"
              className="hidden lg:inline-flex items-center gap-3 bg-csbie-gold text-white font-ui font-extrabold text-xs uppercase tracking-[0.15em] px-8 py-4 rounded-xl shadow-xl hover:shadow-csbie-gold/20 transition-all"
            >
              S&apos;inscrire
            </Link>
          </motion.div>

          {/* Bouton mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-csbie-primary shadow-3xl border-t border-white/10"
            >
              <div className="section-container py-10 flex flex-col gap-6">
                {navItems.map((item) => (
                  <div key={item.href} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between text-white font-titles font-bold text-2xl mb-4"
                    >
                      {item.label}
                      <ArrowRight size={20} className="text-csbie-gold" />
                    </Link>
                    {item.children && (
                      <div className="flex flex-wrap gap-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="bg-white/5 px-4 py-2 rounded-lg text-white/60 hover:text-csbie-gold font-ui text-sm transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/admission"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 block text-center bg-csbie-gold text-white font-ui font-black uppercase tracking-widest py-5 rounded-2xl shadow-2xl"
                >
                  Dossier d&apos;inscription
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

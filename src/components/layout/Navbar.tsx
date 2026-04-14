'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, X, ChevronDown, Phone, ArrowRight, 
  Mail, MapPin, Facebook, Instagram, Youtube, Linkedin,
  Globe, Clock
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

// Types
interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

// Navigation Structure
const navItems: NavItem[] = [
  {
    label: 'Établissement',
    href: '/etablissement',
    children: [
      { label: 'Présentation & Vision', href: '/etablissement' },
      { label: 'Corps Pédagogique', href: '/etablissement/staff' },
      { label: 'Résultats 2024-2025', href: '/etablissement/resultats-2024-2025' },
    ],
  },
  {
    label: 'Admission',
    href: '/admission',
    children: [
      { label: 'Processus d\'Inscription', href: '/admission' },
      { label: 'Frais de Scolarité', href: '/frais-de-scolarite' },
    ],
  },
  {
    label: 'Académie Sports',
    href: '/academie-sports',
    children: [
      { label: "L'Académie d'Élite", href: '/academie-sports' },
      { label: 'Profils des Joueurs', href: '/academie-sports/profils-joueurs' },
      { label: 'Palmarès & Champions', href: '/academie-sports/palmares' },
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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setScrolled(true);
    else setScrolled(false);
  });

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-[100] bg-csbie-primary">
        {/* TOP BAR - Disappears on scroll */}
        <motion.div 
          initial={false}
          animate={{ 
            height: scrolled ? 0 : 40,
            opacity: scrolled ? 0 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="hidden lg:block overflow-hidden border-b border-white/5"
        >
          <div className="section-container h-full flex items-center justify-between text-white/80">
            {/* Quick Contacts */}
            <div className="flex items-center gap-8 font-ui text-[11px] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-csbie-gold" />
                <span>Mini Prix Bastos, Yaoundé</span>
              </div>
              <a href="mailto:direction@csbie.org" className="flex items-center gap-2 hover:text-csbie-gold transition-colors">
                <Mail size={12} className="text-csbie-gold" />
                <span>direction@csbie.org</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-csbie-gold" />
                <span>Lun - Ven: 07:30 - 17:00</span>
              </div>
            </div>

            {/* Socials & Lang */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:text-csbie-gold transition-colors"><Facebook size={14} /></Link>
                <Link href="#" className="hover:text-csbie-gold transition-colors"><Instagram size={14} /></Link>
                <Link href="#" className="hover:text-csbie-gold transition-colors"><Linkedin size={14} /></Link>
              </div>
              <div className="w-[1px] h-4 bg-white/10" />
              <div className="flex items-center gap-2 font-ui text-[10px] font-black uppercase tracking-widest cursor-pointer group">
                <Globe size={12} className="text-csbie-gold group-hover:rotate-180 transition-transform duration-700" />
                <span className="text-white">FR</span>
                <span className="text-white/30">|</span>
                <span className="text-white/40 hover:text-white transition-colors">EN</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN BAR */}
        <div className={`transition-all duration-700 w-full ${
          scrolled 
            ? 'bg-white shadow-2xl py-3 border-b border-csbie-gold/20' 
            : 'bg-csbie-primary py-5'
        }`}>
          <nav className="section-container flex items-center justify-between">
            {/* Logo area */}
            <Link href="/" className="relative flex items-center group">
              <div className={`relative transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100'}`}>
                <Image
                  src="/logo.png"
                  alt="CSBIE"
                  width={150}
                  height={150}
                  priority
                  className={`w-auto object-contain transition-all duration-700 ${
                    scrolled ? 'h-14' : 'h-20'
                  }`}
                />
              </div>
              <div className={`ml-4 hidden xl:block transition-all duration-500 overflow-hidden ${scrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                <span className="block font-titles font-black text-white text-lg tracking-tight leading-none">CSBIE</span>
                <span className="text-[10px] font-ui font-black text-csbie-gold uppercase tracking-[0.2em]">Excellence Academy</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative px-2 group/nav"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href}
                    className={`nav-link text-xs font-black uppercase tracking-[0.12em] px-3 py-3 rounded-lg flex items-center gap-1 transition-all duration-300 ${
                      scrolled ? 'text-csbie-primary hover:bg-csbie-primary/5' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={12} className={`opacity-50 transition-transform duration-500 group-hover/nav:rotate-180`} />}
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute top-full left-0 mt-3 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.15)] rounded-[2rem] border border-zinc-100 min-w-[320px] p-6 overflow-hidden z-[110]"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-csbie-gold/5 rounded-full blur-3xl -z-10" />
                        
                        <div className="relative z-10 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-csbie-primary/5 transition-all text-csbie-primary"
                            >
                              <div className="flex flex-col">
                                <span className="font-ui font-bold text-sm tracking-wide">{child.label}</span>
                              </div>
                              <ArrowRight size={16} className="text-csbie-gold opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:+237697849968" 
                className={`hidden xl:flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
                  scrolled 
                    ? 'border-csbie-primary/10 text-csbie-primary bg-csbie-primary/5 group' 
                    : 'border-white/20 text-white bg-white/5 group'
                }`}
              >
                <div className="bg-csbie-gold p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg">
                  <Phone size={14} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-ui font-black uppercase tracking-widest opacity-50">Assistance</span>
                  <span className="text-sm font-bold font-titles tracking-tight">+237 697 849 968</span>
                </div>
              </a>

              <Link
                href="/admission"
                className="inline-flex items-center justify-center bg-csbie-gold hover:bg-csbie-primary text-white font-ui font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-csbie-gold/30 transform hover:-translate-y-1"
              >
                Inscription
              </Link>

              {/* Mobile Trigger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                  scrolled ? 'bg-csbie-primary text-white shadow-lg' : 'bg-white text-csbie-primary shadow-2xl'
                }`}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-0 bg-csbie-primary z-[200] lg:hidden flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <Image src="/logo.png" alt="CSBIE" width={100} height={100} className="h-10 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="w-12 h-12 text-csbie-gold bg-white/5 rounded-full flex items-center justify-center">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-8">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className="block font-titles font-black text-3xl text-white mb-4 hover:text-csbie-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-csbie-gold/30">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-white/60 font-body text-lg hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 bg-black/20 mt-auto border-t border-white/5">
                <Link
                  href="/admission"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-csbie-gold text-white font-ui font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center shadow-3xl text-lg"
                >
                  Démarrez l&apos;Inscription
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

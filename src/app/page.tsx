import HeroSection from '@/components/ui/HeroSection';
import FourPillars from '@/components/ui/FourPillars';
import StatCounter from '@/components/ui/StatCounter';
import { CambridgeTeaser, SportsTeaser } from '@/components/ui/Teasers';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import NewsletterForm from '@/components/ui/NewsletterForm';
import SectionTitle from '@/components/ui/SectionTitle';
import MotFondatrice from '@/components/ui/MotFondatrice';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Mot de la Fondatrice */}
      <MotFondatrice />

      {/* 4 Piliers Section */}
      <FourPillars />

      {/* Statistics Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <SectionTitle 
            title="Le CSBIE en chiffres" 
            subtitle="Notre succès se mesure par la réussite et l'épanouissement de nos élèves."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter valeur={1200} suffixe="+" libelle="Élèves inscrits" icone="Users" />
            <StatCounter valeur={100} suffixe="%" libelle="Réussite aux examens" icone="TrendingUp" />
            <StatCounter valeur={15} suffixe="+" libelle="Disciplines sportives" icone="BookOpen" />
            <StatCounter valeur={20} suffixe="+" libelle="Années d'excellence" icone="Star" />
          </div>
        </div>
      </section>

      {/* Teasers Cambridge & Sports */}
      <CambridgeTeaser />
      <SportsTeaser />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Partners Section (Placeholder for now) */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <SectionTitle 
            title="Nos Partenaires & Accréditations" 
            subtitle="Nous collaborons avec les meilleures institutions pour garantir une éducation de classe mondiale."
          />
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Logos representant les partenaires (Cambridge, Fecafoot, etc.) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-zinc-200 rounded-lg flex items-center justify-center font-bold text-zinc-400">CAMBRIDGE</div>
              <span className="text-[10px] font-ui font-bold uppercase tracking-widest text-zinc-400">International Education</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-zinc-200 rounded-lg flex items-center justify-center font-bold text-zinc-400">FECAFOOT</div>
              <span className="text-[10px] font-ui font-bold uppercase tracking-widest text-zinc-400">Fédération de Football</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-zinc-200 rounded-lg flex items-center justify-center font-bold text-zinc-400">MINESEC</div>
              <span className="text-[10px] font-ui font-bold uppercase tracking-widest text-zinc-400">Éducation Nationale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />
    </div>
  );
}

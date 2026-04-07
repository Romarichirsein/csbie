import SectionTitle from '@/components/ui/SectionTitle';
import ExamResultCard from '@/components/ui/ExamResultCard';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Trophy, Star, TrendingUp } from 'lucide-react';

const results2425 = [
  {
    nomExamen: 'CEP (Certificat d\'Études Primaires)',
    taux: 100,
    description: 'Une réussite totale pour nos élèves du CM2. Tous admis au premier tour.',
    annee: '2024-2025',
  },
  {
    nomExamen: 'BEPC (Brevet d\'Études du Premier Cycle)',
    taux: 100,
    description: 'Performance exceptionnelle avec 85% de mentions "Bien" et "Très Bien".',
    annee: '2024-2025',
  },
  {
    nomExamen: 'BACCALAURÉAT (A, C, D, TI)',
    taux: 100,
    description: 'Filière scientifique et littéraire confondues. 100% de réussite consécutif.',
    annee: '2024-2025',
  },
  {
    nomExamen: 'Cambridge IGCSE',
    taux: 100,
    description: 'Résultats brillants pour notre première promotion internationale.',
    annee: '2024-2025',
  },
  {
    nomExamen: 'Cambridge AS/A Level',
    taux: 100,
    description: 'Admissions garanties dans les universités étrangères de renom.',
    annee: '2024-2025',
  },
];

export default function Results2425Page() {
  return (
    <div className="pb-24">
      {/* Hero Results */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/results-hero.png"
          alt="Résultats Académiques CSBIE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-csbie-primary/70 backdrop-blur-[2px]" />
        <div className="section-container relative z-10 text-white">
          <Link href="/etablissement" className="inline-flex items-center gap-2 text-csbie-gold hover:text-white transition-colors mb-6 font-ui font-bold">
            <ArrowLeft size={18} /> Retour à l'établissement
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-titles font-bold mb-6">Résultats <span className="text-csbie-gold">2024-2025</span></h1>
            <p className="text-xl text-white/80 font-body leading-relaxed max-w-2xl">
              Une année de records et de fierté. Le CSBIE confirme sa place parmi l'élite académique du Cameroun avec un taux de réussite historique.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 bg-csbie-gold">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
            <div className="flex flex-col items-center">
              <Trophy size={48} className="mb-4" />
              <p className="text-5xl font-titles font-bold">100%</p>
              <p className="font-ui uppercase tracking-widest text-sm font-bold opacity-80">Taux Global de Réussite</p>
            </div>
            <div className="flex flex-col items-center">
              <Star size={48} className="mb-4" />
              <p className="text-5xl font-titles font-bold">82%</p>
              <p className="font-ui uppercase tracking-widest text-sm font-bold opacity-80">Mentions Obtenues</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp size={48} className="mb-4" />
              <p className="text-5xl font-titles font-bold">#1</p>
              <p className="font-ui uppercase tracking-widest text-sm font-bold opacity-80">Classement Régional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-24">
        <div className="section-container">
          <SectionTitle 
            title="Détail par Examen" 
            subtitle="Chaque niveau d'enseignement a brillé par son sérieux et son excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {results2425.map((result) => (
              <ExamResultCard
                key={result.nomExamen}
                nomExamen={result.nomExamen}
                taux={result.taux}
                description={result.description}
                annee={result.annee}
              />
            ))}
          </div>

          <div className="mt-20 p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 text-center">
             <h3 className="font-titles text-3xl font-bold text-csbie-primary mb-6">Hommage à nos encadreurs</h3>
             <p className="font-body text-csbie-text/70 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
               Ces résultats sont le fruit du travail acharné de nos élèves, mais aussi du dévouement sans faille de notre corps enseignant. Nous saluons leur rigueur et leur passion pédagogique.
             </p>
             <Link href="/etablissement/staff" className="text-csbie-gold font-ui font-bold hover:underline">Voir l'équipe pédagogique</Link>
          </div>
        </div>
      </section>

      {/* Link to Next Year */}
      <section className="py-16 bg-zinc-100">
        <div className="section-container text-center">
          <p className="font-ui text-csbie-text/50 uppercase tracking-widest text-xs mb-4">À venir</p>
          <h2 className="font-titles text-3xl font-bold text-csbie-primary mb-8 opacity-50">Résultats 2025-2026</h2>
          <div className="inline-block px-8 py-3 bg-white border border-zinc-200 text-zinc-400 font-ui font-bold rounded-full">
            Disponible prochainement via Sanity CMS
          </div>
        </div>
      </section>
    </div>
  );
}

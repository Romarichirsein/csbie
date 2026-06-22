'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function GraduationSection() {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden border-y border-zinc-100">
      {/* Décorations d'arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-csbie-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-csbie-primary/5 rounded-full blur-3xl -z-10" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Colonne gauche — Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Badge événement */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-csbie-gold/10 border border-csbie-gold/20 rounded-full">
              <GraduationCap size={16} className="text-csbie-gold" />
              <span className="text-csbie-gold font-ui font-bold text-xs uppercase tracking-widest">
                Cérémonie Solennelle
              </span>
            </div>

            <SectionTitle
              title="Graduation Promotion 2025/2026"
              subtitle="Le couronnement de l'excellence académique au CSBIE."
              align="left"
            />

            <p className="font-body text-csbie-text/70 leading-relaxed text-lg">
              C'est avec une immense fierté que le Complexe Scolaire Bilingue International Espérance
              célèbre la réussite de ses diplômés de la promotion 2025/2026. Un moment marquant qui
              symbolise le couronnement de leurs efforts académiques et leur envol vers de nouveaux
              horizons universitaires et professionnels de premier plan.
            </p>

            <div className="pt-4">
              <Link
                href="/activites-periscolaires?filter=graduation#galerie"
                className="inline-flex items-center gap-3 bg-csbie-primary text-white hover:bg-csbie-gold px-8 py-4 rounded-xl font-ui font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-lg hover:shadow-csbie-gold/30 hover:-translate-y-1 transform"
              >
                Découvrir la Galerie de Photos
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Colonne droite — Grille d'images asymétrique */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">

            {/* Grande image en haut (pleine largeur) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-12 relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <Image
                src="/images/graduation/graduation-group-2.jpg"
                alt="Promotion 2025/2026 — Cérémonie de Graduation CSBIE"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-csbie-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-titles font-bold text-lg">
                  Cérémonie solennelle de remise des diplômes
                </span>
              </div>
            </motion.div>

            {/* Image bas gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-6 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <Image
                src="/images/graduation/graduation-group-1.jpg"
                alt="Lauréats CSBIE Promotion 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-csbie-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white font-titles font-semibold text-sm">
                  Les diplômés célébrant leur réussite
                </span>
              </div>
            </motion.div>

            {/* Image bas droite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-6 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <Image
                src="/images/graduation/graduation-student.jpg"
                alt="Diplômé avec le Directeur Général CSBIE"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-csbie-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white font-titles font-semibold text-sm">
                  Un accompagnement d&apos;excellence
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

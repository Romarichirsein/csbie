'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionTitle from './SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'M. Jean-Marc Mbarga',
    role: 'Parent d\'élève en Terminale',
    text: 'Une école d\'élite ! Mon fils a pu concilier sa passion pour le basketball avec un cursus académique rigoureux. Les résultats sont là : 100% au BAC et une bourse sportive aux USA.',
    rating: 5,
  },
  {
    name: 'Mme Lucie Kouam',
    role: 'Parente d\'élève en Years 9 (Cambridge)',
    text: 'Le programme Cambridge du CSBIE est exceptionnel. Ma fille est devenue parfaitement bilingue en seulement deux ans et s\'épanouit dans un environnement international.',
    rating: 5,
  },
  {
    name: 'M. Ibrahim Bello',
    role: 'Ancien élève - Promotion 2024',
    text: 'Les valeurs inculquées au CSBIE m\'accompagnent chaque jour dans mes études d\'ingénierie. Discipline, excellence et esprit d\'équipe sont le socle de cet établissement.',
    rating: 5,
  },
  {
    name: 'Dr. Sophie Eboa',
    role: 'Parente d\'élève au Primaire',
    text: 'Un cadre sécurisé et des enseignants dévoués. Je recommande vivement pour les parents qui cherchent l\'excellence académique dès le plus jeune âge.',
    rating: 5,
  },
];

import { fadeInUp, staggerContainer, float } from '@/lib/animations';

export default function TestimonialCarousel() {
  return (
    <section className="py-24 bg-csbie-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <SectionTitle 
          title="Paroles de Parents & Élèves" 
          subtitle="Découvrez pourquoi des centaines de familles font confiance au CSBIE pour l'avenir de leurs enfants."
          gold
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 relative px-4 sm:px-12"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-20 !overflow-visible"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="bg-white p-12 rounded-[3rem] shadow-2xl h-full flex flex-col items-start relative group transition-all duration-500 border border-white/10"
                >
                  <motion.div
                    variants={float}
                    animate="animate"
                    className="absolute top-8 right-10 text-csbie-gold/20"
                  >
                    <Quote size={56} />
                  </motion.div>
                  
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#C9A84C" className="text-csbie-gold" />
                    ))}
                  </div>

                  <p className="font-body text-csbie-text/80 italic mb-10 leading-relaxed text-lg relative z-10">
                    "{t.text}"
                  </p>

                  <div className="mt-auto pt-8 border-t border-zinc-100 flex items-center gap-5 w-full">
                    <div className="w-14 h-14 rounded-2xl bg-csbie-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-titles font-bold text-csbie-primary text-xl leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-csbie-gold font-ui text-xs font-bold uppercase tracking-widest mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #C9A84C !important;
          opacity: 0.2;
          height: 8px !important;
          width: 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}

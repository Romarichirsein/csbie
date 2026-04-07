'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Linkedin, Mail } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/lib/animations';

interface StaffCardProps {
  nom: string;
  poste: string;
  photoUrl?: string;
  bio?: string;
}

export default function StaffCard({ nom, poste, photoUrl, bio }: StaffCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 flex flex-col h-full"
    >
      {/* Photo Container */}
      <div className="relative h-80 bg-zinc-100 overflow-hidden">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={`Photo de ${nom}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-csbie-primary/5">
            <User size={80} className="text-csbie-primary/10" />
          </div>
        )}
        
        {/* Overlay with Bio - Appears on Hover */}
        <div className="absolute inset-0 bg-csbie-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 text-white">
          <p className="text-sm font-body leading-relaxed mb-6 line-clamp-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
            {bio || "Membre dévoué de l'équipe pédagogique du CSBIE, engagé pour l'excellence et l'épanouissement de chaque élève."}
          </p>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500">
            <div className="w-10 h-10 bg-white/10 hover:bg-csbie-gold rounded-full flex items-center justify-center transition-colors cursor-pointer">
              <Linkedin size={18} />
            </div>
            <div className="w-10 h-10 bg-white/10 hover:bg-csbie-gold rounded-full flex items-center justify-center transition-colors cursor-pointer">
              <Mail size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-8 border-t-4 border-csbie-gold flex-grow">
        <h3 className="font-titles text-2xl font-bold text-csbie-primary leading-tight mb-2 group-hover:text-csbie-gold transition-colors duration-300">{nom}</h3>
        <p className="font-ui text-csbie-secondary text-xs font-bold uppercase tracking-widest">{poste}</p>
      </div>
    </motion.div>
  );
}

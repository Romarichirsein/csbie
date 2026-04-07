'use client';

import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Info, FileText, Download } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const tuitionFees = [
  { level: 'Maternelle (Nursery 1-3)', fees: '550 000 FCFA' },
  { level: 'Primaire Corresponds (Years 1-3)', fees: '650 000 FCFA' },
  { level: 'Primaire Corresponds (Years 4-6)', fees: '750 000 FCFA' },
  { level: 'Secondaire (Years 7-9)', fees: '950 000 FCFA' },
  { level: 'Secondaire (Years 10-13)', fees: '1 250 000 FCFA' },
];

const otherFees = [
  { item: 'Inscription (nouveaux élèves)', cost: '50 000 FCFA' },
  { item: 'Ré-inscription (anciens)', cost: '35 000 FCFA' },
  { item: 'Tenues Scolaires (kit complet)', cost: '45 000 FCFA' },
  { item: 'Assurance Scolaire (annuel)', cost: '10 000 FCFA' },
];

export default function TuitionFeesPage() {
  return (
    <div className="pb-24">
      {/* Hero Tuition */}
      <section className="bg-csbie-primary py-24 text-white text-center">
        <div className="section-container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-titles font-bold mb-6"
          >
            Frais de Scolarité & Règlement
          </motion.h1>
          <p className="text-xl text-white/70 font-body max-w-2xl mx-auto">
            Transparence et gestion rigoureuse. Découvrez les modalités financières pour l'année académique.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle 
                title="Tableau des Frais" 
                subtitle="Détail des frais de scolarité globaux par cycle d'enseignement."
                align="left"
              />
              
              <div className="mt-8 border border-zinc-200 rounded-3xl overflow-hidden shadow-xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-100 border-b border-zinc-200">
                      <th className="p-6 font-titles text-csbie-primary font-bold">Niveau / Cycle</th>
                      <th className="p-6 font-titles text-csbie-primary font-bold text-right">Frais Annuels</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionFees.map((item, i) => (
                      <tr key={item.level} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                        <td className="p-6 font-ui text-csbie-text/80">{item.level}</td>
                        <td className="p-6 font-ui font-bold text-csbie-primary text-right">{item.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-10 p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100">
                <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-4 flex items-center gap-3">
                  <Info className="text-csbie-gold" size={24} /> Nota Bene
                </h3>
                <p className="font-body text-csbie-text/70 text-sm leading-relaxed mb-0">
                  Les frais de scolarité comprennent l'accès aux infrastructures, les cours réguliers et le suivi pédagogique. Ils ne comprennent pas le transport, la cantine et les manuels scolaires.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <SectionTitle 
                  title="Frais Annexes" 
                  subtitle="Autres frais obligatoires lors de l'inscription."
                  align="left"
                />
                <div className="mt-8 space-y-4">
                  {otherFees.map((fee) => (
                    <div key={fee.item} className="flex justify-between items-center p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-ui text-csbie-text/80">{fee.item}</span>
                      <span className="font-ui font-bold text-csbie-gold">{fee.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-csbie-primary rounded-[2rem] text-white">
                <h3 className="font-titles text-2xl font-bold mb-6 flex items-center gap-3 text-csbie-gold">
                  <CreditCard size={28} /> Modalités de Paiement
                </h3>
                <div className="space-y-4 font-body text-white/70 text-sm">
                  <p>Les règlements se font par Chèque certifié, Virement Bancaire ou via les plateformes de paiement mobile autorisées par l'école.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>30% à l'inscription (avant fin août)</li>
                    <li>40% en fin de premier trimestre (novembre)</li>
                    <li>30% en début de second trimestre (janvier)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Règlement Financier */}
      <section className="py-24 bg-zinc-50">
        <div className="section-container">
          <SectionTitle 
            title="Règlement Financier" 
            subtitle="Les bases juridiques et morales de notre gestion financière."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {[
              { title: 'Échéances & Moratoires', text: 'Tout retard de paiement au-delà de 15 jours après l\'échéance entraîne des pénalités. Les moratoires doivent être négociés avec la direction financière.' },
              { title: 'Remboursement & Annulation', text: 'Les frais d\'inscription et de tenue ne sont en aucun cas remboursables une fois encaissés par l\'établissement.' },
              { title: 'Exclusion pour Impayés', text: 'L\'accès aux cours pourra être suspendu en cas de non-respect prolongé des engagements financiers par les parents.' },
              { title: 'Réductions Fratrie', text: 'Une réduction de 10% sur la scolarité est accordée à partir du 3ème enfant inscrit simultanément.' },
            ].map((rule, i) => (
              <div key={rule.title} className="flex gap-6 bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-fit bg-csbie-gold/10 p-3 rounded-full text-csbie-gold">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-titles text-2xl font-bold text-csbie-primary mb-3">{rule.title}</h4>
                  <p className="font-body text-csbie-text/70 leading-relaxed">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-3 bg-csbie-primary text-white py-5 px-10 rounded-2xl font-ui font-bold shadow-2xl hover:bg-csbie-secondary transition-all group">
              <Download size={22} className="group-hover:translate-y-1 transition-transform" />
              Télécharger le règlement complet (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

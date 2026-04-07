'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const newsletterSchema = z.object({
  email: z.string().email('Veuillez entrer un email valide'),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterValues) => {
    setIsSubmitting(true);
    setError(null);
    
    // Simuler un appel API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Newsletter subscription:', data.email);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError('Une erreur est survenue. Veuillez rééssayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="section-container">
        <div className="relative bg-csbie-primary rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-20 shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-csbie-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-csbie-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-csbie-gold font-ui text-sm font-bold uppercase tracking-widest mb-4 inline-block"
              >
                Restez informés
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-titles font-bold mb-6 leading-tight"
              >
                Inscrivez-vous à notre <span className="text-csbie-gold italic">Newsletter</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/70 font-body max-w-lg mb-0"
              >
                Recevez les actualités, événements et informations importantes du CSBIE directement dans votre boîte mail.
              </motion.p>
            </div>

            <div className="bg-white/5 p-4 md:p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <CheckCircle2 size={64} className="text-csbie-gold mb-6" />
                    <h3 className="text-2xl font-titles font-bold mb-2">Merci !</h3>
                    <p className="text-white/70 font-ui">Votre inscription a été prise en compte avec succès.</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-csbie-gold hover:underline font-ui text-sm"
                    >
                      Inscrire un autre email
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                  >
                    <div className="relative group">
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="votreemail@exemple.com"
                        className={`w-full bg-white/10 border-2 rounded-2xl py-5 px-6 font-ui text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-csbie-gold'
                        }`}
                      />
                      {errors.email && (
                        <span className="absolute left-6 -bottom-6 text-red-400 text-xs font-ui font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-csbie-gold hover:brightness-110 disabled:opacity-50 disabled:grayscale transition-all text-white font-ui font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Rejoindre la communauté
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {error && (
                      <p className="text-red-400 text-center text-sm font-ui mt-2">{error}</p>
                    )}

                    <p className="text-center text-white/40 font-ui text-[10px] uppercase tracking-widest mt-4">
                      Nous respectons votre vie privée. Désabonnement à tout moment.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

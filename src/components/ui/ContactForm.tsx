'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schéma de validation Zod
const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  telephone: z.string().optional(),
  objet: z.string().min(5, "L'objet doit contenir au moins 5 caractères"),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      // Construction du message WhatsApp
      const text = `*Nouveau Message de Contact (Site Web)*%0A%0A*Nom:* ${data.nom}%0A*Email:* ${data.email}%0A*Téléphone:* ${data.telephone || 'Non renseigné'}%0A*Objet:* ${data.objet}%0A*Message:*%0A${data.message}`;
      const waUrl = `https://wa.me/237697849968?text=${text}`;
      
      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(waUrl, '_blank');
      
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <CheckCircle className="text-green-500 mx-auto mb-3" size={48} />
        <h3 className="font-titles text-green-800 text-xl font-bold mb-2">Message envoyé !</h3>
        <p className="font-body text-green-700 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 btn-primary text-sm">
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block font-ui text-sm font-medium text-csbie-text mb-1.5">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            type="text"
            {...register('nom')}
            placeholder="Jean Dupont"
            className={`w-full border rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-csbie-primary transition ${
              errors.nom ? 'border-red-400 focus:ring-red-400' : 'border-csbie-primary/20 focus:ring-csbie-primary/40'
            }`}
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1 font-ui">{errors.nom.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-ui text-sm font-medium text-csbie-text mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="jean@exemple.com"
            className={`w-full border rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition ${
              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-csbie-primary/20 focus:ring-csbie-primary/40'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-ui">{errors.email.message}</p>}
        </div>
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className="block font-ui text-sm font-medium text-csbie-text mb-1.5">
          Téléphone (optionnel)
        </label>
        <input
          id="telephone"
          type="tel"
          {...register('telephone')}
          placeholder="+237 690 000 000"
          className="w-full border border-csbie-primary/20 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-csbie-primary/40 transition"
        />
      </div>

      {/* Objet */}
      <div>
        <label htmlFor="objet" className="block font-ui text-sm font-medium text-csbie-text mb-1.5">
          Objet <span className="text-red-500">*</span>
        </label>
        <input
          id="objet"
          type="text"
          {...register('objet')}
          placeholder="Renseignements sur l'admission..."
          className={`w-full border rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition ${
            errors.objet ? 'border-red-400 focus:ring-red-400' : 'border-csbie-primary/20 focus:ring-csbie-primary/40'
          }`}
        />
        {errors.objet && <p className="text-red-500 text-xs mt-1 font-ui">{errors.objet.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-ui text-sm font-medium text-csbie-text mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          placeholder="Votre message..."
          className={`w-full border rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition resize-none ${
            errors.message ? 'border-red-400 focus:ring-red-400' : 'border-csbie-primary/20 focus:ring-csbie-primary/40'
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-ui">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}

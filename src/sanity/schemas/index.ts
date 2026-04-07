// Schéma Sanity: siteSettings (singleton)
import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Titre du site', type: 'string' }),
    defineField({ name: 'slogan', title: 'Slogan', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({
      name: 'telephones',
      title: 'Téléphones',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'adresse', title: 'Adresse', type: 'string' }),
    defineField({ name: 'ville', title: 'Ville', type: 'string' }),
    defineField({
      name: 'horaires',
      title: 'Horaires',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'jours', title: 'Jours', type: 'string' },
            { name: 'heures', title: 'Heures', type: 'string' },
          ],
        },
      ],
    }),
  ],
});

// Schéma: staffMember
export const staffMember = defineType({
  name: 'staffMember',
  title: 'Membre du Staff',
  type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom complet', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'poste', title: 'Poste', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Biographie', type: 'text' }),
    defineField({ name: 'ordre', title: "Ordre d'affichage", type: 'number' }),
  ],
  orderings: [{ title: 'Ordre', name: 'ordreCroissant', by: [{ field: 'ordre', direction: 'asc' }] }],
});

// Schéma: statistic
export const statistic = defineType({
  name: 'statistic',
  title: 'Statistique',
  type: 'document',
  fields: [
    defineField({ name: 'valeur', title: 'Valeur (ex: 1200)', type: 'number', validation: (Rule) => Rule.required() }),
    defineField({ name: 'suffixe', title: 'Suffixe (ex: +)', type: 'string' }),
    defineField({ name: 'libelle', title: 'Libellé', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'icone', title: 'Icône (nom Lucide)', type: 'string' }),
    defineField({ name: 'ordre', title: "Ordre d'affichage", type: 'number' }),
  ],
});

// Schéma: announcement
export const announcement = defineType({
  name: 'announcement',
  title: 'Annonce / Événement',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'lieu', title: 'Lieu', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'actif', title: 'Afficher sur le site', type: 'boolean', initialValue: true }),
  ],
});

// Schéma: testimonial
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom du parent/élève', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'texte', title: 'Témoignage', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'etoiles', title: 'Note (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
  ],
});

// Schéma: partner
export const partner = defineType({
  name: 'partner',
  title: 'Partenaire',
  type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom du partenaire', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'url', title: 'Site web', type: 'url' }),
  ],
});

// Schéma: examResult
export const examResult = defineType({
  name: 'examResult',
  title: "Résultat d'Examen",
  type: 'document',
  fields: [
    defineField({ name: 'annee', title: 'Année scolaire', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'nomExamen', title: "Nom de l'examen", type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'taux', title: 'Taux de réussite (%)', type: 'number', validation: (Rule) => Rule.required().min(0).max(100) }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'ordre', title: "Ordre d'affichage", type: 'number' }),
  ],
});

// Schéma: palmares
export const palmares = defineType({
  name: 'palmares',
  title: 'Palmarès Sportif',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre / Distinctions', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'annee', title: 'Année', type: 'string' }),
    defineField({ name: 'sport', title: 'Sport', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
});

// Schéma: player
export const player = defineType({
  name: 'player',
  title: 'Profil Joueur',
  type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom complet', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'discipline', title: 'Discipline', type: 'string' }),
    defineField({ name: 'position', title: 'Position / Rôle', type: 'string' }),
    defineField({ name: 'bio', title: 'Biographie', type: 'text' }),
  ],
});

// Schéma: activity
export const activity = defineType({
  name: 'activity',
  title: 'Activité Périscolaire',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'icone', title: 'Icône (nom Lucide)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ordre', title: "Ordre d'affichage", type: 'number' }),
  ],
});

// Schéma: cambridgeContent (singleton)
export const cambridgeContent = defineType({
  name: 'cambridgeContent',
  title: 'Contenu Cambridge',
  type: 'document',
  fields: [
    defineField({ name: 'messagePrincipal', title: 'Message du Principal', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'messagePrincipalEn', title: 'Message du Principal (EN)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'galerie', title: 'Galerie Photos', type: 'array', of: [{ type: 'image' }] }),
  ],
});

// Schéma: page (générique)
export const page = defineType({
  name: 'page',
  title: 'Page générique',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'titre' } }),
    defineField({ name: 'contenu', title: 'Contenu', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'metaDescription', title: 'Meta description SEO', type: 'text' }),
  ],
});

// Schéma: newsPost
export const newsPost = defineType({
  name: 'newsPost',
  title: 'Actualité',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date de publication', type: 'date', validation: (Rule) => Rule.required() }),
    defineField({ name: 'contenu', title: 'Contenu', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: "Image d'illustration", type: 'image', options: { hotspot: true } }),
  ],
});

// Schéma: downloadFile
export const downloadFile = defineType({
  name: 'downloadFile',
  title: 'Fichier à télécharger',
  type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom du fichier', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'fichier', title: 'Fichier PDF', type: 'file', options: { accept: '.pdf' } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
});

// Configuration de Sanity Studio (embarqué dans Next.js)
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import {
  siteSettings,
  staffMember,
  statistic,
  announcement,
  testimonial,
  partner,
  examResult,
  palmares,
  player,
  activity,
  cambridgeContent,
  page,
  newsPost,
  downloadFile,
} from '@/sanity/schemas';

export default defineConfig({
  name: 'csbie-studio',
  title: 'CSBIE - Administration',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'votre-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Administration CSBIE')
          .items([
            S.listItem()
              .title('Paramètres généraux')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('Équipe pédagogique').child(S.documentTypeList('staffMember').title('Staff')),
            S.listItem().title('Résultats examens').child(S.documentTypeList('examResult').title('Résultats')),
            S.listItem().title('Témoignages').child(S.documentTypeList('testimonial').title('Témoignages')),
            S.listItem().title('Annonces / Événements').child(S.documentTypeList('announcement').title('Annonces')),
            S.divider(),
            S.listItem().title('Académie Sportive').child(
              S.list().title('Académie').items([
                S.listItem().title('Palmarès').child(S.documentTypeList('palmares')),
                S.listItem().title('Profils Joueurs').child(S.documentTypeList('player')),
              ])
            ),
            S.listItem().title('Activités périscolaires').child(S.documentTypeList('activity')),
            S.divider(),
            S.listItem()
              .title('Contenu Cambridge')
              .child(S.document().schemaType('cambridgeContent').documentId('cambridgeContent')),
            S.listItem().title('Actualités').child(S.documentTypeList('newsPost')),
            S.listItem().title('Statistiques').child(S.documentTypeList('statistic')),
            S.listItem().title('Partenaires').child(S.documentTypeList('partner')),
            S.listItem().title('Fichiers PDF').child(S.documentTypeList('downloadFile')),
            S.listItem().title('Pages génériques').child(S.documentTypeList('page')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [
      siteSettings,
      staffMember,
      statistic,
      announcement,
      testimonial,
      partner,
      examResult,
      palmares,
      player,
      activity,
      cambridgeContent,
      page,
      newsPost,
      downloadFile,
    ],
  },
});

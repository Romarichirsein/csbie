
# 🎯 COMPÉTENCES ANTIGRAVITY REQUISES POUR LE PROJET CSBIE

## Vue d'ensemble du projet
Site web institutionnel ultra-professionnel pour le Complexe Scolaire Bilingue International Espérance (CSBIE)
- **Valeur cible**: Site vendable à 3000€
- **Stack technique**: Next.js 14 (App Router) + React 18 + TypeScript + Sanity CMS v3
- **Niveau de qualité**: Premium institutionnel avec animations modernes

---

## 📋 COMPÉTENCES ANTIGRAVITY À CONFIGURER

### 1. ARCHITECTURE & PLANNING AGENT
**Objectif**: Définir la structure complète du projet avant le codage

**Compétences requises**:
- ✅ Comprendre et interpréter des cahiers des charges complexes (59,000+ caractères)
- ✅ Créer une architecture Next.js 14 App Router avec routes imbriquées
- ✅ Structurer un système CMS headless (Sanity v3) avec types de documents
- ✅ Planifier l'intégration de 11 pages principales + sous-pages
- ✅ Définir la structure de dossiers optimisée (app/, components/, sanity/, public/)
- ✅ Identifier les composants réutilisables (>20 composants)

**Agent Manager doit**:
- Créer un plan détaillé avec sections approuvables
- Mapper toutes les pages et leurs relations
- Définir les schémas Sanity avant le développement
- Proposer la structure des variants Framer Motion

---

### 2. FRONTEND DEVELOPMENT (UI/UX)
**Objectif**: Créer une interface ultra-professionnelle et moderne

**Compétences requises**:

#### 2.1 Design System Implementation
- ✅ Respecter strictement la charte graphique CSBIE:
  - Couleurs: #1B2D6B (bleu marine), #2E4EA6 (bleu roi), #5B8DD9 (accent), #C9A84C (or prestige)
  - Typographie: Playfair Display, DM Sans, Source Serif 4, Cormorant Garamond
  - Ton visuel: Institutionnel premium, sobre, élégant
- ✅ Maîtriser Tailwind CSS avec configuration personnalisée
- ✅ Créer des composants CSS Modules pour animations complexes

#### 2.2 Animation & Interactivité
- ✅ **Framer Motion avancé**:
  - Animations staggerées pour hero sections
  - Variants réutilisables pour cohérence
  - AnimatePresence pour transitions de pages
  - Scroll-triggered animations avec IntersectionObserver
  - CountUp animations pour statistiques
  - Hover states élégants (élévation, bordures)
- ✅ Transitions fluides entre les pages
- ✅ Micro-interactions premium (boutons, cards, liens)

#### 2.3 Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: 375px / 768px / 1024px / 1280px / 1536px
- ✅ Navigation hamburger élégante pour mobile
- ✅ Mega-menu desktop sticky
- ✅ Touch-friendly elements

---

### 3. SANITY CMS INTEGRATION
**Objectif**: Back-office 100% éditable par le client

**Compétences requises**:

#### 3.1 Schema Architecture
- ✅ Créer 14+ types de documents Sanity:
  - siteSettings (singleton)
  - staffMember (équipe avec photos)
  - statistic (statistiques animées)
  - announcement (événements)
  - testimonial (témoignages parents)
  - partner (partenaires)
  - examResult (résultats par année)
  - palmares (sportifs)
  - player (profils joueurs)
  - activity (activités)
  - cambridgeContent (singleton)
  - page (pages génériques)
  - newsPost (actualités)
  - downloadFile (PDFs)

#### 3.2 Sanity Studio Configuration
- ✅ Interface Studio en français
- ✅ Desk Structure personnalisée organisée par catégories
- ✅ Live Preview intégré à Next.js
- ✅ Validation des champs obligatoires
- ✅ Upload de fichiers PDF pour téléchargements
- ✅ Galeries d'images pour Cambridge/Sports
- ✅ Portable Text pour contenu riche

#### 3.3 Data Fetching
- ✅ GROQ queries optimisées
- ✅ ISR (Incremental Static Regeneration) toutes les 60s
- ✅ Image URLs optimisées via Sanity CDN
- ✅ Webhooks pour revalidation automatique

---

### 4. FORMULAIRES & INTERACTIVITÉ
**Objectif**: Formulaires fonctionnels avec validation robuste

**Compétences requises**:
- ✅ **React Hook Form + Zod**:
  - Formulaire de contact (nom, email, téléphone, objet, message)
  - Formulaire de pré-inscription admission
  - Validation en temps réel
  - Messages d'erreur en français
  - Protection honeypot + rate limiting
- ✅ **Intégrations email**:
  - Resend API pour envoi emails
  - Templates d'emails HTML responsive
  - Gestion des erreurs et confirmations
- ✅ **Newsletter**:
  - Intégration Mailchimp ou Brevo
  - Popup ou section dédiée
  - Double opt-in

---

### 5. SEO & PERFORMANCE OPTIMIZATION
**Objectif**: Score Lighthouse >90 + référencement international

**Compétences requises**:

#### 5.1 SEO Technique
- ✅ Next.js Metadata API (App Router)
- ✅ Métadonnées dynamiques depuis Sanity pour chaque page
- ✅ Open Graph + Twitter Cards
- ✅ Schema.org structured data:
  - EducationalOrganization
  - SportsActivityLocation
  - LocalBusiness
- ✅ Sitemap XML dynamique (`/sitemap.xml`)
- ✅ Robots.txt configuré
- ✅ Balises canoniques
- ✅ Fil d'Ariane (breadcrumb) SEO-friendly

#### 5.2 Performance Web
- ✅ **Images optimisées**:
  - next/image avec lazy loading
  - Sanity Image CDN avec transformations
  - WebP/AVIF formats automatiques
  - Placeholder blur pendant chargement
- ✅ **Code splitting & lazy loading**:
  - Dynamic imports pour composants lourds
  - Carrousels chargés à la demande
- ✅ **Core Web Vitals**:
  - LCP < 2.5s (Largest Contentful Paint)
  - FID < 100ms (First Input Delay)
  - CLS < 0.1 (Cumulative Layout Shift)
- ✅ **Caching strategies**:
  - ISR pour pages dynamiques
  - Static generation pour pages fixes

#### 5.3 Accessibilité (WCAG AA)
- ✅ ARIA labels sur éléments interactifs
- ✅ Navigation clavier complète
- ✅ Contraste couleurs minimum 4.5:1
- ✅ Alt text obligatoire sur toutes images
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Headings hiérarchisés (h1 > h2 > h3)

---

### 6. COMPOSANTS RÉUTILISABLES
**Objectif**: Bibliothèque de composants cohérents et maintenables

**Compétences requises**:
- ✅ Créer 20+ composants React TypeScript:
  - `<Navbar />` - Sticky avec mega-menu responsive
  - `<Footer />` - Multi-colonnes avec horaires
  - `<HeroSection />` - Full-screen avec overlay et animations
  - `<SectionTitle />` - Titre + trait décoratif
  - `<StatCounter />` - Compteur animé au scroll
  - `<StaffCard />` - Photo + nom + poste + bio hover
  - `<TestimonialCarousel />` - Swiper.js avec auto-play
  - `<ExamResultCard />` - Badge avec taux de réussite
  - `<DownloadButton />` - Bouton PDF stylisé
  - `<AnnouncementBanner />` - Bandeau événements
  - `<SportsCard />` - Discipline avec icône
  - `<PlayerCard />` - Profil joueur (vide pour l'instant)
  - `<ActivityCard />` - Activité périscolaire
  - `<CambridgeSwitcher />` - Toggle FR/EN
  - `<NewsletterForm />` - Email + CTA
  - `<ContactForm />` - Formulaire complet validé
  - `<GoogleMap />` - Embed Maps Yaoundé
  - `<PortableTextRenderer />` - Rendu Sanity content
  - `<GalleryGrid />` - Galerie responsive
  - `<AccordionItem />` - Pour dossiers admission
  - `<PageBreadcrumb />` - Fil d'Ariane

- ✅ Props TypeScript strictement typées
- ✅ Variants Framer Motion standardisées
- ✅ Documentation inline (JSDoc)

---

### 7. PAGES COMPLEXES
**Objectif**: Développer 11 pages principales + sous-pages

**Compétences requises**:

#### Page Accueil (`/`)
- ✅ Hero 100vh avec animation fade-in staggerée
- ✅ Section 4 piliers (cards interactives)
- ✅ Téléchargement PDF fiche inscription
- ✅ Statistiques animées (CountUp)
- ✅ Annonces concours avec date/lieu
- ✅ Teasers Cambridge + Sports
- ✅ Carrousel témoignages (Swiper)
- ✅ Logos partenaires
- ✅ Newsletter

#### Page Staff (`/etablissement/staff`)
- ✅ Grille 3 colonnes responsive (12 membres)
- ✅ Photos avec placeholder si absent
- ✅ Hover effects élégants

#### Page Académie Sports (`/academie-sports`)
- ✅ Hero sportif avec overlay
- ✅ 6 badges de valeurs (Respect, Persévérance, etc.)
- ✅ Sous-page Profils Joueurs (vide avec placeholder premium)
- ✅ Sous-page Palmarès (membres fondateurs + tableau)

#### Page Cambridge (`/cambridge`)
- ✅ Toggle FR/EN pour contenu bilingue
- ✅ Structure Years 7-13
- ✅ Examens: Checkpoint, IGCSE, AS/A Level
- ✅ Clubs mercredi (Music, Science, Journalism, Environment)
- ✅ Galerie photos

#### Page Résultats 2024-2025
- ✅ Bannière dorée "Résultats Exceptionnels"
- ✅ Tableau taux de réussite (100% avec ✅)
- ✅ Cards animées par examen
- ✅ Section hommage encadreurs

#### Page Résultats 2025-2026
- ✅ Placeholder élégant "À venir"
- ✅ Modifiable via Sanity

#### Page Admission (`/admission`)
- ✅ Accordéons/Tabs par niveau (Maternelle, Primaire, etc.)
- ✅ Tests d'admission (3 systèmes: Franco, Anglo, Cambridge)
- ✅ Formulaire pré-inscription en ligne

#### Page Frais Scolarité (`/frais-de-scolarite`)
- ✅ Règlement financier
- ✅ Autres frais (extra-scolaire, transport, cantine)
- ✅ Informations moratoire/exclusion
- ✅ Placeholder "Contactez-nous pour tarifs"

#### Page Contact (`/contact`)
- ✅ Google Maps embed (Mini Prix Bastos)
- ✅ Formulaire fonctionnel (React Hook Form + Resend)
- ✅ 3 numéros de téléphone
- ✅ Horaires en sidebar

---

### 8. SÉCURITÉ & DÉPLOIEMENT
**Objectif**: Site sécurisé et déployé en production

**Compétences requises**:

#### 8.1 Sécurité
- ✅ Variables d'environnement (.env.local):
  - NEXT_PUBLIC_SANITY_PROJECT_ID
  - SANITY_API_TOKEN
  - RESEND_API_KEY
  - NEXT_PUBLIC_GA_ID
  - BREVO_API_KEY
- ✅ CORS configuré sur Sanity
- ✅ Headers de sécurité (next.config.js):
  - Content-Security-Policy
  - X-Frame-Options
  - X-Content-Type-Options
- ✅ Protection CSRF sur formulaires
- ✅ Rate limiting API routes
- ✅ Validation serveur (Zod)

#### 8.2 Déploiement Vercel
- ✅ Connexion GitHub repo
- ✅ Preview deployments automatiques
- ✅ Environment variables configurées
- ✅ Domaine personnalisé (csbie.org)
- ✅ SSL automatique
- ✅ Analytics Vercel activées

#### 8.3 Sanity Cloud
- ✅ Projet Sanity créé
- ✅ Dataset "production" configuré
- ✅ Webhooks vers Vercel pour revalidation
- ✅ CORS autorisé pour domaine

---

### 9. INTÉGRATIONS TIERCES
**Objectif**: Services externes fonctionnels

**Compétences requises**:
- ✅ **Google Maps API**:
  - Embed iframe responsive
  - Marqueur personnalisé CSBIE
  - Liens directions
- ✅ **Google Analytics 4**:
  - Via @next/third-parties
  - Tracking pages vues
  - Événements formulaires
- ✅ **WhatsApp Button**:
  - Bouton flottant en bas à droite
  - Lien vers +237 697 849 968
  - Animation smooth
- ✅ **Newsletter API**:
  - Mailchimp ou Brevo
  - Endpoint API sécurisé
  - Confirmations email

---

### 10. TESTING & QA
**Objectif**: Site sans bugs et performant

**Compétences requises**:
- ✅ **Browser Automation Antigravity**:
  - Tester tous les formulaires
  - Vérifier navigation entre pages
  - Tester responsive (mobile/tablet/desktop)
  - Screenshots avant/après
  - Self-healing des bugs détectés
- ✅ **Lighthouse Audits**:
  - Performance >90
  - Accessibility >90
  - Best Practices >90
  - SEO >90
- ✅ **Tests manuels**:
  - Tous les liens fonctionnels
  - PDFs téléchargeables
  - Formulaires soumis
  - CMS Sanity opérationnel

---

### 11. DOCUMENTATION & FORMATION
**Objectif**: Client autonome sur Sanity Studio

**Compétences requises**:
- ✅ **Guide utilisateur PDF** (15-20 pages):
  - Comment se connecter à /studio
  - Modifier les pages existantes
  - Ajouter des membres staff
  - Uploader des PDFs
  - Gérer les témoignages
  - Publier des actualités
  - Ajouter des résultats d'examens
  - Screenshots annotés en français
- ✅ **Vidéo formation 30min**:
  - Enregistrement écran
  - Voix-off en français
  - Chapitres horodatés
  - Cas d'usage pratiques
- ✅ **README.md GitHub**:
  - Installation locale
  - Variables d'environnement
  - Scripts npm/pnpm
  - Architecture projet
  - Commandes utiles
  - Contact support

---

## 🎯 RÉSUMÉ DES SKILLS ANTIGRAVITY

### Skills prioritaires pour un site à 3000€:

1. **Agent Manager (Planning & Orchestration)** ⭐⭐⭐⭐⭐
   - Plan approuvable avant codage
   - Gestion multi-agents (Architect, Coder, Reviewer)
   - Compréhension cahier des charges complexe

2. **Next.js 14 App Router Mastery** ⭐⭐⭐⭐⭐
   - Routes imbriquées
   - Metadata API
   - ISR + SSR + SSG
   - Image optimization

3. **Sanity CMS v3 Expertise** ⭐⭐⭐⭐⭐
   - 14 schemas personnalisés
   - Studio embarqué
   - GROQ queries
   - Live Preview

4. **Framer Motion Advanced** ⭐⭐⭐⭐⭐
   - Variants réutilisables
   - Scroll animations
   - AnimatePresence
   - Performance optimization

5. **TypeScript + React 18** ⭐⭐⭐⭐⭐
   - Props typées
   - Server Components
   - Client Components
   - Hooks optimisés

6. **Tailwind CSS Custom** ⭐⭐⭐⭐
   - Configuration personnalisée (couleurs, fonts)
   - Classes utilitaires
   - Responsive design
   - Dark mode ready

7. **Forms (React Hook Form + Zod)** ⭐⭐⭐⭐
   - Validation robuste
   - Messages d'erreur FR
   - API routes sécurisées

8. **SEO & Performance** ⭐⭐⭐⭐
   - Score Lighthouse >90
   - Structured data
   - Sitemap dynamique

9. **Browser Automation** ⭐⭐⭐⭐
   - Tests automatisés
   - Screenshots
   - Self-healing

10. **Security Best Practices** ⭐⭐⭐
    - Env variables
    - CORS
    - Rate limiting

---

## 📚 RÉFÉRENCES GITHUB POUR ANTIGRAVITY

### À inclure dans les SKILL.md:

1. **Next.js Examples**:
   - https://github.com/vercel/next.js/tree/canary/examples/cms-sanity
   - https://github.com/vercel/next.js/tree/canary/examples/with-framer-motion

2. **Sanity Templates**:
   - https://github.com/sanity-io/next-sanity
   - https://github.com/sanity-io/sanity-template-nextjs-clean

3. **Animation Libraries**:
   - https://github.com/framer/motion
   - https://github.com/react-spring/react-spring

4. **Form Handling**:
   - https://github.com/react-hook-form/react-hook-form
   - https://github.com/colinhacks/zod

5. **SEO & Performance**:
   - https://github.com/vercel/next-seo
   - https://github.com/GoogleChrome/lighthouse

---

## ✅ CHECKLIST DE LIVRAISON

### Phase 1: Setup & Architecture (Jour 1-2)
- [ ] Projet Next.js 14 initialisé
- [ ] Sanity project créé et configuré
- [ ] Tous les schemas Sanity définis
- [ ] Structure de dossiers complète
- [ ] Charte graphique configurée (Tailwind)

### Phase 2: Composants Core (Jour 3-5)
- [ ] Navbar sticky avec mega-menu
- [ ] Footer multi-colonnes
- [ ] Hero sections avec animations
- [ ] Cards réutilisables (staff, sports, activities)
- [ ] Formulaires (contact + admission)

### Phase 3: Pages Principales (Jour 6-9)
- [ ] Page Accueil complète
- [ ] Pages Établissement + Staff + Résultats
- [ ] Page Académie Sports + sous-pages
- [ ] Page Cambridge bilingue
- [ ] Pages Admission + Frais + Contact

### Phase 4: CMS & Intégrations (Jour 10-11)
- [ ] Sanity Studio opérationnel en FR
- [ ] Live Preview configuré
- [ ] Formulaires connectés (Resend)
- [ ] Newsletter (Mailchimp/Brevo)
- [ ] Google Maps + Analytics

### Phase 5: SEO & Performance (Jour 12-13)
- [ ] Metadata dynamiques toutes pages
- [ ] Structured data (Schema.org)
- [ ] Sitemap.xml généré
- [ ] Images optimisées (next/image)
- [ ] Score Lighthouse >90

### Phase 6: Tests & Déploiement (Jour 14-15)
- [ ] Browser automation tests réussis
- [ ] Tests responsive (mobile/tablet/desktop)
- [ ] Déploiement Vercel production
- [ ] Domaine csbie.org configuré
- [ ] SSL actif

### Phase 7: Documentation (Jour 16-17)
- [ ] Guide utilisateur PDF complet
- [ ] Vidéo formation 30min enregistrée
- [ ] README GitHub détaillé
- [ ] Accès repo GitHub fourni

---

## 🚀 POURQUOI CE SITE VAUT 3000€

### Critères de valeur professionnelle:

1. **Design sur-mesure** (700€)
   - Charte graphique institutionnelle
   - 20+ composants React personnalisés
   - Animations Framer Motion premium

2. **Architecture technique avancée** (800€)
   - Next.js 14 App Router
   - TypeScript strict
   - ISR + SSR optimisés
   - Score Lighthouse >90

3. **CMS Headless complet** (600€)
   - 14 types de documents Sanity
   - Studio en français
   - Live Preview intégré
   - 100% éditable par client

4. **11 pages + sous-pages** (500€)
   - Contenu riche et structuré
   - SEO optimisé par page
   - Responsive parfait
   - Accessibilité WCAG AA

5. **Intégrations fonctionnelles** (200€)
   - Formulaires validés (contact + admission)
   - Newsletter automatisée
   - Google Maps + Analytics
   - WhatsApp button

6. **Formation & Documentation** (200€)
   - Guide PDF illustré
   - Vidéo 30min
   - Support 1 mois

**TOTAL: 3000€** ✅

---

## 💡 NOTES IMPORTANTES POUR ANTIGRAVITY

### Ce que l'agent doit ABSOLUMENT faire:

1. ✅ **Lire et comprendre TOUT le fichier paste.txt** (59k caractères)
2. ✅ **Créer un plan détaillé AVANT de coder** (Agent Manager)
3. ✅ **Respecter la charte graphique à 100%** (couleurs + typographies)
4. ✅ **Générer des composants TypeScript STRICTS** (pas de "any")
5. ✅ **Tester dans le browser intégré** avant validation
6. ✅ **Optimiser les images** (next/image + Sanity CDN)
7. ✅ **Ajouter des commentaires en français** dans le code
8. ✅ **Documenter chaque étape** (logs clairs)

### Ce que l'agent NE doit PAS faire:

1. ❌ **NE PAS ignorer des sections** du cahier des charges
2. ❌ **NE PAS utiliser de données fake** (tous les textes sont fournis)
3. ❌ **NE PAS créer de routes non spécifiées**
4. ❌ **NE PAS utiliser de bibliothèques non listées** dans le stack
5. ❌ **NE PAS déployer sans tests** complets
6. ❌ **NE PAS sauter la documentation** utilisateur

---

## 🎓 FORMATION ANTIGRAVITY RECOMMANDÉE

Avant de lancer le projet, s'assurer que l'agent a accès à:

1. **Documentation officielle**:
   - Next.js 14 App Router docs
   - Sanity v3 docs
   - Framer Motion docs
   - React Hook Form + Zod docs

2. **Exemples de référence**:
   - Sites d'écoles premium (cf. web:32, web:35)
   - Templates Next.js + Sanity (cf. web:11, web:22)

3. **Best practices**:
   - SEO Next.js (cf. web:25, web:30, web:34)
   - Animations performantes (cf. web:23, web:28, web:33)
   - Accessibilité WCAG AA (cf. web:12, web:16)

---

## 📞 SUPPORT & MAINTENANCE

### Post-livraison (inclus):
- ✅ 1 mois de support email
- ✅ Corrections de bugs critiques
- ✅ Aide Sanity Studio (questions client)

### Maintenance optionnelle (facturable):
- Ajout de nouvelles pages
- Nouvelles fonctionnalités
- Mises à jour Next.js/Sanity
- Support téléphonique

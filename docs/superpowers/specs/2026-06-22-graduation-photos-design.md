# Spécification de Conception : Section Graduation et Galerie Filtrée

## Description du Projet
Intégration de nouvelles photos de la cérémonie de graduation promotion 2025/2026 au sein du site internet du Complexe Scolaire Bilingue International Espérance (CSBIE).

Cette mise à jour comprend :
1. L'ajout d'une section attractive sur la page d'accueil présentant les moments phares de la graduation.
2. L'intégration de toutes les photos de graduation dans la galerie existante sur la page des Activités Périscolaires, avec l'implémentation d'un système de filtrage par catégories pour faciliter la navigation.

## Modifications Proposées

### 1. Organisation des Ressources d'Images
Les photos issues du dossier `new` seront copiées et renommées dans le dossier `public/images/graduation/` :
* `new/WhatsApp Image 2026-06-20 at 22.45.03.jpeg` ➔ `public/images/graduation/graduation-group-1.jpg`
* `new/WhatsApp Image 2026-06-20 at 22.45.04.jpeg` ➔ `public/images/graduation/graduation-group-2.jpg`
* `new/WhatsApp Image 2026-06-20 at 22.45.05.jpeg` ➔ `public/images/graduation/graduation-admin.jpg`
* `new/WhatsApp Image 2026-06-20 at 22.45.06.jpeg` ➔ `public/images/graduation/graduation-student.jpg`

### 2. Page d'Accueil (`src/app/page.tsx`)
Ajout d'un composant de section `<GraduationSection />` entre la section **Mot de la Fondatrice** et **4 Piliers**.
* **Contenu** :
  * Titre : "Graduation Promotion 2025/2026"
  * Sous-titre : "Le couronnement de l'excellence académique"
  * Description : Un court texte célébrant la réussite des élèves et leur envolée vers de nouveaux défis.
  * Grille Asymétrique : Affichage de 3 images clés avec des animations au survol (hover scale-105 shadow-xl) et un effet de transition Framer Motion au scroll.
  * Bouton d'action : "Voir toute la galerie" redirigeant vers `/activites-periscolaires#galerie?filter=graduation`.

### 3. Page Activités Périscolaires (`src/app/activites-periscolaires/page.tsx`)
Amélioration de la galerie pour supporter le filtrage dynamique.
* **Barre d'onglets** : 
  * "Tous" (23 photos au total)
  * "Activités Périscolaires" (19 photos d'activités existantes)
  * "Graduation 2025/2026" (4 nouvelles photos)
* **Comportement dynamique** :
  * Détection automatique du paramètre URL `?filter=graduation` lors du chargement de la page pour activer l'onglet Graduation et défiler directement jusqu'à la section galerie (`#galerie`).
  * Utilisation de Framer Motion pour des transitions fluides lors du changement de filtre.

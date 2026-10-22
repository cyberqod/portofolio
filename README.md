# Portfolio — Kemela Essozolim Léonardo

Site portfolio construit avec Next.js, TypeScript, Tailwind CSS, MDX, Framer Motion et Lucide.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000).

## Où modifier le contenu

- **`data/site.ts`** — toutes tes infos : nom, bio, email, WhatsApp, GitHub, LinkedIn, compétences,
  et la liste des projets. C'est le fichier le plus important à tenir à jour.
- **`components/Hero.tsx`** — le texte d'intro qui s'affiche en haut du site.
- **`components/About.tsx`** — le texte "À propos".
- **`app/journal/`** — tes articles. Chaque article est un dossier avec un fichier `page.mdx`.
  Pour en ajouter un : crée `app/journal/mon-titre/page.mdx`, puis ajoute une entrée dans
  `app/journal/page.tsx`.

### À faire avant de publier

- [ ] Remplacer les liens GitHub / LinkedIn placeholders dans `data/site.ts`
- [ ] Vérifier/ajuster les tags de stack technique des deux projets dans `data/site.ts`
  (marqués `// TODO` — mets les vraies technologies utilisées si tu t'en souviens)
- [ ] Ajouter une vraie photo si tu veux remplacer les initiales (`profile.initials`)
- [ ] Ajouter tes prochains projets au tableau `projects`

## Déployer en ligne (gratuit)

La méthode la plus simple avec ce type de projet :

1. Crée un compte sur [vercel.com](https://vercel.com) (tu connais déjà, tu l'as utilisé pour
   le site de ton pote)
2. Pousse ce dossier sur un dépôt GitHub
3. Sur Vercel : "Add New Project" → importe le dépôt → clique sur "Deploy"

Ton portfolio sera en ligne en quelques minutes, avec une URL du type
`ton-nom.vercel.app`.

## Structure du projet

```
app/                 pages (App Router)
  layout.tsx         polices + métadonnées
  page.tsx           page d'accueil
  journal/           articles MDX
components/          sections du site (Hero, About, Skills, Projects, Contact...)
components/ui/       composants réutilisables (Button, Badge)
data/site.ts         tout ton contenu, centralisé
lib/utils.ts         fonction utilitaire pour les classes Tailwind
```

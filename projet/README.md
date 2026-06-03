# Recettes - Application React avec faux backend

Cette application React/Vite permet de visualiser des recettes, d’en consulter le détail et d’en ajouter de nouvelles. Elle utilise `json-server` comme faux backend local.

## 1. Vue d’ensemble

Le projet est organisé comme une petite SPA (Single Page Application) avec :
- une page d’accueil pour lister les recettes,
- une page de détail pour voir une recette précise,
- une page d’ajout pour créer une nouvelle recette,
- une page 404 si l’URL n’existe pas.

Les données viennent du fichier `db.json`, qui simule une base de données JSON accessible via l’API locale.

---

## 2. Structure du projet

- `src/App.jsx` : point d’entrée de l’application et configuration du routeur.
- `src/components/` : composants réutilisables pour l’interface.
- `src/pages/` : pages principales de l’application.
- `db.json` : données de test pour `json-server`.
- `package.json` : scripts de démarrage et dépendances.

---

## 3. Explication des composants et pages

### `src/App.jsx`
Ce fichier initialise l’application.

Il fait principalement :
- importer `BrowserRouter`, `Routes` et `Route` depuis `react-router-dom`,
- afficher la barre de navigation avec `Navbar`,
- définir les routes suivantes :
  - `/` → page d’accueil (`Home`)
  - `/ajouter` → page d’ajout (`AjouterRecette`)
  - `/recette/:id` → page de détail (`DetailRecette`)
  - `*` → page d’erreur 404 (`NotFound`)

### `src/components/Navbar.jsx`
Ce composant affiche la navigation principale.

Il contient :
- un lien vers la page d’accueil,
- un lien vers la page « Ajouter une recette ».

Il sert à permettre la navigation entre les pages sans recharger l’application.

### `src/components/RecipeCard.jsx`
Ce composant affiche une carte de recette dans la liste d’accueil.

Il reçoit une prop `recette` et affiche :
- l’image de la recette,
- son titre,
- un lien « Voir le détail » qui redirige vers la page de détail avec l’ID correspondant.

---

## 4. Explication des pages

### `src/pages/Home.jsx`
C’est la page d’accueil.

Elle fait ce qui suit :
- initialise `recettes`, `loading` et `error` avec `useState`,
- utilise `useEffect` au chargement pour appeler l’API :
  - `GET http://localhost:4000/recettes`
- si la requête réussit, elle stocke les données dans `recettes`,
- si elle échoue, elle affiche un message d’erreur,
- enfin, elle affiche la liste des recettes sous forme de cartes `RecipeCard`.

### `src/pages/DetailRecette.jsx`
C’est la page de détail d’une recette.

Elle utilise :
- `useParams()` pour récupérer l’ID dans l’URL (`/recette/:id`),
- `useState()` pour stocker la recette, le chargement et les erreurs,
- `useEffect()` pour faire un appel API :
  - `GET http://localhost:4000/recettes/:id`

Elle gère aussi :
- un cas « recette non trouvée » si l’ID n’existe pas,
- un retour à l’accueil avec `Link`.

### `src/pages/AjouterRecette.jsx`
C’est la page qui permet de créer une nouvelle recette.

Elle contient :
- un formulaire avec les champs :
  - `otitre`
  - `oingredients`
  - `oinstructions`
  - `oimageUrl`
- un état `form` avec `useState()` pour stocker les valeurs saisies,
- un état `loading` pour désactiver le bouton pendant l’envoi,
- un état `error` pour afficher les erreurs de validation ou de réseau.

Son fonctionnement est :
1. l’utilisateur remplit le formulaire,
2. au clic sur « Publier », la fonction `handleSubmit()` vérifie les champs obligatoires,
3. elle envoie une requête POST vers :
   - `POST http://localhost:4000/recettes`
4. si l’ajout est réussi, elle redirige vers la page d’accueil avec `useNavigate()`.

### `src/pages/NotFound.jsx`
C’est la page affichée quand l’URL demandée n’existe pas.

Elle affiche simplement :
- un message « Page non trouvée »,
- un lien de retour à l’accueil.

---

## 5. Hooks utilisés

### `useState()`
Utilisé pour gérer les états locaux dans les pages :
- liste des recettes,
- données du formulaire,
- chargement,
- erreurs,
- recette courante.

### `useEffect()`
Utilisé pour exécuter des actions au chargement ou quand une dépendance change :
- chargement des recettes depuis l’API,
- chargement d’une recette par son ID,
- nettoyage de la requête si le composant est démonté.

### `useParams()`
Utilisé dans `DetailRecette.jsx` pour lire l’ID dans l’URL.

### `useNavigate()`
Utilisé dans `AjouterRecette.jsx` pour rediriger l’utilisateur après l’ajout d’une recette.

---

## 6. API utilisée

Le faux backend est démarré avec `json-server` sur le port `4000`.

### Base URL
`http://localhost:4000`

### Endpoints disponibles
- `GET /recettes` → retourne toutes les recettes
- `GET /recettes/:id` → retourne une recette précise
- `POST /recettes` → ajoute une nouvelle recette

### Structure des données
Chaque recette contient :
- `id` : identifiant unique
- `otitre` : titre de la recette
- `oingredients` : liste des ingrédients
- `oinstructions` : étapes de préparation
- `oimageUrl` : URL de l’image

Ces noms sont utilisés tel quel dans `db.json`.

---

## 7. Router React

Le routeur est configuré dans `src/App.jsx` avec `react-router-dom`.

Routes principales :
- `/` → `Home`
- `/ajouter` → `AjouterRecette`
- `/recette/:id` → `DetailRecette`
- `*` → `NotFound`

Le composant `Navbar` utilise aussi des liens `Link` pour naviguer sans recharger la page.

---

## 8. Comment démarrer le projet

### 1. Installer les dépendances
```bash
cd projet
npm install
```

### 2. Lancer le faux backend
```bash
npm run json-server
```

### 3. Lancer l’application React
Dans un autre terminal :
```bash
npm run dev
```

---

## 9. Résumé rapide

- `Home` charge les recettes.
- `RecipeCard` affiche une recette dans la liste.
- `DetailRecette` montre le détail d’une recette.
- `AjouterRecette` permet d’en créer une nouvelle.
- `Navbar` permet de naviguer entre les pages.
- `json-server` fournit les données et les endpoints API.
- `react-router-dom` gère la navigation entre les pages.


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

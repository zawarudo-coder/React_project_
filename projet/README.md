# Recettes - Application React (faux backend)

Petite SPA React pour lister, consulter et ajouter des recettes en utilisant `json-server` comme faux backend.

Prerequis
- Node.js 14+ et npm

Installer et démarrer

```bash
cd projet
npm install
# Démarrer json-server (port 4000)
npm run json-server
# Dans un autre terminal, démarrer l'app React
npm run dev
```

API
- Base URL: `http://localhost:4000/recettes`
- GET `/recettes` - liste
- GET `/recettes/{id}` - détail
- POST `/recettes` - ajouter

Structure importante
- `src/components` - `Navbar.jsx`, `RecipeCard.jsx`
- `src/pages` - `Home.jsx`, `DetailRecette.jsx`, `AjouterRecette.jsx`, `NotFound.jsx`
- `db.json` - données pour `json-server`

Notes
- Les champs utilisés pour chaque recette: `otitre`, `oingredients`, `oinstructions`, `oimageUrl`.
- Si vous souhaitez que le backend utilise `oid` à la place de `id`, je peux adapter le code.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

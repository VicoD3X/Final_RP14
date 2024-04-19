# React + Vite

Projet Final d'OC (P14) 

-------------------------------------------------------------------------


Ce modèle offre une configuration minimale pour utiliser React avec Vite, incluant le Hot Module Replacement (HMR) et quelques règles ESLint.

Actuellement, deux plugins officiels sont disponibles :

@vitejs/plugin-react utilise Babel pour le Fast Refresh.
@vitejs/plugin-react-swc utilise SWC pour le Fast Refresh.


-------------------------------------------------------------------------

## Structure du Projet

Le projet est divisé en plusieurs dossiers principaux :

- `src/`: Contient le code source de l'application.
  - `components/`: Composants réutilisables de React.
  - `pages/`: Composants spécifiques à chaque page.
  - `store/`: Pour la gestion d'état (Redux si utilisé).
  - `services/`: Logique de gestion des appels API.
  - `styles/`: Feuilles de style pour l'application.

- `public/`: Fichiers statiques comme l'index.html.
  - `index.html`: Page HTML racine servant de point d'entrée à l'application.

- `gitignore`: Fichier spécifiant les fichiers à ignorer par Git. 
- `package.json`: Fichier de gestion des dépendances et scripts npm.
- `vite.config.js`: Configuration spécifique pour Vite.


-------------------------------------------------------------------------

## Installation

Pour configurer le projet localement, suivez ces étapes :

1. Clonez le dépôt : "git clone https://github.com/VicoD3X/Final_RP14"
2. Accédez au répertoire du projet : "cd hrnet-react"
3. Installez les dépendances npm : "npm install"
4. Lancez le serveur de développement : "npm run dev"


-------------------------------------------------------------------------

## Contribuer

Pour contribuer à ce projet, veuillez suivre les étapes suivantes :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/NouvelleFonctionnalité`).
3. Faites vos changements et committez-les (`git commit -am 'Ajout de quelques fonctionnalités'`).
4. Poussez la branche (`git push origin feature/NouvelleFonctionnalité`).
5. Créez une nouvelle Pull Request.


-------------------------------------------------------------------------

## Scripts disponibles

Dans ce projet, vous pouvez exécuter les commandes suivantes :

- `npm run dev` : Lance le serveur de développement avec hot reload.
- `npm run build` : Construit l'application pour la production.
- `npm run test` : Exécute les tests unitaires.

-------------------------------------------------------------------------

## Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

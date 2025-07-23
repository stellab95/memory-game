# 🧩 Memory Game React

Un petit jeu de Memory réalisé en **React** avec **ViteJS**, pour s’entraîner aux bases de React, à la gestion d’état, aux interactions utilisateur et au rendu dynamique.

---

## 📖 Description

Ce projet est un jeu de Memory où l'on doit retrouver des paires de cartes identiques en les retournant deux par deux. Il a été développé étape par étape pour apprendre à manipuler React, gérer l’état avec des hooks, gérer des interactions et afficher des animations.

---

## 🚀 Fonctionnalités

- Création d’un deck de cartes avec des doublons
- Mélange aléatoire des cartes (fonction shuffle)
- Affichage des cartes sous forme de grille
- Retourner une carte au clic (face visible / face cachée)
- Affichage de la valeur de la carte au clic
- Compteur de clics ne comptant que les clics sur cartes non retournées
- Retour automatique face cachée des 2 cartes retournées après 1000ms
- Enregistrement des paires trouvées pour ne pas les retourner à nouveau
- Confettis (via la librairie `react-confetti`) déclenchés en cas de victoire
- Bouton pour relancer une partie

---

## 🧑‍💻 Installation

```bash
# Cloner le dépôt  
git clone git@github.com:stellab95/memory-game.git

# Installer les dépendances
npm install

# Lancer le projet en mode développement
npm run dev

Ouvrir http://localhost:3000 dans votre navigateur
```
---
## 📂 Structure du projet

```
memory-game/
├── src/App.jsx
├── src/assets/ 
├── src/index.css  
└── vite.config.js  
```
---

## 🏗️ Pistes d’amélioration

- Refaire le projet en POO
- Ajouter plus d’animations et une meilleure UX/UI
- Intégrer TypeScript pour la typage statique
- Ajouter un classement avec scores et temps
- Ajouter un mode multijoueur ou un bot pour jouer à deux
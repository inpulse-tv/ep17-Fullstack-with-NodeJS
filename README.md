# Fullstack with Node.js

Ce dépôt contient le code source relatif à l'épisode 17 de notre chaîne [inpulse.tv](https://www.inpulse.tv) dédié à l'environnement d'exécution **Node.js** :
- [Fullstack with Node.js  - [NodeJS partie.3]  [1ntro]  [#devtech]  [ep.17]](https://www.youtube.com/watch?v=BJNoyVIdsdw)

Il contient le code source permettant de réaliser et suivre le tutoriel de la vidéo.

Le contenu se partage en deux projets :
- Un dossier ``backend`` proposant une API sous Node.js montée sur le port 8000.
- Un dossier ``frontend`` contenant une application Web basée sur celle proposée depuis le site [sandwichpouletmayonnaise.com](https://sandwichpouletmayonnaise.com/)

Pour comprendre le contenu de chaque projet il vous suffit de suivre les instructions de l'épisode sur notre chaîne [inpulse.tv](https://www.inpulse.tv).

## Installation
Pour télécharger et installer le code source de l'épisode il suffit d'exécuter la commande suivante dans un terminal Bash ou Powershell depuis le dossier de destination :
```bash
git clone https://github.com/inpulse-tv/ep17-Fullstack-with-NodeJS.git
```
Vous devez ensuite installer les dépendances pour chacun des projets en lancant respectivement dans chaque dossier ``backend`` et ``frontend`` la commande Shell suivante :
```bash
npm i
```
Une fois l'installation des dépendances terminée, vous pouvez exécuter dans chaque dossier la commande :
```bash
npm start
```
Vous aurez une API consultable en local sur le port 8000 via l'URL : http://localhost:8000.
L'API ne propose qu'un seul endpoint : ``api/entreesdujour``

Un site web sera également lancé dans votre navigateur via l'adresse : http://localhost:9000 (Ne nous tenez pas rigueur du design 😃 )

### Base de données
Ce projet utilise comme source de données la base **sqlite3** ``pouletmayo.db``, disponible dans le dossier ``sqlite3`` de ce dépôt Git.

Pour savoir comment installer et utiliser la base **sqlite3**, veuillez suivre le tutoriel suivant :
- [Premiers pas sur SQL - [SQL partie.1] [n00b] [#data] [ep.3]](https://www.youtube.com/watch?v=_ALsx-CMyy8)

Bonne installation et à bientôt sur [inpulse.tv](https://www.inpulse.tv).

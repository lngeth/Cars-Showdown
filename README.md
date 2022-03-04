# Site web : Cars Showdown :car:

## Description

Site vitrine de quelques voitures mockées au sein du projet.  
L'objectif est d'expérimenter les fonctionnalités possibles avec VueJS.

## Installation

1. Cloner le projet sur votre machine
2. Ouvrer le dossier avec votre IDE préféré
3. Ouvrer 2 terminals à la racine du projet
4. Dans le premier terminal, lancer la commande suivante :
```text
json-server listCars.json
-- Cela permet de lancer le serveur avec la BDD --
```
5. Dans le deuxième terminal, lancer la commande suivante :
```text
npm install
-- Cela va installer toutes les dépendances nécessaires pour le projet --
```
6. Un lien sera disponible dans le terminal, cliquer dessus (un navigateur s'ouvrira)
7. Essayer.


## Fonctionnalités du site
Des fonctionnalités de recherche en fonction de critères des voitures ont été mises en place :
- **_Mode sélection_** : toutes les voitures répondant **au moins à un** des critères sélectionnés seront affichéss.
- **_Mode critères_** : toutes les voitures répondant **à tous** les critères sélectionnés seront affichées.

Toutes les données sont mockés au sein d'un fichier **JSON** afin de se concentrer uniquement sur la partie Front et non Back. 

## Modules utilisés
- __JSON-server__ : pour la simulation d'un Back-end
- __Axios__ : pour les requètes HTTP sur le serveur JSON
- __Vue-router__ : pour la gestion des routes
- __Bootstrap CSS/JS__ : pour le visuel du site

## Contexte de la réalisation du projet

Ce site a été réalisé dans le cadre d'un test de recrutement.  
Les images récupérées ont uniquement un but éducatif et non commercial.

// projet-mock.ts
import {Projet} from './projet'
let lastId = 0;
export const PROJETS : Projet[]=[
    {
        id: lastId,
        titre: "GDM Art",
        image: "assets/Projet_roll.png",
        technologie: "HTML - CSS - JavaScript",
        description: "(Stage) Site statique présentant les oeuvres de l'artiste - Diaporama",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2005
    },
    {
        id: ++lastId,
        titre: "Restaurant",
        image: "assets/compute.png",
        technologie: "Java - MySQL",
        description: "(Exercice) Création d'une base de données - Sous Java Swing, Création d'une fenêtre avec Suppression, Modification et Ajout de clients pour un restaurant",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2017
    },
    {
        id: ++lastId,
        titre: "Réalisation d'un morpion",
        image: "assets/compute.png",
        technologie: "Java Fx",
        description: "(Exercice) Création d'un morpion sous JavaFx",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2017
    },
    {
        id: ++lastId,
        titre: "Jeu du 21",
        image: "assets/compute.png",
        technologie: "Java",
        description: "(Exercice) Jeu du 21 à 2 joueurs ou contre l'IA - Récapitulatif des scores dans un fichier txt",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2017
    },
    {
        id: ++lastId,
        titre: "Boutique en PHP",
        image: "assets/compute.png",
        technologie: "PHP - MySQL - HTML - CSS - Bootstrap - JQuery",
        description: "(Exercice) Création d'une boutique en ligne de produits - Formulaire d'inscription et de connexion - Possibilité de filtrer les produits et de faire une recherche - Ajouter un produit au panier - Paiement autorisé si connecté",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2000
    },
    {
        id: ++lastId,
        titre: "API Node.js",
        image: "assets/Projet_roll.png",
        technologie: "API avec Node JS",
        description: "(Exercice) Gestion d'un hôtel - Création d'une API de réservation de chambre d'hôtel - Tests réalisés avec Insomnia",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2005
    },
    {
        id: ++lastId,
        titre: "Site Web SRVideo",
        image: "assets/Projet_roll.png",
        technologie: "PHP - MySQL - HTML - Bootstrap - CSS - JS - JQuery",
        description: "(Stage) Application web en PHP pour SRVidéo - Formulaire d'inscription et de connexion sécurisé - Stockage des mots de passe cryptés - Possibilité pour l'administrateur d'ajouter, modifier et supprimer des publications multimédia",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2019
    },
    {
        id: ++lastId,
        titre: "Association Blb",
        image: "assets/Projet_roll.png",
        technologie: "C#.net - TSQL - AJAX - HTML - Bootstrap - CSS - JS - JQuery",
        description: "(Stage) Application Web sur Visual Studio en C# ASP.NET pour l'association BLB - BDD sous SQL Server - Formulaire d'inscription et de connexion sécurisé - Personnaliser le message d'accueil - Ajouter, modifier et supprimer événements, publications et contenu multimédia - Propositions de contenu validées par l'administrateur",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2020
    },
    {
        id: ++lastId,
        titre: "Application Mobile météo",
        image: "assets/compute.png",
        technologie: "API - Java - Android Studio",
        description: "(Exercice) Application mobile sous Android Studio utilisant une API météo existante - Possibilité de choisir la ville pour voir la météo",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2022
    },
    {
        id: ++lastId,
        titre: "Projet de formation Epsi",
        image: "assets/compute.png",
        technologie: "SpringBoot - Angular - Android Studio",
        description: "Projet de simulation pour une école - API réalisée sous SpringBoot - Base de données sous DBeaver - Application Web sous Angular permettant aux élèves de voir les dates d'examens et leurs notes - Possibilité pour les professeurs d'ajouter corrections et notes aux examens - Application mobile sous Android Studio permettant aux surveillants de lancer un chronomètre pour chaque examen",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2022
    },
    {
        id: ++lastId,
        titre: "API de skaters",
        image: "assets/ordi.jpg",
        technologie: "NodeJS",
        description: "(Exercice) Création d'une API de skaters - Gestion d'erreurs - Tests sur Insomnia - Ajout, mise à jour et suppression d'un skater",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2024
    },
    {
        id: ++lastId,
        titre: "Appli web de skaters",
        image: "assets/ordi.jpg",
        technologie: "Angular",
        description: "(Exercice) Application Web - Présentation de skaters - Ajout, mise à jour et suppression d'un skater - Recherche de skaters par nom ou prénom",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2024
    },
    {
        id: ++lastId,
        titre: "Portfolio",
        image: "assets/ordi.jpg",
        technologie: "Angular - ThreeJS",
        description: "Application Web avec présentation de mes compétences - Présentation de mes projets - Présentation de mes loisirs - Formulaire pour me contacter",
        lien: "https://melcyril.github.io/youyou/",
        showDetail: false,
        detailsVisible: false,
        date:2024
    },
    
    
    // Ajoutez d'autres projets ici...
];
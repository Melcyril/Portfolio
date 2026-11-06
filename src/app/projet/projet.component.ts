
import { Component, ElementRef, OnInit } from '@angular/core';

import { PROJETS } from '../../shared/projet-mock';
import { Projet } from '../../shared/projet';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styles: [],
  animations: [
    trigger('fadeInOut', [

      state('void', style({
        opacity: 0
      })),

      state('*', style({
        opacity: 1
      })),

      transition('void <=> *', animate('400ms ease-in-out'))

    ])
  ]
})

export class ProjetComponent implements OnInit {

  constructor(private el: ElementRef) {}

  mesProjets: Projet[] = PROJETS;

  // Index du projet actuellement affiché
  startIndex = this.mesProjets.length - 1;

  suivantIndex = this.startIndex + 1;

  opacityProjet = 1;

  altMessageNext = '';

  indexOuvert: number = -1;

  tremble = false;

  showBtn = false;

  ngOnInit(): void {

    console.table(this.mesProjets);

    this.actualiserIndex();

  }

  /* ==========================================
     ACTUALISATION DES INDEX
  ========================================== */

  actualiserIndex(): void {

    this.suivantIndex = this.startIndex + 1;

    this.altMessageNext =
      'Projet ' + (this.startIndex + 1) +
      ' - Projet ' + (this.suivantIndex + 1);

  }

  /* ==========================================
     ANIMATION DU BOUTON FERMER
  ========================================== */

  ajouterTremble(): void {

    this.tremble = true;

  }

  retirerTremble(): void {

    this.tremble = false;

  }

  /* ==========================================
     AFFICHAGE DES DÉTAILS
  ========================================== */

  afficherDetails(projet: Projet): void {

    this.indexOuvert = projet.id;

    // Un seul projet peut avoir ses détails ouverts.

    this.mesProjets.forEach((p) => {

      p.detailsVisible = p.id === projet.id;

    });

    // Attend l'affichage du bloc par Angular.

    setTimeout(() => {

      const details = this.el.nativeElement.querySelector(
        '.details-projet'
      );

      details?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }, 100);

  }

  /* ==========================================
     FERMETURE DES DÉTAILS
  ========================================== */

  fermerDetails(projet: Projet): void {

    this.tremble = false;

    // Angular gère la suppression grâce au *ngIf.

    this.mesProjets.forEach((p) => {

      p.detailsVisible = false;

    });

    this.indexOuvert = -1;

    // Retour vers la section des projets.

    const scrollProjet = document.getElementById('projet');

    scrollProjet?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }

  /* ==========================================
     FERMETURE DE TOUS LES DÉTAILS
  ========================================== */

  private fermerTousLesDetails(): void {

    this.mesProjets.forEach((projet) => {

      projet.detailsVisible = false;

    });

    this.indexOuvert = -1;

    this.tremble = false;

  }

  /* ==========================================
     ANIMATION DU CHANGEMENT DE PROJET
  ========================================== */

  private animerChangementProjet(): void {

    this.opacityProjet = 0;

    setTimeout(() => {

      this.opacityProjet = 1;

    }, 250);

  }

  /* ==========================================
     PROJET SUIVANT
  ========================================== */

  showNextProjets(): void {

    if (this.startIndex >= this.mesProjets.length - 1) {

      return;

    }

    this.fermerTousLesDetails();

    this.animerChangementProjet();

    this.startIndex++;

    this.actualiserIndex();

  }

  /* ==========================================
     PROJET PRÉCÉDENT
  ========================================== */

  showPreviousProjets(): void {

    if (this.startIndex <= 0) {

      return;

    }

    this.fermerTousLesDetails();

    this.animerChangementProjet();

    this.startIndex--;

    this.actualiserIndex();

  }

  /* ==========================================
     SÉLECTION D'UN PROJET
  ========================================== */

  selectProjet(projet: Projet): void {

    console.log(`click sur le projet -> ${projet.titre}`);

  }

}

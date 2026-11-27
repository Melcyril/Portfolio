
import {
  Component,
  HostListener,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { PROJETS } from '../../shared/projet-mock';
import { GlobalService } from '../global.service';
import { environment } from "../../environments/environnement";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(private globalService: GlobalService) {}

  monTitreSite: string = environment.titresite_;

  activeLink: string = 'about';
  showMenu: boolean = false;

  // Transmet la section active au composant parent
  @Output() activeLinkChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.showMenu = window.innerWidth < 600;

    this.updateActiveLink();
      // Transmet également la section active au premier chargement
    this.activeLinkChange.emit(this.activeLink);
  }

  // Gestion de la taille de l'écran
  @HostListener('window:resize')
  onResize(): void {
    this.showMenu = window.innerWidth < 600;
  }

  // Détection de la section active pendant le scroll
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveLink();
  }

  // Met à jour le lien actif et transmet le changement
  setActiveLink(link: string): void {

    if (this.activeLink !== link) {
      this.activeLink = link;

      this.activeLinkChange.emit(link);
    }
  }

  updateActiveLink(): void {

    const sections = [
      { id: 'fullstack', link: 'about' },
      { id: 'skills', link: 'skills' },
      { id: 'projet', link: 'projet' },
      { id: 'interet', link: 'interet' },
      { id: 'contact', link: 'contact' }
    ];

    const scrollPosition = window.scrollY + 150;

    for (const section of sections) {

      const element = document.getElementById(section.id);

      if (element && element.offsetTop <= scrollPosition) {
        this.setActiveLink(section.link);
      }
    }
  }

  // Ouvre ou ferme le menu mobile
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  // Navigation vers une section
  scrollTo(lien: string): void {

    if (lien === 'about' && this.globalService.isScrollAbout === false) {
      lien = 'fullstack';
    }

    const section = document.getElementById(lien);

    if (section) {

      const lienActif = lien === 'fullstack' ? 'about' : lien;

      this.setActiveLink(lienActif);

      const position = section.getBoundingClientRect().top + window.scrollY - 70;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });

      // Ferme le menu sur mobile
      this.showMenu = window.innerWidth < 600;
    }

    // Masque les détails des projets
    for (let i = 0; i < PROJETS.length; i++) {
      PROJETS[i].detailsVisible = false;
    }
  }
}

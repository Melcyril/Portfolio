
import { Component, HostListener, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.showMenu = window.innerWidth < 600;
    this.updateActiveLink();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.showMenu = window.innerWidth < 600;
  }

  // Détecte la section active pendant le défilement
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveLink();
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
        this.activeLink = section.link;
      }
    }
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  scrollTo(lien: string): void {
    if (lien === 'about' && this.globalService.isScrollAbout === false) {
      lien = 'fullstack';
    }

    const section = document.getElementById(lien);

    if (section) {
      this.activeLink = lien === 'fullstack' ? 'about' : lien;

      section.scrollIntoView({
        behavior: 'smooth'
      });

      this.showMenu = window.innerWidth < 600;
    }

    for (let i = 0; i < PROJETS.length; i++) {
      PROJETS[i].detailsVisible = false;
    }
  }
}

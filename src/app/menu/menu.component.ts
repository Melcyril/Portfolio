import { Component, HostListener, OnInit} from '@angular/core';
import { PROJETS } from '../../shared/projet-mock'; 
import { GlobalService } from '../global.service';
import { environment } from "../../environments/environnement"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  constructor(private globalService: GlobalService) {}
  monTitreSite:string=environment.titresite_
  activeLink: string = '';
  showMenu:boolean = false;
  ngOnInit(): void {
    if(this.showMenu = window.innerWidth < 600){
      this.showMenu=this.showMenu!
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showMenu = window.innerWidth < 600; // Met à jour showMenu en fonction de la largeur de l'écran
  }

  toggleMenu() {
    this.showMenu= !this.showMenu;
  }

  scrollTo(lien:string) {
    if(lien=='about'&& this.globalService.isScrollAbout==false){
      lien='fullstack'
    }
    const skillsSection = document.getElementById(lien);
 
    if (skillsSection) {
        this.activeLink =lien
        skillsSection.scrollIntoView({ behavior: 'smooth' });
        this.showMenu= window.innerWidth < 600;
    } 
    for(let i=0;i<PROJETS.length;i++){
      PROJETS[i].detailsVisible=false
    }
  }
}

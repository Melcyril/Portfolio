import { Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { PROJETS } from '../../shared/projet-mock'; 
import {Projet} from '../../shared/projet';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styles: [
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        display:'none'
      })),
      state('void', style({
        display:'block',
        opacity: 0
      })),
      state('*', style({
        display:'block',
        opacity: 1
      })),
      transition('void <=> *', animate(800)),
    ]),
  ]
})
export class ProjetComponent implements OnInit {
  constructor(private renderer2: Renderer2, private el: ElementRef) {}

  mesProjets:Projet[] = PROJETS;
  startIndex = this.mesProjets.length-1;
  suivantIndex= this.startIndex +1
  opacityProjet  = 1;
  altMessageNext="Projet"+this.startIndex.toString+"-"+"Projet"+this.suivantIndex.toString()
  indexOuvert:number=-1
  tremble: boolean = false;
  showBtn:boolean = false;

  ajouterTremble() {
    this.tremble = true;
  }

  retirerTremble() {
    this.tremble = false;
  }
ngOnInit(): void {
    
    console.table(this.mesProjets)
}

  afficherDetails(projet: Projet) {

    this.indexOuvert=projet.id
    for(let i=0;i<this.mesProjets.length;i++){

      if(i==this.indexOuvert){

        this.mesProjets[i].detailsVisible=true
      }else{
        this.mesProjets[i].detailsVisible=false
      }
    }

    //console.log(projet.id+"-id-")
    
  }

  fermerDetails(projet: Projet) {
    this.tremble = false;

    for( let i=0;i<this.mesProjets.length;i++){
      this.mesProjets[i].detailsVisible=false
    }
    const suppDiv=this.el.nativeElement.querySelector('.details-projet')
    this.renderer2.removeChild(this.el.nativeElement,suppDiv);
    //projet.detailsVisible = false;
    const scrollProjet=document.getElementById('projet')
    if(scrollProjet)
    scrollProjet.scrollIntoView({ behavior: 'smooth' });
  }
  //Visuel des 2 prochains projet
  showNextProjets() {
    this.mesProjets[this.startIndex].detailsVisible=false
    this.mesProjets[this.startIndex+1].detailsVisible=false
 

    this.opacityProjet = 0; // Réinitialise l'opacité
    setTimeout(() => {
      this.opacityProjet  = 1; // Met à jour l'opacité après 0,5 seconde
    }, 250);
    this.startIndex += 1;
  }
  //Visuel des 2 prochains avant
  showPreviousProjets() {
    this.mesProjets[this.startIndex].detailsVisible=false
    this.mesProjets[this.startIndex-1].detailsVisible=false
    
 

    this.opacityProjet = 0; // Réinitialise l'opacité
    setTimeout(() => {
      this.opacityProjet  = 1; // Met à jour l'opacité après 0,5 seconde
    }, 250);
    this.startIndex -= 1;
  }
  selectProjet(projet: Projet){
    console.log(`click sur le projet -> ${projet.titre}`)
  }
}

import { Component} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: [
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        visibility:'hidden',
        opacity: 0
      })),
      state('*', style({
        visibility:'visible' ,
        opacity: 1
      })),
      transition('void <=> *', animate(800)),
    ]),
  ]

})

export class AccueilComponent {
}


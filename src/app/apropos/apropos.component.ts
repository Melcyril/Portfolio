
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

@Component({
    selector: 'app-apropos',
    templateUrl: './apropos.component.html',
    styles: [],
    animations: [
        trigger('fadeInOut', [
            state('in', style({ opacity: 1 })),
            state('out', style({ opacity: 0 })),
            transition('in <=> out', animate('600ms ease-in-out'))
        ])
    ]
})
export class AproposComponent {

    showDiv: boolean = false;
    lien: string = '';

    constructor(private globalService: GlobalService) {}

    onToggle(numberButton: number): void {

        this.showDiv = !this.showDiv;

        this.globalService.isScrollAbout =
            !this.globalService.isScrollAbout;

        if (numberButton === 1) {
            this.lien = 'about';
        } else {
            this.lien = 'fullstack';
        }

        const scrollProjet = document.getElementById(this.lien);

        if (scrollProjet) {
            scrollProjet.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

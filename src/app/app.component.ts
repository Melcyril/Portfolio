
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">

      <app-menu
        (activeLinkChange)="onActiveLinkChange($event)">
      </app-menu>

      <div class="backgroundcolor">

        <app-apropos
          [class.section-active]="activeSection === 'about'">
        </app-apropos>

        <app-skills
          [class.section-active]="activeSection === 'skills'">
        </app-skills>

        <app-projet
          [class.section-active]="activeSection === 'projet'">
        </app-projet>

        <app-interet
          [class.section-active]="activeSection === 'interet'">
        </app-interet>

        <app-contact
          [class.section-active]="activeSection === 'contact'">
        </app-contact>

      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {

  activeSection: string = '';

  onActiveLinkChange(link: string): void {
    this.activeSection = link;
  }

}

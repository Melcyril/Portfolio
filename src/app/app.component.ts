import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-menu></app-menu>

      <div class="backgroundcolor">

        <!-- Animation du titre désactivée
        <div class="animation">
          <h1 class="titreFull">DEVELOPPEUR FULLSTACK</h1>
        </div>
        -->

        <!-- Animation des caractères désactivée
        <app-animation-caractere></app-animation-caractere>
        -->

        <app-apropos></app-apropos>
        <app-skills></app-skills>
        <app-projet></app-projet>
        <app-interet></app-interet>

        <!-- Deuxième animation des caractères désactivée
        <app-animation-caractere></app-animation-caractere>
        -->

        <app-contact></app-contact>

        <!-- Animation Three.js désactivée
        <app-animation-tree></app-animation-tree>
        -->

      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {}
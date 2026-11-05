import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <app-menu></app-menu>
    <div class="backgroundcolor">

<div class="animation">
       <h1 class="titreFull">DEVELOPPEUR FULLSTACK</h1>
</div>
<app-animation-caractere></app-animation-caractere>
<app-apropos></app-apropos>
<app-skills></app-skills>
<app-projet></app-projet>   
<app-interet></app-interet>
<app-animation-caractere></app-animation-caractere>
<app-contact></app-contact> 
    <app-animation-tree></app-animation-tree>

  `,
  styles: []
})
export class AppComponent{}

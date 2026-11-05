import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';
import { InteretComponent } from './interet/interet.component';
import { MenuComponent } from './menu/menu.component';
import { GestionComponent } from './gestion/gestion.component';
import { AnimationTreeComponent } from './animation-tree/animation-tree.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationCaractereComponent } from './animation-caractere/animation-caractere.component';
import { AproposComponent } from './apropos/apropos.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AproposComponent,
    SkillsComponent,
    ProjetComponent,
    ContactComponent,
    InteretComponent,
    MenuComponent,
    AnimationTreeComponent,
    FullstackComponent,
    AnimationCaractereComponent,
    AproposComponent,
    MentionsLegalesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

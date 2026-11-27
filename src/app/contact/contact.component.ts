
import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from "../../environments/environnement";
import { NgForm } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(private globalService: GlobalService) {}

  messageSent = false;

  nom: string = "";
  prenom: string = "";
  email: string = "";
  message: string = "";

  myMention: boolean = false;

  monEntreprise: string = environment.entreprise_;
  monAdresse: string = environment.adress_;
  monMail: string = environment.mymail_;
  monNomPrenom: string = environment.name_ + " " + environment.surname_;
  myHost: string = environment.myHost_;
  myAdresseHost: string = environment.adressHost_;
  myLinkHost: string = environment.linkHost_;

  async onSubmit(contactForm: NgForm) {

    if (!contactForm.valid) {
      console.log('Le formulaire est invalide.');
      return;
    }

    const templateParams = {
      email: this.email,
      nom: this.nom,
      prenom: this.prenom,
      message: this.message
    };

    console.log('Données soumises :', templateParams);

    try {

      const result = await emailjs.send(
        environment.idService_,
        environment.idTemplate_,
        templateParams,
        {
          publicKey: environment.apiKey_
        }
      );

      console.log('Email envoyé avec succès !');
      console.log('Statut :', result.status);
      console.log('Réponse :', result.text);

      contactForm.resetForm();

      this.messageSent = true;

      setTimeout(() => {
        this.messageSent = false;
      }, 5000);

    } catch (error: any) {

      console.error('Erreur lors de l\'envoi du mail :', error);
      console.error('Code HTTP :', error.status);
      console.error('Message :', error.text);

    }
  }

  ngOnInit(): void {
    console.log(this.mention);
  }

  mention() {
    this.globalService.myLegaleMention = true;
    this.myMention = this.globalService.myLegaleMention;
  }

  retour() {
    this.globalService.myLegaleMention = false;
    this.myMention = this.globalService.myLegaleMention;
  }

}

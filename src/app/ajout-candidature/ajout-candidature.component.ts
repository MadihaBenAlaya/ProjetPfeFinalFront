import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CandidaturesService } from './../shared/candidatures.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-ajout-candidature',
  templateUrl: './ajout-candidature.component.html',
  styleUrls: ['./ajout-candidature.component.css']
})
export class AjoutCandidatureComponent implements OnInit {

  constructor( public service : CandidaturesService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private uService:UserService, private router : Router, private snackBar : MatSnackBar) { }
  mycandidatures;

  candidatureId;

  response: {dbPath: ''};

  ngOnInit(): void {
    this.candidatureId=this.data.offreId;
    if (localStorage.getItem('token') != null){
      this.getUserProfile();
    }
  }


  uploadFinished = (event) => {
    this.response = event;
  }

  onSubmit(OffreId,UserId,Email,nom){
    this.service.PostCandidatures(this.response.dbPath,OffreId,UserId).subscribe(
      (res: any) => {

          this.snackBar.open("Candidature envoyée avec succès", "OK");
          this.service.formModel.reset();

          //send email
          this.service.EmailNotif(Email,nom,'Réponse automatique',"Bonjour, Nous vous confirmons la bonne réception de votre candidature. Nous allons l'étudier rapidement afin de vous donner une réponse dans les plus brefs délais. \nEn général il nous faut entre 2 et 5 jours ouvrés pour répondre à toutes les demandes entrantes. Soyez assurée que nous apportons une réponse à tous nos candidats, quelle que soit l'issue de la candidature. \nPour tout complément d'informations, contactez-nous à l'adresse indiquée dans la signature en précisant dans votre message la date et le titre de l'offre à laquelle vous avez postulé. \nBien à vous,").subscribe();
          //redirection
          this.router.navigateByUrl('/NosOffres');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            this.snackBar.open("Erreur d'envoi", "OK");
            console.log(err);
          }
    );
  }

  userDetails;
  getUserProfile(){
    this.uService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  /*onSubmit() {
    this.service.PostCandidatures(this.response.dbPath).subscribe(
      (res: any) => {
          this.mycandidatures = res;
          this.service.formModel.reset();
          //this.router.navigateByUrl('/Candidatures');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }*/

}

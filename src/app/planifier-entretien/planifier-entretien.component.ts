import { PlanifierTestComponent } from './../planifier-test/planifier-test.component';
import { CandidaturesService } from './../shared/candidatures.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EntretienRHsService } from './../shared/entretien-rhs.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-planifier-entretien',
  templateUrl: './planifier-entretien.component.html',
  styleUrls: ['./planifier-entretien.component.css']
})
export class PlanifierEntretienComponent implements OnInit {
  myEntretiens;
  entretiensDetails;
  minDate: Date;
  maxDate: Date;
  constructor(public service: EntretienRHsService, private router : Router,
    private snackBar : MatSnackBar,
    public candidatureService: CandidaturesService,
    @Inject(MAT_DIALOG_DATA) private data: any,public dialogRef: MatDialogRef<PlanifierEntretienComponent>) {

      const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
     }

    candidatureId;
    entretienId;
    entretien;
  ngOnInit(): void {


    this.candidatureId=this.data.candidatureId;

    this.getEntretienById();
    this.service.getEntretiens().subscribe(
      res =>{
        this.entretiensDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  candidature;
  getEntretienById(){
    this.candidatureService.getCandidaturesById(this.candidatureId).subscribe(
      res =>{
        this.candidature = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  GetEnretienById(){
    this.service.getEntretiensById(this.entretienId).subscribe(
      res =>{
        this.entretien = res;
      },
      err =>{
        console.log(err);
      }

    );

  }

  date;

  onSubmit(email,nom) {
    this.service.PostEntretiens(this.candidatureId,email).subscribe(
      (res: any) => {
          this.myEntretiens = res;
          this.service.EmailNotif(email,nom,'Entretien RH',"Bonjour "+nom+"\n Comme convenu, je vous confirme la date de notre échange le "+this.service.formModel.value.date+" à "+this.service.formModel.value.heure+" de durée "+this.service.formModel.value.duree+" et avec l'équipe de recrutement : "+this.service.formModel.value.equipe_recrutement+". \n Ci-dessous notre géolocalisation :\n "+this.service.formModel.value.localisation+". \n Bonne réception").subscribe();
          this.snackBar.open("Entretien Ajouté", "OK");
          this.service.formModel.reset();
          //this.service.formModel.value.date;

          this.ngOnInit();
          this.dialogRef.close();

          this.router.navigateByUrl('/EntretienRHs');

          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }

}

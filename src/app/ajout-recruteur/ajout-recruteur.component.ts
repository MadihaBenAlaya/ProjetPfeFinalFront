import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-recruteur',
  templateUrl: './ajout-recruteur.component.html',
  styleUrls: ['./ajout-recruteur.component.css']
})
export class AjoutRecruteurComponent implements OnInit {
  recruteurs;
  constructor(public service : UserService, public router: Router,private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.PostRecruteurs().subscribe(
      (res: any) => {
          this.recruteurs = res;
          this.snackBar.open("Recruteur Ajouté", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          this.router.navigateByUrl('/Recruteurs');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            this.snackBar.open("Erreur d'ajout", "OK");
            console.log(err);
          }
    );
  }
}

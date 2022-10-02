import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OffresService } from './../shared/offres.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.css']
})
export class AjoutOffreComponent implements OnInit {
  myoffres: any;

  constructor(public service: OffresService, private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.PostOffres().subscribe(
      (res: any) => {
          this.myoffres = res;
          this.snackBar.open("Offre Ajoutée", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          this.router.navigateByUrl('/Offres');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            this.snackBar.open("Erreur d'ajout", "OK");
            //this.router.navigateByUrl('/Offres');
            console.log(err);
          }
    );
  }

}

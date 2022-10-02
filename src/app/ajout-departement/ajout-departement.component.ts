import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DepartementService } from './../shared/departement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-departement',
  templateUrl: './ajout-departement.component.html',
  styleUrls: ['./ajout-departement.component.css']
})
export class AjoutDepartementComponent implements OnInit {

  constructor(public service: DepartementService, private router: Router, private snackBar : MatSnackBar) { }
  departements;
  ngOnInit(): void {
  }
  onSubmit() {
    this.service.PostDepartement().subscribe(
      (res: any) => {
          this.departements = res;
          this.snackBar.open("Département Ajouté", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          this.router.navigateByUrl('/Departements');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            this.snackBar.open("Erreur d'ajout", "OK");
            console.log(err);
          }
    );
  }
}

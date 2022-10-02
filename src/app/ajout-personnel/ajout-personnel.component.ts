import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PersonnelService } from './../shared/personnel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-personnel',
  templateUrl: './ajout-personnel.component.html',
  styleUrls: ['./ajout-personnel.component.css']
})
export class AjoutPersonnelComponent implements OnInit {
  personnels;
  departments;
  constructor(public service: PersonnelService, private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {

    this.service.getDepartements().subscribe(
      res =>{
        this.departments = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  onSubmit() {
    this.service.PostPersonnels().subscribe(
      (res: any) => {
          this.personnels = res;
          this.snackBar.open("Personnel Ajouté", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          this.router.navigateByUrl('/Personnels');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            this.snackBar.open("Erreur d'ajout", "OK");
            console.log(err);
          }
    );
  }
}

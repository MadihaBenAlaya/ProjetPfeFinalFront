import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-espace-recruteur',
  templateUrl: './espace-recruteur.component.html',
  styleUrls: ['./espace-recruteur.component.css']
})
export class EspaceRecruteurComponent implements OnInit {

  constructor(public service:UserService, private snackBar : MatSnackBar, private router : Router) { }

  userDetails;
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  onSubmit() {
    this.service.EditRecruteur(this.userDetails.id).subscribe(
      (res: any) => {
          this.snackBar.open("Profil modifié", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          //this.router.navigateByUrl('/ProfileRecruteur');

          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }

}

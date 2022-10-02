import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-espace-condidat',
  templateUrl: './espace-condidat.component.html',
  styles: [
  ]
})
export class EspaceCondidatComponent implements OnInit {

  constructor(public service:UserService, private snackBar : MatSnackBar) { }

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
    this.service.EditCandidat(this.userDetails.id).subscribe(
      (res: any) => {
        this.snackBar.open("Profil modifié", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }

}

import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EspaceCondidatComponent } from '../espace-condidat/espace-condidat.component';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;

  constructor(private service : UserService,
    public dialog: MatDialog, private snackBar : MatSnackBar) { }

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

  openModifierProfil() {

    const dialogRef =  this.dialog.open(EspaceCondidatComponent, {
      //width: '50%',
      //height: '50%',

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      this.snackBar.open("Profil modifié", "OK");
      console.log(`Dialog result: ${result}`);
    });
  }



}

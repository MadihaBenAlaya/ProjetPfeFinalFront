import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EspaceRecruteurComponent } from '../espace-recruteur/espace-recruteur.component';

@Component({
  selector: 'app-profil-recruteur',
  templateUrl: './profil-recruteur.component.html',
  styleUrls: ['./profil-recruteur.component.css']
})
export class ProfilRecruteurComponent implements OnInit {

  constructor(private service : UserService,
    public dialog: MatDialog,) { }

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

  openRecruteurDetails() {

    const dialogRef =  this.dialog.open(EspaceRecruteurComponent, {
      //width: '50%',
      //height: '50%',

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

}

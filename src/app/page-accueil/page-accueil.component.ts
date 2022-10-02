import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DetailsOffreComponent } from '../details-offre/details-offre.component';
import { OffresService } from '../shared/offres.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styles: [
  ]
})
export class PageAccueilComponent implements OnInit {

  constructor(private service : OffresService,
    public dialog: MatDialog, ) { }

  offres;
  ngOnInit(): void {

    this.service.getOffres().subscribe(
      res =>{
        this.offres = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  openOffreDetails(id) {

    const dialogRef =  this.dialog.open(DetailsOffreComponent, {
      //width: '50%',
      //height: '50%',
      data: { offreId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

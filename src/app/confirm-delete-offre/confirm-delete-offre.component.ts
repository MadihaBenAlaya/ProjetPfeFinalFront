import { MatSnackBar } from '@angular/material/snack-bar';
import { OffresService } from './../shared/offres.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-offre',
  templateUrl: './confirm-delete-offre.component.html',
  styleUrls: ['./confirm-delete-offre.component.css']
})
export class ConfirmDeleteOffreComponent implements OnInit {

  constructor(private service : OffresService, @Inject(MAT_DIALOG_DATA) private data: any,private snackBar : MatSnackBar) { }

  id;
  ngOnInit(): void {
    this.id=this.data.OffreId;
  }

  deleteOffre(){
    this.service.deleteOffre(this.id).subscribe(
      res =>{
        this.ngOnInit();
        this.snackBar.open("Offre Supprimée", "OK");
      }
    )
   }

}

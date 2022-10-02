import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CandidaturesService } from './../shared/candidatures.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor( private service : CandidaturesService,
    @Inject(MAT_DIALOG_DATA) private data: any,private snackBar : MatSnackBar) { }

    id;
  ngOnInit(): void {
    this.id=this.data.candidatureId;
  }

  deleteCandidature(){
    this.service.deleteCandidature(this.id).subscribe(
      res =>{
        this.ngOnInit();
        this.snackBar.open("Candidature Supprimé", "OK");
      }
    )
}


}

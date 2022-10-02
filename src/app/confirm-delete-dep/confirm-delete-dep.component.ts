import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonnelService } from './../shared/personnel.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DepartementService } from './../shared/departement.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-dep',
  templateUrl: './confirm-delete-dep.component.html',
  styleUrls: ['./confirm-delete-dep.component.css']
})
export class ConfirmDeleteDepComponent implements OnInit {

  constructor(private service : DepartementService, @Inject(MAT_DIALOG_DATA) private data: any,private snackBar : MatSnackBar) { }
  id;
  ngOnInit(): void {
    this.id=this.data.DepartementId;
  }

  deleteDepartement(){
    this.service.deleteDepartement(this.id).subscribe(
      res =>{
        this.ngOnInit();
        this.snackBar.open("Département Supprimé", "OK");
      }
    )
   }
}

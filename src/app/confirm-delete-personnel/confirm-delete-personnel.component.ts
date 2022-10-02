import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonnelService } from './../shared/personnel.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-personnel',
  templateUrl: './confirm-delete-personnel.component.html',
  styleUrls: ['./confirm-delete-personnel.component.css']
})
export class ConfirmDeletePersonnelComponent implements OnInit {

  constructor(private service : PersonnelService, @Inject(MAT_DIALOG_DATA) private data: any,private snackBar : MatSnackBar) { }

  id;
  ngOnInit(): void {
    this.id=this.data.PersonnelId;
  }

  deletePersonnel(){
    this.service.deletePersonnel(this.id).subscribe(
      res =>{
        this.ngOnInit();
        this.snackBar.open("Personnel Supprimé", "OK");
      }
    )
   }

}

import { PersonnelService } from './../shared/personnel.service';
import { DepartementService } from './../shared/departement.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent implements OnInit {


  myParam;
  departementDetails;
  departementId;
  constructor(
    private ac:ActivatedRoute, public dialog: MatDialog,  public service : DepartementService,
    @Inject(MAT_DIALOG_DATA) private data: any,  private snackBar : MatSnackBar) {}

  ngOnInit(): void {
    this.departementId=this.data.departementId;
    this.getDepartementById();
  }

  getDepartementById(){
    this.service.getDepartementById(this.departementId).subscribe(
      res =>{
        console.log(res)
        this.departementDetails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.service.PutDepartement(this.departementId).subscribe(
      (res: any) => {
          this.snackBar.open("Département modifié", "OK");
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

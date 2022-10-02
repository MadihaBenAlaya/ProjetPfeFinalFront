import { PersonnelService } from './../shared/personnel.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.css']
})
export class EditPersonnelComponent implements OnInit {
  departments;
  personnelDetails;
  personnelId;
  constructor(
    private ac:ActivatedRoute, public dialog: MatDialog, public service : PersonnelService,
    @Inject(MAT_DIALOG_DATA) private data: any,  private snackBar : MatSnackBar) {}

  ngOnInit(): void {
    this.personnelId=this.data.personnelId;
    this.getPersonnelById();

    this.service.getDepartements().subscribe(
      res =>{
        this.departments = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  getPersonnelById(){
    this.service.getPersonnelById(this.personnelId).subscribe(
      res =>{
        console.log(res)
        this.personnelDetails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.service.PutPersonnels(this.personnelId).subscribe(
      (res: any) => {
          this.snackBar.open("Personnel modifié", "OK");
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

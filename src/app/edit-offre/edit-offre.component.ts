import { MatSnackBar } from '@angular/material/snack-bar';
import { OffresService } from './../shared/offres.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css']
})
export class EditOffreComponent implements OnInit {


  offreDettails;
  offreId;
  constructor(
    private ac:ActivatedRoute, public dialog: MatDialog, public service : OffresService,
    @Inject(MAT_DIALOG_DATA) private data: any,  private snackBar : MatSnackBar) {}

  ngOnInit(): void {
    this.offreId=this.data.offreId;
    this.getOffreById();
  }

  getOffreById(){
    this.service.getOffreById(this.offreId).subscribe(
      res =>{
        console.log(res)
        this.offreDettails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.service.PutOffres(this.offreId).subscribe(
      (res: any) => {
          this.snackBar.open("Offre modifiée", "OK");
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

import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OffresService } from './../shared/offres.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-offre',
  templateUrl: './details-offre.component.html',
  styleUrls: ['./details-offre.component.css']
})
export class DetailsOffreComponent implements OnInit {
  myParam;
  offreDettails;
  offreId;
  offre;
  constructor(
    private ac:ActivatedRoute, public dialog: MatDialog, public service : OffresService,
    @Inject(MAT_DIALOG_DATA) private data: any,) {}

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


}

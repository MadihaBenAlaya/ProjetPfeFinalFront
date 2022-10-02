import { OffresService } from './../shared/offres.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { CandidaturesService } from '../shared/candidatures.service';

@Component({
  selector: 'app-details-candidature',
  templateUrl: './details-candidature.component.html',
  styleUrls: ['./details-candidature.component.css']
})
export class DetailsCandidatureComponent implements OnInit {
  candidatureId;
  candidatureDetails;
  constructor(private ac:ActivatedRoute, public dialog: MatDialog, public service : CandidaturesService,
    @Inject(MAT_DIALOG_DATA) private data: any,) { }

  ngOnInit(): void {
    this.candidatureId=this.data.candidatureId;
    this.getCandidaturesById();
  }

  getCandidaturesById(){
    this.service.getCandidaturesById(this.candidatureId).subscribe(
      res =>{
        console.log(res)
        this.candidatureDetails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}

import { CandidaturesService } from './../shared/candidatures.service';
import { UploadComponent } from './../upload/upload.component';
import { ActivatedRoute, Router } from '@angular/router';
import { OffresService } from './../shared/offres.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutCandidatureComponent } from '../ajout-candidature/ajout-candidature.component';

@Component({
  selector: 'app-fiche-poste',
  templateUrl: './fiche-poste.component.html',
  styles: [
  ]
})
export class FichePosteComponent implements OnInit {

  constructor(private offreService:OffresService,
    private ac:ActivatedRoute, public dialog: MatDialog, public service : CandidaturesService,
    private router : Router) { }

    myParam;
    offreDettails;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=(res.get('id')),
        this.offreService.getOffreById(this.myParam).subscribe(
          result=>this.offreDettails=result
          )});
  }
  openDialog(id) {

    if (localStorage.getItem('token') != null){
      const dialogRef =  this.dialog.open(AjoutCandidatureComponent, {
        //width: '50%',
        //height: '50%',
        data: { offreId: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

    }
    else{
      this.router.navigateByUrl('/Login');
    }
    
  }


}

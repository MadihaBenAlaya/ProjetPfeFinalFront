import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidaturesService } from '../shared/candidatures.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-demandes-condidat',
  templateUrl: './demandes-condidat.component.html',
  styles: [
  ]
})
export class DemandesCondidatComponent implements OnInit {

  constructor(private service:CandidaturesService,
    private userService:UserService,) { }

  candidatures;
  userDetails;
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
        this.getCandidaturesByCandidat(this.userDetails.id);
      },
      err =>{
        console.log(err);
      }

    );
    
  }

  getCandidaturesByCandidat(id){
    this.service.getCandidaturesByCandidat(id).subscribe(
      res =>{
        this.candidatures = res;
      },
      err =>{
        console.log(err);
      }

    );

  }

}

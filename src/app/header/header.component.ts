import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  userDetails;

  constructor(public service : UserService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.getUserProfile();
      this.checkCandidat();
    }
    

    }

    getUserProfile(){
      this.service.getUserProfile().subscribe(
        res =>{
          this.userDetails = res;
        },
        err =>{
          console.log(err);
        }

      );
    }

    SeDeconnecter(){
      localStorage.removeItem('token');

      this.router.navigateByUrl('/');
    }

    test;
    checkCandidat(){
      if(this.service.roleMatch(['CANDIDAT'])){
        this.test=true;
      }
    }
}

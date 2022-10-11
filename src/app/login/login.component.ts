import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  formModel={
    UserName: '',
    Password: ''
  }


  constructor(private service : UserService, private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    this.router.navigateByUrl('/');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{

        this.snackBar.open("connecté", "bienvenue!");
        localStorage.setItem('token',res.token);
        //this.router.navigateByUrl('/Profile');
        if (this.service.roleMatch(['RECRUTEUR'])) {
          this.router.navigateByUrl('/Dashboard');
        }
        else if (this.service.roleMatch(['ADMINISTRATEUR'])) {
          this.router.navigateByUrl('/Dashboard');
         } else if(this.service.roleMatch(['CANDIDAT'])) {
          this.router.navigateByUrl('/Profile');
        }

      },
      err=>{
        this.snackBar.open("Mot de passe incorrect", "Réessayer");
      }

    );

    }

}

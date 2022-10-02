import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public AppParameters;
  constructor(private http: HttpClient, private fb: FormBuilder, private configService: ConfigService) {
    this.AppParameters = this.configService.config;
  }

  formModel = this.fb.group({

    Emails: this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      ConfirmEmail: ['', [Validators.required, Validators.email]]
    }, { validator: this.compareEmails }),
    UserName: ['', Validators.required],
    FullName: ['', Validators.required],
    Date_naissance: [''],
    PhoneNumber: [''],
    Pays: [''],
    Diplome: [''],
    Nb_annees_experience: [''],
    Specialite: [''],
    Ville: [''],

    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),

  });

  register() {
    var body = {
      userName: this.formModel.value.UserName,
      email: this.formModel.value.Emails.Email,
      fullName: this.formModel.value.FullName,
      password: this.formModel.value.Passwords.Password

    };
    return this.http.post(this.AppParameters.apiUrl + 'api/ApplicationUser/RegisterCandidat', body);
  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  compareEmails(fb: FormGroup) {
    let compareEmailCtrl = fb.get('ConfirmEmail');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (compareEmailCtrl.errors == null || 'emailMismatch' in compareEmailCtrl.errors) {
      if (fb.get('Email').value != compareEmailCtrl.value)
        compareEmailCtrl.setErrors({ emailMismatch: true });
      else
        compareEmailCtrl.setErrors(null);
    }
  }

  login(formData) {
    return this.http.post(this.AppParameters.apiUrl + 'api/ApplicationUser/Login', formData);
  }

  getUserProfile() {

    return this.http.get(this.AppParameters.apiUrl + 'api/UserProfile');
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }


  getRecruteurs() {
    return this.http.get(this.AppParameters.apiUrl + 'api/ApplicationUser/GetRecruteurs');
  }

  PostRecruteurs() {
    var body = {
      userName: this.formModel.value.UserName,
      email: this.formModel.value.Emails.Email,
      fullName: this.formModel.value.FullName,
      password: this.formModel.value.Passwords.Password

    };
    return this.http.post(this.AppParameters.apiUrl + 'api/ApplicationUser/RegisterRecruteur', body);
  }

  EditRecruteur(id) {
    var body = {
      

      userName: this.formModel.value.UserName,
      fullName: this.formModel.value.FullName,
      
      email : this.formModel.value.Emails.Email,
      date_naissance : this.formModel.value.Date_naissance,
      phoneNumber : this.formModel.value.PhoneNumber,
      pays : this.formModel.value.Pays,
      
      
      
      
      ville : this.formModel.value.Ville,

    };
    return this.http.put(this.AppParameters.apiUrl + 'api/ApplicationUser/'+id, body);
  }

  EditCandidat(id) {
    var body = {
      

      userName: this.formModel.value.UserName,
      fullName: this.formModel.value.FullName,
      
      email : this.formModel.value.Emails.Email,
      date_naissance : this.formModel.value.Date_naissance,
      phoneNumber : this.formModel.value.PhoneNumber,
      pays : this.formModel.value.Pays,
      
      diplome : this.formModel.value.Diplome,
      nb_annees_experience : this.formModel.value.Nb_annees_experience,
      specialite : this.formModel.value.Specialite,
      ville : this.formModel.value.Ville,

    };
    return this.http.put(this.AppParameters.apiUrl + 'api/ApplicationUser/'+id, body);
  }

}

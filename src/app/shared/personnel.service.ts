import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  public AppParameters;
  constructor(private http : HttpClient, private fb : FormBuilder,  private configService: ConfigService) {
    this.AppParameters = this.configService.config;
    console.log(this.AppParameters.apiUrl);

   }



   getPersonnels(){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Personnel');
  }


  getDepartements(){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Departement');
  }

  getPersonnelByDepartementId(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Personnel/getPersonnelByDepartement?id='+id);
  }

  getDepartementById(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Departement/'+id);
  }

  getPersonnelById(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Personnel/'+id);
  }

  formModel = this.fb.group({
    fullName: [,[Validators.required]],
    pays: [],
    ville: [],
    diplome: [],
    date_naissance: [],
    nb_annees_experience: [],
    specialite : [],
    departement : [,[Validators.required]],
    email : [,[Validators.email, Validators.required]]

  })

  PostPersonnels (){
    var body = {
      fullName: this.formModel.value.fullName,
      pays: this.formModel.value.pays,
      ville: this.formModel.value.ville,
      diplome: this.formModel.value.diplome,
      date_naissance: this.formModel.value.date_naissance,
      specialite: this.formModel.value.specialite,
      nb_annees_experience: this.formModel.value.nb_annees_experience,
      departementID: this.formModel.value.departement,
      email : this.formModel.value.email
    };
    return this.http.post( this.AppParameters.apiUrl+ 'api/Personnel', body);
  }

  PutPersonnels (idPersonnel){
    var body = {
      idPersonnel: idPersonnel,
      fullName: this.formModel.value.fullName,
      pays: this.formModel.value.pays,
      ville: this.formModel.value.ville,
      diplome: this.formModel.value.diplome,
      date_naissance: this.formModel.value.date_naissance,
      specialite: this.formModel.value.specialite,
      nb_annees_experience: this.formModel.value.nb_annees_experience,
      departementID: this.formModel.value.departement,
      email : this.formModel.value.email
    };
    return this.http.put( this.AppParameters.apiUrl+ 'api/Personnel/'+ idPersonnel, body);
  }

  getStats(){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Personnel/stats');
  }

  deletePersonnel(id){
    return this.http.delete(this.AppParameters.apiUrl+ 'api/Personnel/'+id);
  }

  deleteDepartement(id){
    return this.http.delete(this.AppParameters.apiUrl+ 'api/Departement/'+id);
  }
}

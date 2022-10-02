import { ConfigService } from './config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  AppParameters;
  constructor(private http : HttpClient, private fb : FormBuilder,  private configService: ConfigService) {
    this.AppParameters = this.configService.config;
    console.log(this.AppParameters.apiUrl);

   }

   getDepartementById(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Departement/'+id);
  }

  formModel = this.fb.group({
    code: [, [Validators.required]],
    libelle: [, [Validators.required]],

  })

  PostDepartement(){
    var body = {
      code: this.formModel.value.code,
      libelle: this.formModel.value.libelle,

    };
    return this.http.post( this.AppParameters.apiUrl+ 'api/Departement', body);
  }

  PutDepartement(departementID){
    var body = {
      departementID : departementID,
      code: this.formModel.value.code,
      libelle: this.formModel.value.libelle,

    };
    return this.http.put( this.AppParameters.apiUrl+ 'api/Departement/' +departementID, body);
  }

  deleteDepartement(id){
    return this.http.delete(this.AppParameters.apiUrl+ 'api/Departement/'+id);
  }

}

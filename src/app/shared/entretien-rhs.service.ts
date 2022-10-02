import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class EntretienRHsService {
  public AppParameters;
  constructor(private http : HttpClient, private fb : FormBuilder, private configService: ConfigService) {
    this.AppParameters = this.configService.config;
   }

   getEntretiens(){
    return this.http.get(this.AppParameters.apiUrl + 'api/EntretienRH');
  }

   getEntretiensById(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/EntretienRH/'+id);
  }

  formModel = this.fb.group({
    equipe_recrutement: [],
    localisation: [],
    duree: [, [Validators.required]],
    date: [, [Validators.required]],
    heure: [, [Validators.required]],
    type_entretien: [],
    destination: [, [Validators.required]],
    lien_entretien: [],

  })

  PostEntretiens (id,email){
    var body = {
      equipe_recrutement: this.formModel.value.equipe_recrutement,
      localisation: this.formModel.value.localisation,
      duree: this.formModel.value.duree,
      date: this.formModel.value.date,
      heure: this.formModel.value.heure,
      type_entretien: this.formModel.value.type_entretien,
      destination: email,
      lien_entretien: this.formModel.value.lien_entretien,
      candidatureFk:id
    };
    return this.http.post( this.AppParameters.apiUrl+ 'api/EntretienRH', body);
  }
  PutEntretiens(entretienID){
    var body = {
      entretienID : entretienID,
      equipe_recrutement: this.formModel.value.equipe_recrutement,
      localisation: this.formModel.value.localisation,
      duree: this.formModel.value.duree,
      date: this.formModel.value.date,
      heure: this.formModel.value.heure,
      type_entretien: this.formModel.value.type_entretien,
      destination: this.formModel.value.destination,
      lien_entretien: this.formModel.value.lien_entretien,
    };
    return this.http.put( this.AppParameters.apiUrl+ 'api/EntretienRH/'+ entretienID, body);

  }
  EmailNotif(toId,toName,sub,eBody){
    var body = {
    EmailToId:toId,
    EmailToName:toName,
    EmailSubject:sub,
    EmailBody:eBody
    };
    return this.http.post(this.AppParameters.apiUrl + 'api/Email', body);
  }

}

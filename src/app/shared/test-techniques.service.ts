import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TestTechniquesService {
  public AppParameters;
  constructor(private http : HttpClient, private fb : FormBuilder, private configService: ConfigService) {
    this.AppParameters = this.configService.config;
   }

   getTests(){
    return this.http.get(this.AppParameters.apiUrl + 'api/TestTechnique');
  }

  getTestsById(id){
    return this.http.get(this.AppParameters.apiUrl+ '/api/TestTechnique/'+id);
  }


  formModel = this.fb.group({
    destination: [, [Validators.required]],
    date_depot: [, [Validators.required]],
    duree: [, [Validators.required]],
    lien_test: [, [Validators.required]],

  })

  PostTests (id,email){
    var body = {
      destination: email,
      date_depot: this.formModel.value.date_depot,
      duree: this.formModel.value.duree,
      lien_test: this.formModel.value.lien_test,
      candidatureFk:id

    };
    return this.http.post( this.AppParameters.apiUrl + 'api/TestTechnique', body);
  }

  PutTests(testID){
    var body = {
      testID:testID,
      destination: this.formModel.value.destination,
      date_depot: this.formModel.value.date_depot,
      duree: this.formModel.value.duree,
      lien_test: this.formModel.value.lien_test,

    };
    return this.http.put( this.AppParameters.apiUrl + 'api/TestTechnique/'+testID, body);

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

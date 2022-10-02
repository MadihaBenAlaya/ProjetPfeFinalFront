import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {
  public AppParameters;
  constructor(private http : HttpClient, private fb : FormBuilder, private configService: ConfigService) {
    this.AppParameters = this.configService.config;

   }


  getCandidatures(){
    return this.http.get(this.AppParameters.apiUrl + 'api/Candidature');

  }

  getCandidaturesByCandidat(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Candidature/getCadidatureByCandidat?id='+id);
  }

  getCandidaturesById(id){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Candidature/'+id);
  }

  deleteCandidature(id){
    return this.http.delete(this.AppParameters.apiUrl+ 'api/Candidature/'+id);
  }

  formModel = this.fb.group({
    date_postulation: [, [Validators.required]],
    etat: [,],
    curriculum_Vitae: [, [Validators.required]],
    score: [,],
    nb_annee_exp_candidat: [,],

  })

  PostCandidatures (CVPath,OffreId,UserId,myDate = new Date()){
    var body = {
      date_postulation: myDate,
      etat: 'en attente',
      curriculum_Vitae: CVPath,
      score: 0,
      nb_annee_exp_candidat:'0',
      offreFK: OffreId,
      candidatFK: UserId

    };
    return this.http.post( this.AppParameters.apiUrl+ 'api/Candidature', body);
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

  StatusCandidature(candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK,etat) {
    var body = {

      candidatureID:candidatureID,
      date_postulation: date_postulation,
      curriculum_Vitae:curriculum_Vitae,
      score:score,
      nb_annee_exp_candidat: nb_annee_exp_candidat,
      offreFK:offreFK,
      candidatFK: candidatFK,
      etat:etat

    };
    return this.http.put(this.AppParameters.apiUrl + 'api/Candidature/' + candidatureID, body);
  }
  PutCandidatures(candidatureID,date_postulation,curriculum_Vitae,offreFK,candidatFK,etat){
    var body = {
    candidatureID:candidatureID,
    date_postulation: date_postulation,
      curriculum_Vitae:curriculum_Vitae,
      score:this.formModel.value.score,
      nb_annee_exp_candidat:this.formModel.value.nb_annee_exp_candidat,
      offreFK:offreFK,
      candidatFK: candidatFK,
      etat:etat
    };
    return this.http.put(this.AppParameters.apiUrl + 'api/Candidature/' + candidatureID, body);
  }


  getStats(){
    return this.http.get(this.AppParameters.apiUrl+ 'api/Candidature/stats');
  }



}

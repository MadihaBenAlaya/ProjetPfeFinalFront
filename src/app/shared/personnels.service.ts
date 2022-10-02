import { ConfigService } from './config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {
  public AppParameters;
  constructor(private http : HttpClient, private fb : FormBuilder,  private configService: ConfigService) {
    this.AppParameters = this.configService.config;
    console.log(this.AppParameters.apiUrl);
   }

  formModel = this.fb.group({
    nomOffre: [, [Validators.required]],
    pays: [, [Validators.required]],
    region: [, [Validators.required]],
    date_debut: [, [Validators.required]],
    qualites_interpersonnelles: [,],
    competences_techniques: [, [Validators.required]],
    diplome_demande: [, [Validators.required]],
    experience_demandee: [, [Validators.required]],

    salaire: [, ],
    type_contrat: [, ],
    departement : [, [Validators.required]],
  })

  PostPersonnels (){
    var body = {
      nomOffre: this.formModel.value.nomOffre,
      pays: this.formModel.value.pays,
      region: this.formModel.value.region,
      date_debut: this.formModel.value.date_debut,
      qualites_interpersonnelles: this.formModel.value.qualites_interpersonnelles,
      competences_techniques: this.formModel.value.competences_techniques,
      diplome_demande: this.formModel.value.diplome_demande,
      experience_demandee: this.formModel.value.experience_demandee,

      salaire: this.formModel.value.salaire,
      type_contrat: this.formModel.value.type_contrat,
      departement: this.formModel.value.departement,
    };
    return this.http.post( this.AppParameters.apiUrl+ 'api/ApplicationUser/RegisterRecruteur', body);
  }

}

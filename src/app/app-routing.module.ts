import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FichePosteComponent } from './fiche-poste/fiche-poste.component';
import { PostesPageComponent } from './postes-page/postes-page.component';

import { DemandesCondidatComponent } from './demandes-condidat/demandes-condidat.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ProfileComponent } from './profile/profile.component';
import { OffresComponent } from './offres/offres.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TestTechniquesComponent } from './test-techniques/test-techniques.component';
import { EntretienRHsComponent } from './entretien-rhs/entretien-rhs.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadComponent } from './upload/upload.component';
import { AjoutCandidatureComponent } from './ajout-candidature/ajout-candidature.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { AjoutPersonnelComponent } from './ajout-personnel/ajout-personnel.component';

import { ProfilRecruteurComponent } from './profil-recruteur/profil-recruteur.component';
import { EspaceRecruteurComponent } from './espace-recruteur/espace-recruteur.component';

import { PersonnelsComponent } from './personnels/personnels.component';
import { DepartementComponent } from './departement/departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetailsCandidatureComponent } from './details-candidature/details-candidature.component';
import { RecruteursComponent } from './recruteurs/recruteurs.component';
import { AjoutRecruteurComponent } from './ajout-recruteur/ajout-recruteur.component';


const routes: Routes = [
{ path : '', component : PageAccueilComponent },
{ path : 'Register', component : RegisterComponent },
{ path : 'Login', component : LoginComponent},
{ path : 'FichePoste/:id', component : FichePosteComponent },

//{ path : 'PostesPage', component : PostesPageComponent},
{ path : 'EspaceCondidat', component : EspaceCondidatComponent ,canActivate:[AuthGuard],data :{permittedRoles:['CANDIDAT']}},
{ path : 'DemandesCondidat', component : DemandesCondidatComponent,canActivate:[AuthGuard],data :{permittedRoles:['CANDIDAT']} },
//{ path : 'UpdateProfile', component : UpdateProfileComponent },
{ path : 'Error', component : ErrorPopupComponent },
{ path : 'Success', component : SuccessPopupComponent },
{ path : 'Profile', component : ProfileComponent,canActivate:[AuthGuard],data :{permittedRoles:['CANDIDAT']} },
{ path : 'AjoutCandidature', component : AjoutCandidatureComponent,canActivate:[AuthGuard],data :{permittedRoles:['CANDIDAT']} },
{ path : 'NosOffres', component : NosOffresComponent},
{ path : 'AjoutPersonnel', component : AjoutPersonnelComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR'] }},

{ path : 'DetailsCandidature', component : DetailsCandidatureComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }},
{ path : 'AjoutRecruteur', component : AjoutPersonnelComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR'] }},


{path:'Offres',
    component: SidebarComponent,
    children:[
      {path:'', component:OffresComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }}
    ]
},


{path:'ProfileRecruteur',
    component: SidebarComponent,
    children:[
      {path:'', component:ProfilRecruteurComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }}
    ]
},
{path:'EspaceRecruteur',
    component: SidebarComponent,
    children:[
      {path:'', component:EspaceRecruteurComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }}
    ]
},
{path:'Candidatures',
    component: SidebarComponent,
    children:[
      {path:'', component:CandidaturesComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }}
    ]
},
{path:'TestTechniques',
    component: SidebarComponent,
    children:[
      {path:'', component:TestTechniquesComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }}
    ]
},
{path:'EntretienRHs',
    component: SidebarComponent,
    children:[
      {path:'', component:EntretienRHsComponent,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }}
    ]
},

{path:'Dashboard',
    component: SidebarComponent,
    children:[
      {path:'', component:DashboardComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR','RECRUTEUR'] }}
    ]
},

{path:'Personnels',
    component: SidebarComponent,
    children:[
      {path:'', component:PersonnelsComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR'] }}
    ]
},
{path:'Recruteurs',
    component: SidebarComponent,
    children:[
      {path:'', component:RecruteursComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR'] }}
    ]
},

{path:'Departements',
    component: SidebarComponent,
    children:[
      {path:'', component:DepartementComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR'] }}
    ]
},

{ path : 'AjoutOffre', component : AjoutOffreComponent ,canActivate:[AuthGuard],data :{permittedRoles:['RECRUTEUR','ADMINISTRATEUR'] }},
{ path : 'AjoutDepartement', component : AjoutDepartementComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ADMINISTRATEUR'] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

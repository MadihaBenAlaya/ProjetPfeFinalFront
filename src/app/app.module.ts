import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FichePosteComponent } from './fiche-poste/fiche-poste.component';
import { PostesPageComponent } from './postes-page/postes-page.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { DemandesCondidatComponent } from './demandes-condidat/demandes-condidat.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OffresComponent } from './offres/offres.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TestTechniquesComponent } from './test-techniques/test-techniques.component';
import { EntretienRHsComponent } from './entretien-rhs/entretien-rhs.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { AjoutCandidatureComponent } from './ajout-candidature/ajout-candidature.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { ConfigService, ConfigModule } from './shared/config.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutPersonnelComponent } from './ajout-personnel/ajout-personnel.component';

import { ProfilRecruteurComponent } from './profil-recruteur/profil-recruteur.component';
import { EspaceRecruteurComponent } from './espace-recruteur/espace-recruteur.component';
import { DetailsOffreComponent } from './details-offre/details-offre.component';



import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { PersonnelsComponent } from './personnels/personnels.component';
import { DepartementComponent } from './departement/departement.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetailsCandidatureComponent } from './details-candidature/details-candidature.component';
import { RecruteursComponent } from './recruteurs/recruteurs.component';
import { AjoutRecruteurComponent } from './ajout-recruteur/ajout-recruteur.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PlanifierEntretienComponent } from './planifier-entretien/planifier-entretien.component';
import { PlanifierTestComponent } from './planifier-test/planifier-test.component';
import { OffreStatsComponent } from './offre-stats/offre-stats.component';
import { EditOffreComponent } from './edit-offre/edit-offre.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';
import { EditRecruteurComponent } from './edit-recruteur/edit-recruteur.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ConfirmDeleteOffreComponent } from './confirm-delete-offre/confirm-delete-offre.component';
import { ConfirmDeleteDepComponent } from './confirm-delete-dep/confirm-delete-dep.component';
import { ConfirmDeletePersonnelComponent } from './confirm-delete-personnel/confirm-delete-personnel.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);














@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FichePosteComponent,
    PostesPageComponent,

    DemandesCondidatComponent,
    UpdateProfileComponent,
    EspaceCondidatComponent,
    ErrorPopupComponent,
    SuccessPopupComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    ProfileComponent,
    OffresComponent,
    CandidaturesComponent,
    TestTechniquesComponent,
    EntretienRHsComponent,
    AjoutOffreComponent,
    SidebarComponent,
    UploadComponent,
    DownloadComponent,
    AjoutCandidatureComponent,
    NosOffresComponent,
    DashboardComponent,
    AjoutPersonnelComponent,

    ProfilRecruteurComponent,
    EspaceRecruteurComponent,
    DetailsOffreComponent,
    PersonnelsComponent,
    DepartementComponent,
    DepartementDetailsComponent,
    AjoutDepartementComponent,
    DetailsCandidatureComponent,
    RecruteursComponent,
    AjoutRecruteurComponent,
    PlanifierEntretienComponent,
    PlanifierTestComponent,
    OffreStatsComponent,
    EditOffreComponent,
    EditDepartementComponent,
    EditPersonnelComponent,
    EditRecruteurComponent,
    ConfirmDeleteComponent,
    ConfirmDeleteOffreComponent,
    ConfirmDeleteDepComponent,
    ConfirmDeletePersonnelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,

    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,


    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    NgxChartsModule,

    FullCalendarModule




  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  ConfigService, ConfigModule.init()],
  bootstrap: [AppComponent]
})
export class AppModule { }

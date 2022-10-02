import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { PlanifierTestComponent } from './../planifier-test/planifier-test.component';
import { PlanifierEntretienComponent } from './../planifier-entretien/planifier-entretien.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetailsCandidatureComponent } from './../details-candidature/details-candidature.component';
import { MatDialog } from '@angular/material/dialog';
import { CandidaturesService } from './../shared/candidatures.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  dataSource;
  candidatureId;
  constructor(private service : CandidaturesService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['nomOffre', 'fullName', 'date_postulation', 'curriculum_Vitae','score','action','etat','planification','action1','action2'];

  candidatures;


  ngOnInit(): void {

    this.service.getCandidatures().subscribe(
      res =>{
        this.candidatures = res;
        this.dataSource = new MatTableDataSource<any>(this.candidatures);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err =>{
        console.log(err);
      }

    );

  }
  openEntretienDetails(id) {
    const dialogRef =  this.dialog.open(PlanifierEntretienComponent, {
      //width: '50%',
      //height: '50%',
      data: { candidatureId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openTestDetails(id) {
    const dialogRef =  this.dialog.open(PlanifierTestComponent, {
      //width: '50%',
      //height: '50%',
      data: { candidatureId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCandidatureDetails(id) {

    const dialogRef =  this.dialog.open(DetailsCandidatureComponent, {
      //width: '50%',
      //height: '50%',
      data: { candidatureId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  accepter(Email,nom,candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK) {
    this.service.EmailNotif(Email,nom,'Accepté',"Félicitations, vous etes retenu avec nous !").subscribe();
    this.service.StatusCandidature(candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK,'accepté').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();

         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }
    );
  }

  refuser(Email,nom,candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK) {
    this.service.EmailNotif(Email,nom,'Refusé'," Nous accusons réception de votre candidature et vous en remercions. Les effectifs de notre entreprise sont aujourd’hui complets et nous ne sommes pas à la recherche d’un nouvel élément. \nNous ne pouvons donc pas donner une suite favorable à votre demande. Au regard de la qualité de votre candidature, nous nous permettons, si vous n’y voyez pas d’inconvénient, de conserver celle-ci pendant six mois et ne manquerons pas de vous contacter si un besoin se faisait sentir. \nNous vous souhaitons une bonne réussite dans vos recherches d’emploi et vous remercions une nouvelle fois de la confiance dont vous avez fait part pour notre entreprise").subscribe();
    this.service.StatusCandidature(candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK,'refusé').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();

         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }
    );
  }
  encours(Email,nom,candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK) {
    this.service.StatusCandidature(candidatureID,date_postulation,curriculum_Vitae,score,nb_annee_exp_candidat,offreFK,candidatFK,'en cours').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();

         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }
    );
  }
  openConfirm(id){

    const dialogRef =  this.dialog.open(ConfirmDeleteComponent, {
      //width: '50%',
      //height: '50%',
      data: { candidatureId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });


  }

  }



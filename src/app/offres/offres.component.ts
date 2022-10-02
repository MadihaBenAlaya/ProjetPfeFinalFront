import { ConfirmDeleteOffreComponent } from './../confirm-delete-offre/confirm-delete-offre.component';
import { EditOffreComponent } from './../edit-offre/edit-offre.component';
import { DetailsOffreComponent } from './../details-offre/details-offre.component';
import { AjoutOffreComponent } from './../ajout-offre/ajout-offre.component';
import { OffresService } from './../shared/offres.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../shared/file.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service : OffresService,
    public dialog: MatDialog,

    private http: HttpClient,
    private fileService: FileService) { }
  offres;

  displayedColumns: string[] = ['nomOffre', 'departement', 'pays', 'diplome_demande', 'experience_demandee','date_debut','action','action1'];
  dataSource: any;
  empdata: any;

  public files: string[] = [];

  ngOnInit(): void {
    this.getPhotos();

    this.service.getOffres().subscribe(
      res =>{
        this.offres = res;
        this.dataSource = new MatTableDataSource<any>(this.offres);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err =>{
        console.log(err);
      }

    );

  }
  private getPhotos = () => {
    this.fileService.getPhotos().subscribe(data => this.files = data['photos']);
}

  openDialog() {
    const dialogRef = this.dialog.open(AjoutOffreComponent, {

    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOffre();
      console.log(`Dialog result: ${result}`);
    });
  }

  openOffreDetails(id) {

    const dialogRef =  this.dialog.open(DetailsOffreComponent, {
      //width: '50%',
      //height: '50%',
      data: { offreId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOffre();
      console.log(`Dialog result: ${result}`);
    });
  }
getOffre(){
  this.service.getOffres().subscribe(
    res =>{
      this.offres = res;
      this.dataSource = new MatTableDataSource<any>(this.offres);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    },
    err =>{
      console.log(err);
    }

  );

}
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
  openConfirm(id){

    const dialogRef =  this.dialog.open(ConfirmDeleteOffreComponent, {
      //width: '50%',
      //height: '50%',
      data: { OffreId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });


  }


 openModifierOffre(id) {

  const dialogRef =  this.dialog.open(EditOffreComponent, {
    //width: '50%',
    //height: '50%',
    data: { offreId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
    console.log(`Dialog result: ${result}`);
  });
}
}

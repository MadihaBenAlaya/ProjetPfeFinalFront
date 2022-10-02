import { ConfirmDeletePersonnelComponent } from './../confirm-delete-personnel/confirm-delete-personnel.component';
import { EditPersonnelComponent } from './../edit-personnel/edit-personnel.component';
import { AjoutPersonnelComponent } from './../ajout-personnel/ajout-personnel.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AjoutOffreComponent } from '../ajout-offre/ajout-offre.component';
import { PersonnelService } from '../shared/personnel.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  constructor(private service : PersonnelService,
    public dialog: MatDialog,
    private http: HttpClient,
    ) { }

    @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

    personnel;
    personnelId;

    displayedColumns: string[] = ['fullName','email', 'date_naissance', 'pays', 'diplome','specialite', 'departement','action1'];
  dataSource: any;
  empdata: any;

    ngOnInit(): void {


      this.service.getPersonnels().subscribe(
        res =>{
          this.personnel = res;

          this.dataSource = new MatTableDataSource<any>(this.personnel);
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

    openDialog() {
      const dialogRef = this.dialog.open(AjoutPersonnelComponent, {

      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        console.log(`Dialog result: ${result}`);
      });

    }

    openConfirm(id){

      const dialogRef =  this.dialog.open(ConfirmDeletePersonnelComponent, {
        //width: '50%',
        //height: '50%',
        data: { PersonnelId: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        console.log(`Dialog result: ${result}`);
      });


    }

     openModifierPersonnel(id) {

      const dialogRef =  this.dialog.open(EditPersonnelComponent, {
        //width: '50%',
        //height: '50%',
        data: { personnelId: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        console.log(`Dialog result: ${result}`);
      });
    }


}

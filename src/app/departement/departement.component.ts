import { EditDepartementComponent } from './../edit-departement/edit-departement.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartementService } from './../shared/departement.service';
import { AjoutDepartementComponent } from './../ajout-departement/ajout-departement.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AjoutOffreComponent } from '../ajout-offre/ajout-offre.component';
import { DepartementDetailsComponent } from '../departement-details/departement-details.component';
import { PersonnelService } from '../shared/personnel.service';
import { ConfirmDeleteDepComponent } from '../confirm-delete-dep/confirm-delete-dep.component';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(private service : PersonnelService,
    public dialog: MatDialog,
    private http: HttpClient,
    private snackBar : MatSnackBar,
    ) { }

    @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

    departments;
    departementId;

    displayedColumns: string[] = ['code', 'libelle','action','action1'];
  dataSource: any;
  empdata: any;

    ngOnInit(): void {


      this.service.getDepartements().subscribe(
        res =>{
          this.departments = res;

          this.dataSource = new MatTableDataSource<any>(this.departments);

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
      const dialogRef =this.dialog.open(AjoutDepartementComponent, {

      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        console.log(`Dialog result: ${result}`);
      });
    }

    openDepartementDetails(id) {

      const dialogRef =  this.dialog.open(DepartementDetailsComponent, {
        //width: '50%',
        //height: '50%',
        data: { departementId: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        console.log(`Dialog result: ${result}`);
      });
    }



     openModifierDepartement(id) {

      const dialogRef =  this.dialog.open(EditDepartementComponent, {
        //width: '50%',
        //height: '50%',
        data: { departementId: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        //this.snackBar.open("Département modifié", "OK");
        console.log(`Dialog result: ${result}`);
      });
    }

    openConfirm(id){

      const dialogRef =  this.dialog.open(ConfirmDeleteDepComponent, {
        //width: '50%',
        //height: '50%',
        data: { DepartementId: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        console.log(`Dialog result: ${result}`);
      });


    }
}

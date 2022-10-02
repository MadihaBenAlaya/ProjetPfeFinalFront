import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonnelService } from '../shared/personnel.service';

@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private service : PersonnelService) { }
  departementId;
  personnel;
  derpartement;


  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

    departments;

    displayedColumns: string[] = ['fullName', 'pays', 'ville', 'diplome', 'date_naissance','departement'];
  dataSource: any;
  empdata: any;
  ngOnInit(): void {
    this.departementId=this.data.departementId;
    this.getPersonnelByDepartementId();
    this.getDepartementById();
  }

  getPersonnelByDepartementId(){
    this.service.getPersonnelByDepartementId(this.departementId).subscribe(
      res =>{
        console.log(res)
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

  getDepartementById(){
    this.service.getDepartementById(this.departementId).subscribe(
      res =>{
        console.log(res)
        this.derpartement = res;
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

}

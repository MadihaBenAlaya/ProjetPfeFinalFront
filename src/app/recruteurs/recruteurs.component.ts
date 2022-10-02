import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../shared/user.service';
import { AjoutRecruteurComponent } from './../ajout-recruteur/ajout-recruteur.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recruteurs',
  templateUrl: './recruteurs.component.html',
  styleUrls: ['./recruteurs.component.css']
})
export class RecruteursComponent implements OnInit {
  recruteur;
  dataSource;


  constructor(private service : UserService,
    public dialog: MatDialog,
    private http: HttpClient) { }

    @ViewChild(MatPaginator) paginator !: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;

    displayedColumns: string[] = ['userName','fullName', 'date_naissance','email','numero_telephone','action1'];

  ngOnInit(): void {
    this.service.getRecruteurs().subscribe(
      res =>{
        this.recruteur = res;

        this.dataSource = new MatTableDataSource<any>(this.recruteur);
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
    this.dialog.open(AjoutRecruteurComponent, {

    });
  }
}

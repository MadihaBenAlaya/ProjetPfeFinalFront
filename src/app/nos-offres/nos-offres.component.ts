import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../shared/file.service';
import { OffresService } from '../shared/offres.service';

@Component({
  selector: 'app-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.css']
})
export class NosOffresComponent implements OnInit {

  constructor(private service : OffresService,
    public dialog: MatDialog,
    private http: HttpClient,
    private fileService: FileService) { }

    offres;

    public files: string[] = [];
  ngOnInit(): void {

    this.getPhotos();

    this.service.getOffres().subscribe(
      res =>{
        this.offres = res;

      },
      err =>{
        console.log(err);
      }

    );
  }

  private getPhotos = () => {
    this.fileService.getPhotos().subscribe(data => this.files = data['photos']);
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public AppParameters;
  constructor(private http : HttpClient, private configService: ConfigService) {
    this.AppParameters = this.configService.config;
   }



  public upload(formData: FormData) {
    return this.http.post(`${this.AppParameters.apiUrl}api/file/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public download(fileUrl: string) {
    return this.http.get(`${this.AppParameters.apiUrl}api/file/download?fileUrl=${fileUrl}`, {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob',
    });
}

  public getPhotos() {
    return this.http.get(`${this.AppParameters.apiUrl}api/file/getPhotos`);
  }
}

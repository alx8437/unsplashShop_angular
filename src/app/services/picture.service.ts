import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';



interface Urls {
  small: string;
  regular: string;
}

export interface PictureDate {
  id: string;
  urls: Urls;
  isChecked: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class PictureService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<PictureDate[]> {
    const httpParam = new HttpParams()
      .append('client_id', 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI');
    const url = `${environment.apiUrl}/photos`;
    return this.http.get<PictureDate[]>(url, {params: httpParam}).pipe(
      map(p => {
        return p.map(picture => {
          return {
            id: picture.id,
            urls: picture.urls,
            isChecked: false
          };
        });
      })
    );
  }
}

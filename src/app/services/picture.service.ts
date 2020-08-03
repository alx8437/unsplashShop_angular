import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ParamListPictures, PictureDate} from '../interfaces/Interfaces';


@Injectable({
  providedIn: 'root'
})

export class PictureService {
  paramList: ParamListPictures = {
    page: 1,
    per_page: 10
  };

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<PictureDate[]> {
    const httpParam = new HttpParams()
      .append('client_id', 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI')
      .append('page', this.paramList.page.toString())
      .append('per_page', this.paramList.per_page.toString());
    const url = `${environment.apiUrl}/photos`;
    return this.http.get<PictureDate[]>(url, {params: httpParam}).pipe(
      map(p => {
        return p.map(picture => {
          return {
            id: picture.id,
            urls: picture.urls,
            isChecked: false,
            width: picture.width,
            height: picture.height
          };
        });
      })
    );
  }
}

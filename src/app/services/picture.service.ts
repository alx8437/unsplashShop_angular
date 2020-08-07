import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {GetSearch, ParamListPictures, PictureDate} from '../interfaces/Interfaces';


@Injectable({
  providedIn: 'root'
})

export class PictureService {
  paramList: ParamListPictures = {
    page: 1,
    per_page: 9,
    query: '',
  };

  httpParam = new HttpParams()
    .set('client_id', 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI')
    .set('page', this.paramList.page.toString())
    .set('per_page', this.paramList.per_page.toString())

  constructor(
    private http: HttpClient,
  ) {
  }

  getPhotosList(): Observable<PictureDate[]> {
    const httpParam = new HttpParams()
      .set('client_id', 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI')
      .set('page', this.paramList.page.toString())
      .set('per_page', this.paramList.per_page.toString());
    console.log(httpParam)
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

  getPhotoSearch(): Observable<PictureDate[]> {
    const url = `${environment.apiUrl}/search/photos`;
    return this.http.get<GetSearch>(url, {params: this.httpParam}).pipe(
      map(p => {
        console.log(p)
        return p.results.map(picture => {
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

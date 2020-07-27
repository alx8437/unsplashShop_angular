import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export interface PhotoBody {
  id: string;
  created_at: Date;
  updated_at: Date;
}


export interface Photo {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<Photo[]> {
    const httpParams = new HttpParams()
      .append('client_id', 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI');
    const url = `${environment.apiUrl}/photos`;
    return this.http.get<PhotoBody[]>(url, {params: httpParams}).pipe(
      map(photos => {
        return photos.map(photo => {
          return {
            id: photo.id,
            createdAt: photo.created_at,
            updatedAt: photo.updated_at
          };
        });
      })
    );
  }
}

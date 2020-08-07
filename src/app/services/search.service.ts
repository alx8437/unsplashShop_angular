import {Injectable} from '@angular/core';
import { Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchQuery$: Subject<string> = new Subject();


  constructor() {
  }

  setSearch(query): void {
    this.searchQuery$.next(query);
  }
}

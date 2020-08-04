import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchQuery$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  setSearch(query): void {
    this.searchQuery$.next(query);
  }
}

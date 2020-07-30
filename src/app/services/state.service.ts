import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PictureDate} from './picture.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  picturesState: BehaviorSubject<PictureDate[]> = new BehaviorSubject([]);

  constructor() {
  }

  setPictureItems(value): void {
    this.picturesState.next(value);
  }
}

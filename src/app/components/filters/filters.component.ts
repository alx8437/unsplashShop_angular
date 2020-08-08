import {Component, OnInit, Output} from '@angular/core';
import {FiltersService} from '../../services/filters.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  selectedColor: FormControl = new FormControl('');


  selectOrientation: string;

  colors = this.filterService.colors;
  orientations = this.filterService.orientations;

  constructor(private filterService: FiltersService) {
  }

  ngOnInit(): void {
    this.getSelectColor();
  }

  getSelectColor(): void {
    this.selectedColor.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(data => {
      this.filterService.selectedColor$.next(data);
    });
  }

}

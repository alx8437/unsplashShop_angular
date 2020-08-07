import {Component, OnInit, Output} from '@angular/core';
import {FiltersService} from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  // @Output() selectedColor = new EventEmitter();

  selectedColor: string;
  selectOrientation: string;

  colors = this.filterService.colors;
  orientations = this.filterService.orientations;

  constructor(private filterService: FiltersService) { }

  ngOnInit(): void {
  }

  changeSelect(): void {
    alert(this.selectedColor);
  }

}

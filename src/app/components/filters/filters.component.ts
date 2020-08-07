import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  selectedColor: string;
  selectOrientation: string;

  colors = [
    {value: '', viewValue: 'Non select'},
    {value: 'black_and_white', viewValue: 'Black and white'},
    {value: 'black', viewValue: 'Black'},
    {value: 'white', viewValue: 'White'},
    {value: 'yellow', viewValue: 'Yellow'},
    {value: 'orange', viewValue: 'Orange'},
    {value: 'red', viewValue: 'Red'},
    {value: 'purple', viewValue: 'Purple'},
    {value: 'magenta', viewValue: 'Magenta'},
    {value: 'green', viewValue: 'Green'},
    {value: 'teal', viewValue: 'Teal'},
    {value: 'blue', viewValue: 'Blue'},
  ];

  orientations = [
    {value: '', viewValue: 'Non select'},
    {value: 'landscape', viewValue: 'Landscape'},
    {value: 'portrait', viewValue: 'Portrait'},
    {value: 'squarish', viewValue: 'Squarish'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

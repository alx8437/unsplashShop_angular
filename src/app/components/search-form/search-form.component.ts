import {Component, OnInit} from '@angular/core';
import {PictureService} from '../../services/picture.service';
import {FormControl} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchStr: FormControl = new FormControl('');

  constructor(
    private pictureService: PictureService
  ) {
  }

  ngOnInit(): void {
    this.searchStr.valueChanges.pipe(
      debounceTime(400),
    ).subscribe(data => {
      console.log(data);
    });

  }

  log(): void {
    // console.log(this.query);
    // console.log(typeof(this.query));

  }

  getSearch(): void {
    // this.pictureService.paramList.query = this.query;
    // this.pictureService.getPhotos()
    //   .subscribe(pictures => {
    //   });
  }

}

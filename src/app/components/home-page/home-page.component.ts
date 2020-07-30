import {Component, OnInit} from '@angular/core';
import {PictureDate, PictureService} from '../../services/picture.service';
import {StateService} from '../../services/state.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  picture: PictureDate[] = [];
  checkedItemBay: PictureDate[] = [];

  constructor(private pictureService: PictureService,
              private stateService: StateService) {
  }

  ngOnInit(): void {
    this.pictureService.getPhotos()
      .subscribe((picture: PictureDate[]) => {
        this.picture = picture;
      });
  }


  log(): void {
    this.picture.map(p => {
      console.log(p);
    });
  }

  changeStatus(pictureItem): void {
    this.checkedItemBay.push(pictureItem);
    this.checkedItemBay = this.checkedItemBay.filter(item => {
      return item.isChecked === true;
    });
    // console.log(this.checkedItemBay);
    this.stateService.setPictureItems(this.checkedItemBay);
  }
}


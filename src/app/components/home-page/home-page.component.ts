import {Component, OnInit} from '@angular/core';
import {PictureDate, PictureService} from '../../services/picture.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  picture: PictureDate[] = [];
  checkedItemBay: PictureDate[] = [];

  constructor(private pictureService: PictureService) {
  }

  ngOnInit(): void {
    this.pictureService.getPhotos()
      .subscribe((picture: PictureDate[]) => {
        this.picture = picture;
      });
    this.restoreLocalStorage();
    console.log(this.checkedItemBay);
  }


  log(): void {
    // this.picture.map(p => {
    //   console.log(p);
    // });
  }

  restoreLocalStorage = () => {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.checkedItemBay = JSON.parse(stateAsString);
    }
  }

  saveLocalStorage = () => {
    const stateAsString = JSON.stringify(this.checkedItemBay);
    localStorage.setItem('itemForBay', stateAsString);
  }

  changeStatus(pictureItem): void {
    this.checkedItemBay.push(pictureItem);
    this.checkedItemBay = this.checkedItemBay.filter(item => {
      return item.isChecked === true;
    });
    console.log(this.checkedItemBay);
    this.saveLocalStorage();
  }
}


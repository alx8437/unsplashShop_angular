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
  localStorage: PictureDate[] = [];
  localGet: PictureDate[] = [];

  constructor(private pictureService: PictureService) {
  }

  ngOnInit(): void {
    this.restoreLocalStorage();
    this.setValue();
  }

  setValue(): void {
    if (this.localStorage.length === 0) {
      this.pictureService.getPhotos()
        .subscribe((picture: PictureDate[]) => {
          this.picture = picture;
        });
    } else {
      this.pictureService.getPhotos()
        .subscribe((picture: PictureDate[]) => {
          this.localGet = picture;
          for (const el of this.localStorage) {
            const index = this.localGet.findIndex(item => item.id === el.id);
            this.localGet[index].isChecked = true;
            this.picture = this.localGet;
            this.checkedItemBay = this.localGet.filter(x => {
              return x.isChecked === true;
            });
          }
        });
    }
  }


  log(): void {
    console.log(this.localStorage);
    console.log(this.localGet);
  }

  restoreLocalStorage = () => {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.localStorage = JSON.parse(stateAsString);
    }
  };

  saveLocalStorage = () => {
    const stateAsString = JSON.stringify(this.checkedItemBay);
    localStorage.setItem('itemForBay', stateAsString);
  };

  changeStatus(pictureItem): void {
    this.checkedItemBay.push(pictureItem);
    this.checkedItemBay = this.checkedItemBay.filter(item => {
      return item.isChecked === true;
    });
    console.log(this.checkedItemBay);
    this.saveLocalStorage();
  }
}


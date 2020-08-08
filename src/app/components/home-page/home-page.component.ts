import {Component, OnInit} from '@angular/core';
import {PictureService} from '../../services/picture.service';
import {PictureDate} from '../../interfaces/Interfaces';
import {SearchService} from '../../services/search.service';
import {FiltersService} from '../../services/filters.service';


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

  constructor(
    private pictureService: PictureService,
    private searchService: SearchService,
    private filterService: FiltersService
  ) {
  }

  ngOnInit(): void {
    this.restoreLocalStorage();
    this.setValue();
    this.searchService.searchQuery$
      .subscribe(data => {
        this.pictureService.paramList.query = data;
        this.pictureService.httpParam = this.pictureService.httpParam.set('query', data);
        console.log(this.pictureService.httpParam);
        this.pictureService.getPhotoSearch()
          .subscribe(p => {
            if (p.length !== 0) {
              this.picture = p;
            } else if (p.length === 0) {
              this.setValue();
            }
          });
      });
    this.filterService.selectedColor$
      .subscribe(data => {
        console.log(data);
      });
    console.log(this.filterService.selectedColor$);
    console.log(this.searchService.searchQuery$);
  }

  setValue(): void {
    if (this.localStorage.length === 0) {
      this.pictureService.getPhotosList()
        .subscribe((picture: PictureDate[]) => {
          this.picture = picture;
        });
    } else {
      this.pictureService.getPhotosList()
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
    // console.log(this.filterService.selectItem);
  }

  restoreLocalStorage(): void {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.localStorage = JSON.parse(stateAsString);
    }
  }

  saveLocalStorage(): void {
    const stateAsString = JSON.stringify(this.checkedItemBay);
    localStorage.setItem('itemForBay', stateAsString);
  }

  changeStatus(pictureItem): void {
    this.checkedItemBay.push(pictureItem);
    this.checkedItemBay = this.checkedItemBay.filter(item => {
      return item.isChecked === true;
    });
    this.saveLocalStorage();
  }

  onScroll(): void {
    this.pictureService.paramList.page += 1;
    console.log(this.pictureService.paramList.page);
    if (this.pictureService.paramList.query !== '') {
      this.pictureService.httpParam = this.pictureService.httpParam.set('page', this.pictureService.paramList.page.toString());
      console.log(this.pictureService.httpParam);
      this.pictureService.getPhotoSearch()
        .subscribe(p => {
          console.log(p);
          this.picture.push(...p);
          console.log(this.picture);
        });
    } else {
      this.pictureService.getPhotosList()
        .subscribe((p) => {
          this.picture.push(...p);
        });
    }
  }


}


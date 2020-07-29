import {Component, OnInit} from '@angular/core';
import {PictureDate, PictureService, Urls} from '../services/picture.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  picture = [];

  constructor(private pictureService: PictureService) {
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

  changeStatus(id): void {
    console.log(id);
  }
}

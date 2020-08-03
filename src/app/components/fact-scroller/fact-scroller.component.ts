import { Component, OnInit } from '@angular/core';
import {PictureDate} from '../../interfaces/Interfaces';
import {PictureService} from '../../services/picture.service';

@Component({
  selector: 'app-fact-scroller',
  templateUrl: './fact-scroller.component.html',
  styleUrls: ['./fact-scroller.component.scss']
})
export class FactScrollerComponent implements OnInit{
  dataPicture: PictureDate[] = [];

  constructor(private pictureServices: PictureService) {}

  ngOnInit(): void {
    this.pictureServices.getPhotos()
      .subscribe((p) => {
        this.dataPicture = p;
      });
  }

  log(): void {
    console.log(this.dataPicture);
  }

  onScroll(): void {
    console.log('Scrolled!')
    this.pictureServices.paramList.page += 1;
    this.pictureServices.getPhotos()
      .subscribe((p) => {
        this.dataPicture = p;
      });
  }

}

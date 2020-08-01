import { Component, OnInit } from '@angular/core';
import {PictureDate, PictureService} from "../../services/picture.service";

@Component({
  selector: 'app-fact-scroller',
  templateUrl: './fact-scroller.component.html',
  styleUrls: ['./fact-scroller.component.scss']
})
export class FactScrollerComponent implements OnInit{
  dataPicture: PictureDate[] = [];

  constructor(private pictureServices: PictureService) {}

  ngOnInit() {
    this.pictureServices.getPhotos()
      .subscribe((p) => {
        this.dataPicture = p;
      })
  }

  log() {
    console.log(this.dataPicture)
  }

}

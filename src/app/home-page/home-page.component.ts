import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhotosService} from '../services/photos.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  photos = [];


  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos()
      .subscribe(data => {
        console.log(data);
      });

  }

}

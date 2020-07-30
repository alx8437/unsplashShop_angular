import { Component, OnInit } from '@angular/core';
import { PictureDate } from '../../services/picture.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shopItemBay: PictureDate[] = [];

  constructor() {
  }

  restoreLocalStorage = () => {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.shopItemBay = JSON.parse(stateAsString);
    }
    }

  ngOnInit(): void {
    this.restoreLocalStorage();
  }





  log(): void {
    console.log(this.shopItemBay);
  }

}

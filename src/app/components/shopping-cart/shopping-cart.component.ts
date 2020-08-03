import { Component, OnInit } from '@angular/core';
import {PictureDate} from '../../interfaces/Interfaces';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shopItemsBay: PictureDate[] = [];

  constructor() {
  }

  restoreLocalStorage = () => {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.shopItemsBay = JSON.parse(stateAsString);
    }
    }

  ngOnInit(): void {
    this.restoreLocalStorage();
  }





  log(): void {
    console.log(this.shopItemsBay);
  }

}

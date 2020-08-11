import {Component, OnInit} from '@angular/core';
import {PictureDate} from '../../interfaces/Interfaces';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shopItemsBay: PictureDate[] = [];
  sumAllItems = 0;
  promocodeValue;
  promocode: FormControl = new FormControl({value: '', disabled: false});

  constructor() {
  }

  restoreLocalStorage = () => {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.shopItemsBay = JSON.parse(stateAsString);
    }
  };

  ngOnInit(): void {
    this.restoreLocalStorage();
    this.setSumItems();
    this.setPromocodeValue();
  }


  setSumItems(): void {
    this.shopItemsBay.map(item => {
      this.sumAllItems += item.width;
    });
  }

  setPromocodeValue(): void {
    this.promocode.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(data => {
      this.promocodeValue = data;
    });
  }

  applyPromocode(): void {
    const discount = +this.promocodeValue.slice(5, 7);
    this.sumAllItems = this.sumAllItems - (this.sumAllItems / 100 * discount);
  }

  clearForm(): void {
    this.sumAllItems = 0;
    this.setSumItems();
  }


  log(): void {
    console.log(this.promocodeValue);
  }

}

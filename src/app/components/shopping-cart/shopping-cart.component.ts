import {Component, OnInit} from '@angular/core';
import {PictureDate, Preloader} from '../../interfaces/Interfaces';
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
  preloader: Preloader = {
    status: false,
    color: 'accent',
    mode: 'indeterminate',
    value: 50
  };

  constructor() {
  }

  restoreLocalStorage = () => {
    const stateAsString = localStorage.getItem('itemForBay');
    if (stateAsString !== null) {
      this.shopItemsBay = JSON.parse(stateAsString);
    } else {
      this.shopItemsBay = [];
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

  bayPicture(): void {
    this.preloader.status = true;
    setTimeout(() => {
      this.preloader.status = false;
      localStorage.clear();
      this.restoreLocalStorage();
      this.sumAllItems = 0;
    }, 2000);
  }

  saveLocalStorage(): void {
    const stateAsString = JSON.stringify(this.shopItemsBay);
    localStorage.setItem('itemForBay', stateAsString);
  }

  deleteItem(id): void {
    this.shopItemsBay = this.shopItemsBay.filter(item => {
      return item.id !== id;
    });
    this.saveLocalStorage();
    this.sumAllItems = 0;
    this.setSumItems();
  }


  log(): void {
    // this.shopItemsBay.filter(item => {
    //   console.log(item);
    // });
  }

}

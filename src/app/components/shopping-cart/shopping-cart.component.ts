import {Component, OnInit, OnDestroy} from '@angular/core';
import {StateService} from '../../services/state.service';
import {Subscription} from 'rxjs';
import {PictureDate} from '../../services/picture.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  shopItemBay: PictureDate[] = [];
  pictures$: Subscription;

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.pictures$ = this.stateService.picturesState
      .subscribe(data => {
        console.log(data);
        this.getItem(data);
      });
  }

  ngOnDestroy(): void {
    this.pictures$.unsubscribe();
  }

  getItem(data): void {
    this.shopItemBay.push(data);
  }

  log(): void {
    console.log(this.shopItemBay);
  }

}

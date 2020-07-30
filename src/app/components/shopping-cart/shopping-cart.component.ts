import { Component, OnInit, OnDestroy } from '@angular/core';
import {StateService} from '../../services/state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {


  pictures$: Subscription;
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.pictures$ = this.stateService.picturesState
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.pictures$.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fact-scroller',
  templateUrl: './fact-scroller.component.html',
  styleUrls: ['./fact-scroller.component.scss']
})
export class FactScrollerComponent{
  numbers = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }


}

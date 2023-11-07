import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],

  template:`
    @switch(fruit$ | async){ @case('apple'){
    <h5>I like apples!</h5>
    } @case('orange'){
    <h5>I like oranges!</h5>
    } @case('banana'){
    <h5>I like bananas!</h5>
    } @default {
    <h5>I don't like fruit.</h5>
    } }

  `

})
export class SwitchComponent {
  products = ['apple', 'orange', 'banana'];
  fruit$: Observable<string | null>;

  constructor() {
    const productsIndexValue = this.products
      .map((_, index) => index)
      .concat(100);
    this.fruit$ = interval(3000).pipe(
      map(() => {
        const randomIndex = productsIndexValue.at(
          Math.floor(Math.random() * productsIndexValue.length)
        );
        return this.products.at(randomIndex!) ?? null;
      })
    );
  }

}

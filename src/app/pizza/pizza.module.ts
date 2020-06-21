import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { pizzaReducer } from './pizza.reducer';



@NgModule({
  declarations: [PizzaOrderComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza', pizzaReducer)
  ],
  exports:[PizzaOrderComponent]
})
export class PizzaModule { }

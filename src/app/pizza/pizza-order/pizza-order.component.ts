import { Component, OnInit } from '@angular/core';
import * as fromPizza from '../pizza.reducer';
import * as fromAction from '../pizza.actions';
import { Store, select } from '@ngrx/store';
import { selectAll, selectIds, selectEntities, selectTotal } from '../pizza.selector';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {
  pizzas: any;
  pizzaselectIds: any;
  pizzaselectEntities: any;
  pizzaselectTotal: any;

  constructor(private store: Store<fromPizza.State>) { }

  ngOnInit(): void {
    this.pizzas = this.store.pipe(select(selectAll))
    this.pizzaselectIds = this.store.pipe(select(selectIds))
    this.pizzaselectEntities = this.store.pipe(select(selectEntities))
    this.pizzaselectTotal = this.store.pipe(select(selectTotal))
  
  }


  createPizza() {
    this.store.dispatch(fromAction.createPizza({ pizza: { id: new Date().getUTCMilliseconds().toString(), size: 'small' } }));
  }

  updatePizza(id, size: string) {
    this.store.dispatch(fromAction.updatePizza({ id, changes: {size} }));
  }

  removePizza(id) {
    this.store.dispatch(fromAction.deletePizza({ id }));
  }

}

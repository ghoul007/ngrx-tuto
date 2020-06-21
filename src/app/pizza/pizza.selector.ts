import { createFeatureSelector } from '@ngrx/store';
import * as   fromPizzaReducer from './pizza.reducer';

export const getPizzaState =  createFeatureSelector<fromPizzaReducer.State>('pizza')

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = fromPizzaReducer.pizzaAdapter.getSelectors(getPizzaState);
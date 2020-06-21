import * as  fromCatList from './app/ngrx/cat.reducer';
import * as  fromPizza from './app/pizza/pizza.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer } from './app/pizza/pizza.reducer';

export interface AppState {
    catList: fromCatList.State;
    pizza: fromPizza.State;
}



const newLocal = fromCatList.catListReducer;
export const appReducers: ActionReducerMap<AppState> = {
    catList: newLocal,
    pizza: pizzaReducer,

};

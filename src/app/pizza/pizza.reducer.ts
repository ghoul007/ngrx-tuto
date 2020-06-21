import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Pizza } from './pizza.model';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import *  as pizzaActions from './pizza.actions'



export const pizzaAdapter = createEntityAdapter<Pizza>();

export interface State extends EntityState<Pizza> { }

const defaultPizza = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            size: 'small'
        }
    }
}

const initialState = pizzaAdapter.getInitialState(defaultPizza);

const _pizzaReducer = createReducer(
    initialState,
    on(pizzaActions.createPizza, (state, action) => ( pizzaAdapter.addOne(action.pizza, state))),
    on(pizzaActions.updatePizza, (state, action) => ( pizzaAdapter.updateOne({id: action.id, changes: action.changes}, state))),
    on(pizzaActions.deletePizza, (state, action) => ( pizzaAdapter.removeOne(  action.id , state))),
    // on(pizzaActions.createPizza, state => ({ ...state, prop: { pizza: { id: 1, size: 10 } } })),
);

export function pizzaReducer(state, action) {
    return _pizzaReducer(state, action);
}
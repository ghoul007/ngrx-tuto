import { Pizza } from './pizza.model';
import { createAction, props } from '@ngrx/store';

export const createPizza = createAction('[Pizza] Create ', props<{pizza: Pizza}>());
export const updatePizza = createAction('[Pizza] Update ', props<{id, changes}>());
export const deletePizza = createAction('[Pizza] Delete ', props<{id}>());
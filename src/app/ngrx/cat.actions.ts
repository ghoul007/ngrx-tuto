import { createAction, props } from '@ngrx/store';
import { Cat } from './cat';



export const FetchCats = createAction('[Cat] FETCH ', props<{}>());
export const AddCat = createAction('[Cat] ADD ', props<{cat: Cat}>());



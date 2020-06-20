import * as  fromCatList from './app/ngrx/cat.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    catList: fromCatList.State;
}



const newLocal = fromCatList.catListReducer;
export const appReducers: ActionReducerMap<AppState> = {
    catList: newLocal,

};

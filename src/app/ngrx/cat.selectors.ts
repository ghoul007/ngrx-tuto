import { createSelector } from '@ngrx/store';

import { AppState } from './../../store';

const cats = (state: AppState) => state.catList.cats;
export const selectCatProperty = createSelector(
    cats,
    (c) => c.length
);
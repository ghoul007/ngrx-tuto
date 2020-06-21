import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Cat } from './cat';
import { AddCat, StartCats } from './cat.actions';

@Injectable()
export class CatEffects {


    catLogin = createEffect(() => this.action$.pipe(
        ofType(StartCats),
        switchMap(data => {
            return of({ name: "ghoul" })
                .pipe(
                    catchError(err => {
                        return of(err);
                    }),
                    map(d => {
                        return AddCat({ cat: new Cat('rff') });
                    })
                )
        }),
    )
    )

    constructor(private action$: Actions) { }




}
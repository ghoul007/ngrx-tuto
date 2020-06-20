import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from './../store';
import { Cat } from './ngrx/cat';
import * as CatAction from './ngrx/cat.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cats$: any;
  constructor(private store: Store<AppState>) {
    this.cats$ = this.store.pipe(select('catList'))

  }



  getCat() {
    this.store.dispatch(CatAction.FetchCats({}));
    this.store.dispatch(CatAction.AddCat({ cat: new Cat('ahmed') }));
    console.log('cat')
  }
}

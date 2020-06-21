import { UserService } from './users.service';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from './../store';
import * as CatAction from './ngrx/cat.actions';
import { selectCatProperty } from './ngrx/cat.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cats$: any;
  length$: any;
  users$: any;
  constructor(private store: Store<AppState>, private usersService:UserService) {
    this.cats$ = this.store.pipe(select('catList'));
    this.length$ = this.store.pipe(select(selectCatProperty));

    this.users$ = this.usersService.getAll()

  }



  getCat() {
    // this.store.dispatch(CatAction.FetchCats({}));
    this.store.dispatch(CatAction.StartCats({}));
    // this.store.dispatch(CatAction.AddCat({ cat: new Cat('ahmed') }));
  }
}

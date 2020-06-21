import { CatEffects } from './ngrx/cat.effects';
import { appReducers } from 'src/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';
import { extModules } from './build';



export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers, { metaReducers: [debug] }),
    EffectsModule.forRoot([CatEffects]),
    extModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


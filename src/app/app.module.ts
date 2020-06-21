import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { appReducers } from 'src/store';

import { AppComponent } from './app.component';
import { extModules } from './build';
import { CatEffects } from './ngrx/cat.effects';
import { RouterModule } from '@angular/router';


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
    StoreModule.forRoot(appReducers, {
      metaReducers: [debug], runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([CatEffects]),
    StoreRouterConnectingModule.forRoot(),
    extModules,
    RouterModule.forRoot([
      { path: '', redirectTo: '/index', pathMatch:'full' },
      { path: 'index', component: AppComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


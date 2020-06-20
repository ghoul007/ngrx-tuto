import { appReducers } from 'src/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

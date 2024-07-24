import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GearStatComponent } from './components/gear-stat/gear-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    GearStatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePhilipsPipe } from "./pipes/capitalize-philips.pipe";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CapitalizePhilipsPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

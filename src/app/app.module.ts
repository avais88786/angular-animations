import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpenClosedComponent } from '../components/open-closed/open-closed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from "ngx-accordion";


@NgModule({
  declarations: [
    AppComponent,
    OpenClosedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

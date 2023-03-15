import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccueilModule} from "./pages/accueil/accueil.module";
import {CommonComponentModule} from "./components/common.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

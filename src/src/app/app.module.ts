import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./pages/home/home.module";
import { UsersComponent } from './pages/users/users.component';
import {UsersModule} from "./pages/users/users.module";
import { UsersNavComponent } from './components/users-nav/users-nav.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

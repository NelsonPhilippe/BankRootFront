import { NgModule } from '@angular/core';
import {NavComponent} from "./nav/nav.component";
import {UsersNavComponent} from "./users-nav/users-nav.component";
import { UserMenuComponent } from './users-nav/user-menu/user-menu.component';
import {IonicModule} from "@ionic/angular";


@NgModule({

  imports: [
    NavComponent,
    UsersNavComponent,
  ],
  providers: [],
  exports: [NavComponent, UsersNavComponent ]
})
export class CommonComponentModule { }

import { NgModule } from '@angular/core';
import {NavComponent} from "./nav/nav.component";
import {UsersNavComponent} from "./users-nav/users-nav.component";


@NgModule({
  declarations: [
  ],
  imports: [
    NavComponent,
    UsersNavComponent
  ],
  providers: [],
  exports: [NavComponent, UsersNavComponent]
})
export class CommonComponentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonComponentModule} from "../../components/common.module";
import {UsersRoutingModule} from "./user-routing.module";
import {UsersComponent} from "./users.component";
import { RequestsComponent } from './requests/requests.component';



@NgModule({
  declarations: [UsersComponent, RequestsComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    UsersRoutingModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }

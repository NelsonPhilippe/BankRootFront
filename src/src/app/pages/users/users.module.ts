import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonComponentModule} from "../../components/common.module";
import {UsersRoutingModule} from "./user-routing.module";
import {UsersComponent} from "./users.component";
import { RequestsComponent } from './requests/requests.component';
import {httpInterceptorProviders} from "../../http-interceptors";
import {AuthService} from "../../services/auth.service";



@NgModule({
  declarations: [UsersComponent, RequestsComponent],
  providers: [AuthService, httpInterceptorProviders],
  imports: [
    CommonModule,
    CommonComponentModule,
    UsersRoutingModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }

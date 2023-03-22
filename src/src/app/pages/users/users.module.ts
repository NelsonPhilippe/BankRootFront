import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonComponentModule} from "../../components/common.module";
import {UsersRoutingModule} from "./user-routing.module";
import {UsersComponent} from "./users.component";
import { RequestsComponent } from './requests/requests.component';
import {httpInterceptorProviders} from "../../http-interceptors";
import {AuthService} from "../../services/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [UsersComponent, RequestsComponent, ProfileComponent],
  providers: [AuthService, httpInterceptorProviders],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    CommonComponentModule,

  ],
  exports: [UsersComponent]
})
export class UsersModule { }

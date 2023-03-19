import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {CommonComponentModule} from "../../components/common.module";
import {HomeRoutingModule} from "./home-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import { SigningComponent } from './signing/signing.component';
import {httpInterceptorProviders} from "../../http-interceptors";
import {AuthService} from "../../services/auth.service";



@NgModule({
  declarations: [HomeComponent, SignupComponent, SigningComponent],
  providers: [AuthService, httpInterceptorProviders],
  imports: [
    CommonComponentModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgIf
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

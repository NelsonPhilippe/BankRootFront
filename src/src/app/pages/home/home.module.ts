import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {CommonComponentModule} from "../../components/common.module";
import {HomeRoutingModule} from "./home-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";



@NgModule({
  declarations: [HomeComponent, SignupComponent],
  imports: [
    CommonComponentModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgIf
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import {AccueilComponent} from "./accueil.component";
import {CommonComponentModule} from "../../components/common.module";
import {AccueilRoutingModule} from "./accueil-routing.module";



@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonComponentModule,
    AccueilRoutingModule
  ],
  exports: [AccueilComponent]
})
export class AccueilModule { }

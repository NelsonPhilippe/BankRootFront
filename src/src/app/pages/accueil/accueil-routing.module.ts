import {AccueilComponent} from "./accueil.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes : Routes = [
  {
    path: '',
    component: AccueilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccueilRoutingModule { }

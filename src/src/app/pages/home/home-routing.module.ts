import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {SigningComponent} from "./signing/signing.component";
import {canActivate} from "../../guards/jwt.guard";

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signing',
    component: SigningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

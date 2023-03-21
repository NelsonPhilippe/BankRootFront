import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {RequestsComponent} from "./requests/requests.component";
import {canActivate} from "../../guards/jwt.guard";
import {ProfileComponent} from "./profile/profile.component";

const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: UsersComponent,
        canActivate: [canActivate]
      },
      {
        path: "requests", component: RequestsComponent,
        canActivate: [canActivate],
      },
      {
        path: 'profile', component: ProfileComponent,
        canActivate: [canActivate]
      }
    ]
  },
  {
    path: 'users/**',
    redirectTo: 'users/home',
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

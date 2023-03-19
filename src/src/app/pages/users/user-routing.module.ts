import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {RequestsComponent} from "./requests/requests.component";
import {canActivate} from "../../guards/jwt.guard";

const routes : Routes = [
  {
    path: "home", component: UsersComponent,
    canActivate: [canActivate]
  },
  {
    path: "requests", component: RequestsComponent,
    canActivate: [canActivate]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

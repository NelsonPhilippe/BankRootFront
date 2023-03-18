import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {RequestsComponent} from "./requests/requests.component";

const routes : Routes = [
  { path: "home", component: UsersComponent},
  { path: "requests", component: RequestsComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

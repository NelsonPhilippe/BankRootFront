import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";

const routes : Routes = [
  { path: "home", component: UsersComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

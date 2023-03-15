import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./pages/accueil/accueil.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

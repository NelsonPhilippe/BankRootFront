import {inject, Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(!auth.getToken()) {
    router.navigate(['/signing']);
    return false;
  }

  return true;
}

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authentiationService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).
    pipe(catchError(err => {
      if (err.status === 401) {
        this.authentiationService.logout();
        location.reload(); }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}

import {Injectable} from "@angular/core";
import {BehaviorSubject, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginInterface} from "../pages/interfaces/login.interface";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  private readonly jwtToken = 'JWT_TOKEN';
  private isAuthentificatedSubhect = new BehaviorSubject<boolean>(false);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(data: LoginInterface) {
    return this.http.post('/api/auth/login', data, this.httpOptions).pipe(
      tap((token: any) => {
        localStorage.setItem(this.jwtToken, token.access_token);
        this.isAuthentificatedSubhect.next(true);

      })
    );
  }

  getToken() {
    return localStorage.getItem(this.jwtToken);
  }

  logout() {
    localStorage.removeItem(this.jwtToken);
    this.isAuthentificatedSubhect.next(false);
  }

  isAuthentificated() {
    return this.isAuthentificatedSubhect.asObservable();
  }

}

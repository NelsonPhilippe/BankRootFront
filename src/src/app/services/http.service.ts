import {HttpClient} from "@angular/common/http";
import {RegisterInterface} from "../pages/interfaces/register.interface";

export class HttpService {
  constructor(private http: HttpClient) { }

  register(data: RegisterInterface) {
    return this.http.post('/auth/register', data);
  }

}

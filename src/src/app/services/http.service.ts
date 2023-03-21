import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterInterface} from "../pages/interfaces/register.interface";
import {Injectable} from "@angular/core";
import {LoginInterface} from "../pages/interfaces/login.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  register(data: RegisterInterface) {
    console.log(data)
    return this.http.post('/api/auth/register', data, this.httpOptions);
  }



  users() {
    return this.http.get('/api/user', this.httpOptions);
  }

  getProfile() {
    return this.http.get('/api/user/find/profile', this.httpOptions);
  }

  getProfileById(id: number) {
    return this.http.get(`/api/user/${id}`, this.httpOptions);
  }

  getBankAccount(uuid: string) {
    return this.http.get(`/api/bank-account/user/${uuid}`, this.httpOptions);
  }

  getTransactionsByBankAccount(num_account: string) {
    return this.http.get(`/api/transaction/bank-account/${num_account}`, this.httpOptions);
  }

  getAccountRequestByUser(uuid: string) {
    return this.http.get(`/api/account-request/${uuid}`, this.httpOptions);
  }

  deleteAccountRequest(id: string) {
    return this.http.delete(`/api/account-request/${id}`, this.httpOptions);
  }

  createAccountRequest(data: any) {
    return this.http.post('/api/account-request', data, this.httpOptions);
  }
}

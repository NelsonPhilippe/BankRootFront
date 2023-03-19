import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../services/http.service";
import {isArray} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  transactions?: any[];
  solde?: number;

  accounts!: any[];
  constructor(private http: HttpService, private authService: AuthService) {
  }

  async ngOnInit(): Promise<void> {
    const profile = await this.getProfile();
    const user = await this.getUser(profile.sub);
    const bankAccounts = await this.getBankAccountsByUser(user.uuid);
    this.loadTransactions(bankAccounts);
    this.loadBankAccounts(bankAccounts);
    console.log(bankAccounts)

  }

  loadTransactions(bankAccounts: any) {
    for(const account of bankAccounts) {

      this.http.getTransactionsByBankAccount(account.num_account).subscribe((data: any) => {
        // console.log(JSON.stringify(data));
        if(!(data.data instanceof Array)){
          this.transactions = [];
          return;
        }

        this.transactions = data.data;

      });
    }
  }

  loadBankAccounts(bankAccounts: any) {
    for(let i = 0; i < bankAccounts.length; i++) {

      if(i === 0) {
        this.solde = bankAccounts[i].currency;
        console.log(this.solde)
        continue;
      }

      this.accounts?.push(bankAccounts[i]);
    }
  }

  getProfile(){
    return new Promise<any>((resolve, reject) => {
      this.http.getProfile().subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getUser(id: number): any {
    return new Promise<any>((resolve, reject) => {
      this.http.getProfileById(id).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getBankAccountsByUser(uuid: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.getBankAccount(uuid).subscribe((data: any) => {
        resolve(data.data);
      });
    });
  }
}

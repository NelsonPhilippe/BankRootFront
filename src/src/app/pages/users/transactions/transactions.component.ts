import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions!: any[];

  constructor(private http: HttpService) {

  }


  async ngOnInit(): Promise<void> {
    const user = await this.getUser();
    const tr = ((await this.getTransactions()) as any[]).filter(e => e.id_user === user.sub);
    this.transactions = tr;
  }


  async getTransactions() {

    return new Promise<any>((resolve, reject) => {
      this.http.getTransactions().subscribe(data => {
        resolve(data);
      })
    })
  }

  getUser() {
    return new Promise<any>((resolve, reject) => {
      this.http.getProfile().subscribe((data: any) => {
        resolve(data);
      });
    });
  }


}

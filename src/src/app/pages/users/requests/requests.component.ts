import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../services/auth.service";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit{

  private requests!: any[];

  constructor(private http: HttpService, private authService: AuthService) {
  }

  async ngOnInit(): Promise<void> {
    const user = await this.getUser();
    console.log(user)
    const requests = await this.getRequests(user.uuid);
    console.log(requests)


  }

  getUser() {
    return new Promise<any>((resolve, reject) => {
      this.http.getProfile().subscribe((data: any) => {
        this.http.getProfileById(data.sub).subscribe((data: any) => {
          resolve(data);
        });
      });
    });
  }

  getRequests(uuid: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.getAccountRequestByUser(uuid).subscribe((data: any) => {
        resolve(data.data);
      });
    });
  }
}

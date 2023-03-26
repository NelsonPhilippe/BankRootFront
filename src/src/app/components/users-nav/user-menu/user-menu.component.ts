import {Component, OnInit} from '@angular/core';
import {Icon} from "ionicons/dist/types/components/icon/icon";
import {IonicModule} from "@ionic/angular";
import {CommonComponentModule} from "../../common.module";
import {RouterLink} from "@angular/router";
import { HttpService } from 'src/app/services/http.service';

@Component({
  standalone: true,
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  imports: [
    IonicModule,
    RouterLink,
  ],
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit{


  username!: string;

  constructor(private http: HttpService) {

  }

  async ngOnInit(): Promise<void> {

    this.username = (await this.getProfile()).name
  }

  menuToggle() {
    const navigation = document.querySelector('.navigation');
    if(navigation == null) return;
    navigation.classList.toggle('active');
  }

  getProfile(): Promise<any>  {
    return new Promise((resolve, reject) => {
      this.http.getProfile().subscribe((data: any) => {
        this.http.getProfileById(data.sub).subscribe(data => {
          resolve(data);
        })
      })
    })
  }

}

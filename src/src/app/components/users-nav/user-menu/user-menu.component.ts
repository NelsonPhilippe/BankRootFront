import {Component, OnInit} from '@angular/core';
import {Icon} from "ionicons/dist/types/components/icon/icon";
import {IonicModule} from "@ionic/angular";
import {CommonComponentModule} from "../../common.module";
import {RouterLink} from "@angular/router";

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

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
  }

  menuToggle() {
    const navigation = document.querySelector('.navigation');
    if(navigation == null) return;
    navigation.classList.toggle('active');
  }

}

import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {CommonComponentModule} from "../common.module";
import {UserMenuComponent} from "./user-menu/user-menu.component";

@Component({
  standalone: true,
  selector: 'app-users-nav',
  templateUrl: './users-nav.component.html',
  imports: [
    NgIf,
    RouterLink,
    UserMenuComponent
  ],
  styleUrls: ['./users-nav.component.scss']
})
export class UsersNavComponent implements OnInit{

  @Input()
  desktop!: boolean;

  constructor() {
  }
  ngOnInit(): void {
    this.desktop = window.innerWidth >= 600;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    this.desktop = event.target.innerWidth >= 600;
  }

  showProfile(event: MouseEvent) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown');

    if(dropdown == null) {
      return;
    }

    if(dropdown.style.height == '0px' || dropdown.style.height == '') {
      dropdown.style.height = '9rem';
      return;
    }
    dropdown.style.height = 0 + 'px';
  }

}

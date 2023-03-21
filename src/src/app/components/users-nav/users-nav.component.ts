import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-users-nav',
  templateUrl: './users-nav.component.html',
  imports: [
    NgIf,
    RouterLink
  ],
  styleUrls: ['./users-nav.component.scss']
})
export class UsersNavComponent implements OnInit{

  @Input()
  desktop!: boolean;

  constructor() {
  }
  ngOnInit(): void {
    console.log(window.innerWidth);
    this.desktop = window.innerWidth >= 600;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.innerWidth);

    this.desktop = event.target.innerWidth >= 600;
  }


}

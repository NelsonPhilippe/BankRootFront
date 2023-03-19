import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  @Input()
  connected!: boolean;

  ngOnInit(): void {
    console.log(this.connected);
  }
}

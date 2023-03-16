import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss']
})
export class SigningComponent implements OnInit{
  @Input() signing!: FormGroup;
  error: boolean;

  constructor() {
    this.error = false;
  }

  ngOnInit(): void {
    this.signing = new FormGroup({
      email : new FormControl(),
      password : new FormControl(),
    })
  }

  onSubmit() {
    console.log(this.signing.value);
  }

}

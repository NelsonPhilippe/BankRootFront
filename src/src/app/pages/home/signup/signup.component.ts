import { Component, Input, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() signup!: FormGroup;

  ngOnInit(): void {
    this.signup = new FormGroup({
      firstname : new FormControl(),
      lastname : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      confirmedPassword : new FormControl(),
    })
  }

  onSubmit() {
    console.log(this.signup.value);
  }

}

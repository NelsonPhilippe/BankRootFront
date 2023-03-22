import { Component, Input, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpService} from "../../../services/http.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() signup!: FormGroup;

  constructor(private httpService: HttpService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if(this.authService.getToken()) {
      this.router.navigate(['/home']);
    }

    this.signup = new FormGroup({
      firstname : new FormControl(),
      lastname : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      confirmedPassword : new FormControl(),
    })
  }

  onSubmit() {
    const {firstname, lastname, email, password, confirmedPassword} = this.signup.value;

    if(password !== confirmedPassword) {
      console.log('Passwords do not match');
      return;
    }

    const register = this.httpService.register({
      name: firstname,
      lastname: lastname,
      mail: email,
      password: password
    });

    register.subscribe((data: any) => {
      const statusCode = data.statusCode;

      console.log(statusCode);

      if(statusCode === 200) {
        this.authService.login({
          mail: email,
          password: password
        }).subscribe((data: any) => {
          this.router.navigate(['/users']);

        });
      }
    })

  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss']
})
export class SigningComponent implements OnInit{
  @Input() signing!: FormGroup;
  error: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.error = false;
  }

  ngOnInit(): void {

    if(this.authService.getToken()) {
      this.router.navigate(['/home']);
    }

    this.signing = new FormGroup({
      mail : new FormControl(),
      password : new FormControl(),
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const {mail, password} = this.signing.value;
    this.authService.login({mail, password}).pipe(first()).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  @Input()
  profile!: FormGroup;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.profile = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      mail : new FormControl(),
    });
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const {name, lastname, mail} = this.profile.value;
    const profile = await this.getProfile();
    console.log(name, lastname, mail);

    this.http.updateProfile(profile.sub, {name, lastname, mail}).subscribe((data: any) => {
      console.log(data);
    });
  }

  getProfile(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.getProfile().subscribe((data: any) => {
        resolve(data);
      });
    });
  }
}

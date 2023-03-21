import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../services/auth.service";
import {HttpService} from "../../../services/http.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit{

  requests!: any[];

  request!: FormGroup;

  constructor(private http: HttpService, private authService: AuthService) {

  }

  async ngOnInit(): Promise<void> {

    this.request = new FormGroup({
      type: new FormControl(),
      content: new FormControl(),
    });

    const user = await this.getUser();
    console.log(user)
    const requests = await this.getRequests(user.uuid);
    this.requests = requests;
    console.log(requests);



  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const {type, content} = this.request.value;
    const user = await this.getUser();

    this.createRequest(type, content);
    const modal = document.getElementById('modal-request');
    if(modal !== null) {
      modal.style.display = 'none';
    }

    console.log(this.requests);
  }

  openModal() {
    const modal = document.getElementById('modal-request');
    if(modal !== null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('modal-request');
    if(modal !== null) {
      modal.style.display = 'none';
    }
  }

  async createRequest(type: string, content: string) {
    const user = await this.getUser();
    return new Promise<any>((resolve, reject) => {
      this.http.createAccountRequest({
        uuid: user.uuid,
        content: content,
        type: type,
      }).subscribe(async (data: any) => {
        const requests = await this.getRequests(user.uuid);
        this.requests = requests;
        console.log(data);
        resolve(data);
      });
    })

  }

  getUser() {
    return new Promise<any>((resolve, reject) => {
      this.http.getProfile().subscribe((data: any) => {
        this.http.getProfileById(data.sub).subscribe((data: any) => {

          resolve(data);
        });
      });
    });
  }

  getRequests(uuid: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.getAccountRequestByUser(uuid).subscribe((data: any) => {
        resolve(data.data);
      });
    });
  }

  toggleMenu(event: MouseEvent, id: string) {
    const menuElement = document.getElementById('menu-' + id);
    const rowElement = document.getElementById('row-' + id);
    if(menuElement === null || rowElement === null ) {
      return;
    }

    const style = window.getComputedStyle(menuElement).display;

    if(style === 'none') {
      menuElement.style.display = 'flex';
      rowElement.style.height = '20%';
      return;
    }
    menuElement.style.display = 'none';
    rowElement.style.height = '10%';

  }

  delete(id: string) {
    const rowElement = document.getElementById('row-' + id);
    const menuElement = document.getElementById('menu-' + id);
    if(menuElement === null || rowElement === null ) {
      return;
    }
    rowElement.remove();
    menuElement.remove();

    this.http.deleteAccountRequest(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}

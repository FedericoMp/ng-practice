import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/user.interface';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-server-url',
  template: `
  <div class="container">
  <p class="title">Server Url</p>
    <div class="container">
      <p>User cards without url params:</p>
      <div class="card" [ngStyle]="{margin: '5px 0',display: 'flex',justifyContent: 'center'}" *ngFor="let user of users;">
          <p>ID: <strong>{{user.id}}</strong>
          | Name: <strong>{{user.name}}</strong>
          | Type: <strong>{{user.userType}}</strong>
          | <a [routerLink]="['/server-url', user.id]">View profile</a>
          </p>
      </div>
    </div>
  </div>
  `
})
export class ServerUrlComponent implements OnInit {

  users: UserI[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}

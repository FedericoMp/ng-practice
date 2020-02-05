import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserI } from '../../models/user.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-server',
  template: `
  <div class="container">
    <p class="title">Server Url One</p>
    <div class="container">
      <p>User card with url params:</p>
      <div [ngStyle]="{margin: '5px 0',display: 'flex',justifyContent: 'center'}">
          <p>ID: <strong>{{user.id}}</strong>
          | Name: <strong>{{user.name}}</strong>
          | Type: <strong>{{user.userType}}</strong>
          | <a routerLink="/server-url">Go back</a>
          </p>
      </div>
      <a [routerLink]="['/server-url', 3]"
      [ngStyle]="{display: 'flex', justifyContent: 'center'}">
      Other user, on same component!</a>
      </div>
    </div>
  `
})
export class ServerUrlOneComponent implements OnInit, OnDestroy {

  user: UserI;
  users: UserI[] = [];
  paramSub: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
      this.users = this.userService.getUsers();

      // Snapshot used at the first time, if we click second link and change
      // the parameters, Angular can't detect this change because we are on
      // the same component and it initializated so...(*)
      // tslint:disable-next-line: whitespace
      const paramId =+ this.route.snapshot.params.id;
      this.user = this.users.find(u => u.id === paramId);
      console.log('Router snapshot: ' + JSON.stringify(this.user));

      // (*)If something change, we need an observable to react to these changes.
      //  We don't know if or when it happens this is asynchronic operation.
      this.paramSub = this.route.params.subscribe(
        (params: Params) => {
          // tslint:disable-next-line: whitespace
          const paramToNum =+ params.id;
          this.user = this.users.find(u => u.id === paramToNum);
          console.log('Router Params Observable Subscription: '
                       + JSON.stringify(this.user));
      });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }
}

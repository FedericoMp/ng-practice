import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="container"
    [ngStyle]="{display:'flex',flexDirection:'column',alignItems:'center'}">
    <p class="title"><i class="fab fa-angular has-text-danger"></i> Ng Practice</p>
    <nav class="breadcrumb">
      <ul>
        <li routerLinkActive="is-active">
          <a routerLink="/servers">Servers</a>
        </li>
        <li routerLinkActive="is-active">
          <a routerLink="/parent-child">Parent & Child</a>
        </li>
        <li routerLinkActive="is-active">
          <a routerLink="/new-account">New Account</a>
        </li>
        <li routerLinkActive="is-active">
          <a routerLink="/odd-numbers">Odd Numbers</a>
        </li>
        <li routerLinkActive="is-active">
          <a routerLink="/server-url">Server Url</a>
        </li>
    </ul>
  </nav>
</div>
<hr>
  `
})
export class NavBarComponent {

}

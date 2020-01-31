import { Component, OnInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, DoCheck {

  statusAlert = false;
  serverAlert = 'The server is not created';

  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    setTimeout( () => { this.statusAlert = true; this.serverAlert = 'The server was created'; }, 3000 );
  }

  // ngAfterViewChecked() {
  //   setTimeout( () => { this.statusAlert = true; this.serverAlert = 'The server was created'; }, 3000 );
  // }

  changeAlert() {
    return (!this.statusAlert) ? 'is-danger' : 'is-success';
  }

}

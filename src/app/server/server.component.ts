import { Component, OnInit } from '@angular/core';

export interface ServerI {
  name: string;
  status: boolean;
  text: string;
}

@Component({
  selector: 'app-server',
  template: `
  <div class="tags has-addons">
    <span class="tag">{{serverObj.name}}</span>
    <span class="tag" [ngClass]="statusClasses()">{{serverObj.text}}</span>
  </div>
  `,
})
export class ServerComponent implements OnInit {

  serverObj: ServerI;

  constructor() {
    this.serverObj = { name: 'Server 1', status: false, text: 'ofline' };
    setTimeout(() => { this.serverObj = { name: 'Server 1', status: true, text: 'online' }; }, 3000 );
   }

  ngOnInit() { }

  statusClasses() {
    return (!this.serverObj.status) ? 'is-danger' : 'is-success';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-input',
  templateUrl: '../serverInput/serverInput.component.html'
})

export class ServerInputComponent implements OnInit {

  serverName = '';
  noServerMsg = 'No server was created!';

  constructor() {}

  ngOnInit() {}

  onReset() { this.serverName = ''; }

  // One Way binding
  // setInputName(event: any) {
  //   this.serverName = event.target.value;
  // }

}

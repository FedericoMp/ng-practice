import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
  <div class="notification" [ngClass]='type'>
    <p>{{text}}</p>
  </div>
  `
})

export class AlertComponent implements OnInit {

  @Input() text: string;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
  <div class="notification is-danger">
    <button class="delete"></button>
    <strong>{{title}}</strong>.
    <p>{{text}}</p>
  </div>
  `,
  styles: [`strong { font-style: italic; font-weight: bold; }`]
})

export class WarningAlertComponent implements OnInit {

  title = 'Warning notification';
  text = 'Nullam gravida purus diam, et dictum efficitur. Sit amet, consectetur adipiscing elit';

  constructor() {}

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
  <div class="notification is-success">
    <button class="delete"></button>
    <strong>{{title}}</strong>.
    <p>{{text}}</p>
  </div>
  `,
  styles: [`strong { font-style: italic; font-weight: bold; }`]
})

export class SuccessAlertComponent implements OnInit {

  title = 'Success notification';
  text = 'Nullam gravida purus diam, et dictum efficitur. Sit amet, consectetur adipiscing elit';

  constructor() {}

  ngOnInit() {}

}

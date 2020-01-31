import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="notification" [ngClass]='styleAlert()'>
      <p>{{text}}</p>
    </div>`,
  styles: [`
    .notify-anim { animation: hide-out 4s forwards; }
    @keyframes hide-out { from{ opacity: 1; } to{ opacity: 0; } }
  `]
})

export class AlertComponent implements OnInit {

  @Input() text: string;
  @Input() type: string;

  constructor() {}

  ngOnInit() {
    console.log(this.type);
  }

  styleAlert() {
    return {
      'is-danger': this.type === 'is-danger',
      'is-success': this.type === 'is-success',
      'notify-anim': this.type === 'is-success'
    };
  }

}

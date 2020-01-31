import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-numbers',
  templateUrl: './odd-numbers.component.html',
  styleUrls: ['./odd-numbers.component.css']
})
export class OddNumbersComponent implements OnInit {

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  showOdd = false;

  constructor() { }

  ngOnInit() { }

}

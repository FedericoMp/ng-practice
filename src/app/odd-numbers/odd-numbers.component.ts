import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odd-numbers',
  templateUrl: './odd-numbers.component.html',
  styleUrls: ['./odd-numbers.component.css']
})
export class OddNumbersComponent implements OnInit {

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  showOdd = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  goToUrlQuery(id: number) {
    this.router.navigate(
      ['/url-query', id, 'edit'],
      { queryParams: {allowEdit: '1', updateQuery: true},
        fragment: 'loading' }
    );
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-url-query',
  template: `
  <p class="subtitle">UrlQueryComponent works!</p><br>
  <a
    [routerLink]="['/url-query',5,'edit']"
    [queryParams]="{allowEddit: '2', updatedQuery: false}"
    [fragment]="'stillLoadding'"
    class="button is-link is-outlined is-fullwidth">
    Change queryParams and fragment</a>
  <div class="card">
    <pre> <strong>queryParams:</strong> {{ queryParams | json }}</pre>
    <pre> <strong>fragment:</strong> {{ fragment }}</pre>
  </div>
  `
})
export class UrlQueryComponent implements OnInit, OnDestroy {

  queryParams: any;
  fragment: string;
  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // At the first time that the component is created, but...
    this.queryParams = this.route.snapshot.queryParams;
    this.fragment = this.route.snapshot.fragment;

    // If something happens that change queryParam or fragment need observables
    const queryParamsSubs = this.route.queryParams
      .subscribe((urlParams: Params) => {
        this.queryParams = urlParams;
      });
    this.subs.push(queryParamsSubs);

    const fragmentSubs = this.route.fragment
      .subscribe((urlFragment: string) => {
        this.fragment = urlFragment;
      });
    this.subs.push(fragmentSubs);
  }

  // Is not necesary to unsubscribe this because angular do it when destroy
  // but is a good practice; if we have custom observables, we need to do it manually
  ngOnDestroy() {
    this.subs.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}

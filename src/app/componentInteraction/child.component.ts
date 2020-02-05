import { Component, OnInit, Input, Output, EventEmitter,
  ContentChild, ElementRef, AfterContentInit, ContentChildren, QueryList, Host, Optional } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-child',
  template: `
  <div class="card">
    <div class="card-content">
      <p class="title is-4">Child Component<p>
        <span>{{fromParent}}</span>
        <ng-content select=".ContentBody"></ng-content>
        <ng-content select=".ContentFooter"></ng-content>
    </div>
  </div>`
})
export class ChildComponent implements OnInit, AfterContentInit {

  @Input() fromParent: any;
  @ContentChild('parentProjContentBody', {static: true}) parentProjContentBody: ElementRef;
  @ContentChild('parentProjContentFooter', {static: true}) parentProjContentFooter: ElementRef;
  @ContentChildren('contentChildrenBox') contentChildrenBoxList: QueryList<any>;

  constructor(
    @Optional() @Host() private parencCompApi: ParentComponent
  ) { console.log(this.parencCompApi); }

  ngOnInit() { }

  ngAfterContentInit() {
    console.log('@ContentChild > ' + this.parentProjContentBody.nativeElement.innerText);
    console.log('@ContentChild > ' + this.parentProjContentFooter.nativeElement.innerText);
    this.contentChildrenBoxList.forEach( el => {
      console.log(el.fromParent);
    });
  }
}

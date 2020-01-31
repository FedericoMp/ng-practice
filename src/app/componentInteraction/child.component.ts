import { Component, OnInit, Input, Output, EventEmitter,
  ContentChild, ElementRef, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

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
  @Output() fromChild = new EventEmitter();
  @ContentChild('parentProjContentBody', {static: true}) parentProjContentBody: ElementRef;
  @ContentChild('parentProjContentFooter', {static: true}) parentProjContentFooter: ElementRef;
  @ContentChildren('contentChildrenBox') contentChildrenBoxList: QueryList<any>;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    console.log('@ContentChild > ' + this.parentProjContentBody.nativeElement.innerText);
    console.log('@ContentChild > ' + this.parentProjContentFooter.nativeElement.innerText);
    this.contentChildrenBoxList.forEach( el => {
      console.log(el.fromParent);
    });
  }
}

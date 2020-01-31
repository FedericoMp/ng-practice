import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div class="tile has-background-light">
      <div class="container">
        <div class="notification">
          <p class="title">Parent Component<p>
            <div #vchild>vchild0</div>
            <div #vchild>vchild1</div>
            <div #vchild>vchild2</div>
          <app-child
            #contentChildrenBox
            [fromParent]="date">
              <p #parentProjContentBody class="ContentBody">Projection Content 1: Body</p>
              <p #parentProjContentFooter class="ContentFooter">Projection Content 1: Footer</p>
          </app-child>
          <app-child
            #contentChildrenBox
            [fromParent]="date">
              <p #parentProjContentBody class="ContentBody">Projection Content 2: Body</p>
              <p #parentProjContentFooter class="ContentFooter">Projection Content 2: Footer</p>
          </app-child>
        </div>
      </div>
    </div>`
})
export class ParentComponent implements OnInit, AfterViewInit {

  date = new Date().toDateString();
  @ViewChild('vchild', {static: true}) vchild: ElementRef;
  @ViewChildren('vchild') vchildList: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('Individual #vchild0 text > ' + this.vchild.nativeElement.innerText);
    this.vchildList.forEach((el, index) => {
      console.log(`#vchild${index} text > ` + el.nativeElement.innerText);
    });
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddNumbersComponent } from './odd-numbers.component';

describe('OddNumbersComponent', () => {
  let component: OddNumbersComponent;
  let fixture: ComponentFixture<OddNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

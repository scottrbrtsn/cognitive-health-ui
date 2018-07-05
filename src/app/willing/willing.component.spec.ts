import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingComponent } from './willing.component';

describe('WillingComponent', () => {
  let component: WillingComponent;
  let fixture: ComponentFixture<WillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

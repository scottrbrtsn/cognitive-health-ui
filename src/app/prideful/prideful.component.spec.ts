import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PridefulComponent } from './prideful.component';

describe('PridefulComponent', () => {
  let component: PridefulComponent;
  let fixture: ComponentFixture<PridefulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PridefulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PridefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopelessComponent } from './hopeless.component';

describe('HopelessComponent', () => {
  let component: HopelessComponent;
  let fixture: ComponentFixture<HopelessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopelessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

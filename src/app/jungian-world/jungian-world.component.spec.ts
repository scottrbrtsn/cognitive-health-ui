import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JungianWorldComponent } from './jungian-world.component';

describe('JungianWorldComponent', () => {
  let component: JungianWorldComponent;
  let fixture: ComponentFixture<JungianWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JungianWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JungianWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

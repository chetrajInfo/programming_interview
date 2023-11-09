import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corejava2yrsComponent } from './corejava2yrs.component';

describe('Corejava2yrsComponent', () => {
  let component: Corejava2yrsComponent;
  let fixture: ComponentFixture<Corejava2yrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corejava2yrsComponent]
    });
    fixture = TestBed.createComponent(Corejava2yrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

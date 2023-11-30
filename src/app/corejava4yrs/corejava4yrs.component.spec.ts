import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corejava4yrsComponent } from './corejava4yrs.component';

describe('Corejava4yrsComponent', () => {
  let component: Corejava4yrsComponent;
  let fixture: ComponentFixture<Corejava4yrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corejava4yrsComponent]
    });
    fixture = TestBed.createComponent(Corejava4yrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

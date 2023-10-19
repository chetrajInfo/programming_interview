import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Springboot2yrsComponent } from './springboot2yrs.component';

describe('Springboot2yrsComponent', () => {
  let component: Springboot2yrsComponent;
  let fixture: ComponentFixture<Springboot2yrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Springboot2yrsComponent]
    });
    fixture = TestBed.createComponent(Springboot2yrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

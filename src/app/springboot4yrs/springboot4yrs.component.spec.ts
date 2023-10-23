import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Springboot4yrsComponent } from './springboot4yrs.component';

describe('Springboot4yrsComponent', () => {
  let component: Springboot4yrsComponent;
  let fixture: ComponentFixture<Springboot4yrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Springboot4yrsComponent]
    });
    fixture = TestBed.createComponent(Springboot4yrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

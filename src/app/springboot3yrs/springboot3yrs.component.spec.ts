import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Springboot3yrsComponent } from './springboot3yrs.component';

describe('Springboot3yrsComponent', () => {
  let component: Springboot3yrsComponent;
  let fixture: ComponentFixture<Springboot3yrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Springboot3yrsComponent]
    });
    fixture = TestBed.createComponent(Springboot3yrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

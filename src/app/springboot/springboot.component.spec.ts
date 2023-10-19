import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbootComponent } from './springboot.component';

describe('SpringbootComponent', () => {
  let component: SpringbootComponent;
  let fixture: ComponentFixture<SpringbootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpringbootComponent]
    });
    fixture = TestBed.createComponent(SpringbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

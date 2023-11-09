import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnonewsComponent } from './technonews.component';

describe('TechnonewsComponent', () => {
  let component: TechnonewsComponent;
  let fixture: ComponentFixture<TechnonewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnonewsComponent]
    });
    fixture = TestBed.createComponent(TechnonewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

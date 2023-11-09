import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtofspeakingComponent } from './artofspeaking.component';

describe('ArtofspeakingComponent', () => {
  let component: ArtofspeakingComponent;
  let fixture: ComponentFixture<ArtofspeakingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtofspeakingComponent]
    });
    fixture = TestBed.createComponent(ArtofspeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

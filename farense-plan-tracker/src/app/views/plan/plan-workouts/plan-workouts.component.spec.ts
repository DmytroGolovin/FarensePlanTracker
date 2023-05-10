import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWorkoutsComponent } from './plan-workouts.component';

describe('PlanWorkoutsComponent', () => {
  let component: PlanWorkoutsComponent;
  let fixture: ComponentFixture<PlanWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanWorkoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightInputModalComponent } from './weight-input-modal.component';

describe('WeightInputModalComponent', () => {
  let component: WeightInputModalComponent;
  let fixture: ComponentFixture<WeightInputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightInputModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

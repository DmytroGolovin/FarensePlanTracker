import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoClientComponent } from './no-client.component';

describe('NoClientComponent', () => {
  let component: NoClientComponent;
  let fixture: ComponentFixture<NoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

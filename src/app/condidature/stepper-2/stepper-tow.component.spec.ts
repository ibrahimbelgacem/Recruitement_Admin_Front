import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTowComponent } from './stepper-tow.component';

describe('StepperTowComponent', () => {
  let component: StepperTowComponent;
  let fixture: ComponentFixture<StepperTowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperTowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFoureComponent } from './stepper-foure.component';

describe('StepperFoureComponent', () => {
  let component: StepperFoureComponent;
  let fixture: ComponentFixture<StepperFoureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperFoureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperFoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

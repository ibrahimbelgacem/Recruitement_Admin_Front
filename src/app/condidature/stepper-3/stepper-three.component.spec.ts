import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperThreeComponent } from './stepper-three.component';

describe('StepperThreeComponent', () => {
  let component: StepperThreeComponent;
  let fixture: ComponentFixture<StepperThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

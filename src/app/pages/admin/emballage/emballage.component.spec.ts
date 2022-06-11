import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmballageComponent } from './emballage.component';

describe('EmballageComponent', () => {
  let component: EmballageComponent;
  let fixture: ComponentFixture<EmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

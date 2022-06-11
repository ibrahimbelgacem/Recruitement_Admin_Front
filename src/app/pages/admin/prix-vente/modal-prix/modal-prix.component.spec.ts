import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrixComponent } from './modal-prix.component';

describe('ModalPrixComponent', () => {
  let component: ModalPrixComponent;
  let fixture: ComponentFixture<ModalPrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

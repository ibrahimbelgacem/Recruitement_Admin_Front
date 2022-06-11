import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmballageComponent } from './modal-emballage.component';

describe('ModalEmballageComponent', () => {
  let component: ModalEmballageComponent;
  let fixture: ComponentFixture<ModalEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

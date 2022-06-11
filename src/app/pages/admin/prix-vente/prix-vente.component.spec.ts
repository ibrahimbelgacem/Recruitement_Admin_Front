import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixVenteComponent } from './prix-vente.component';

describe('PrixVenteComponent', () => {
  let component: PrixVenteComponent;
  let fixture: ComponentFixture<PrixVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

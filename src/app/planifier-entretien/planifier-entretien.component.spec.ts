import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierEntretienComponent } from './planifier-entretien.component';

describe('PlanifierEntretienComponent', () => {
  let component: PlanifierEntretienComponent;
  let fixture: ComponentFixture<PlanifierEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanifierEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanifierEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

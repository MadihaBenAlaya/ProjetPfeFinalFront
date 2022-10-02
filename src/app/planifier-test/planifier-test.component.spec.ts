import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierTestComponent } from './planifier-test.component';

describe('PlanifierTestComponent', () => {
  let component: PlanifierTestComponent;
  let fixture: ComponentFixture<PlanifierTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanifierTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanifierTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

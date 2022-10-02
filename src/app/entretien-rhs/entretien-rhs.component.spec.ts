import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienRHsComponent } from './entretien-rhs.component';

describe('EntretienRHsComponent', () => {
  let component: EntretienRHsComponent;
  let fixture: ComponentFixture<EntretienRHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntretienRHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretienRHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

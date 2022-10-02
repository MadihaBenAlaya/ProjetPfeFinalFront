import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStatsComponent } from './offre-stats.component';

describe('OffreStatsComponent', () => {
  let component: OffreStatsComponent;
  let fixture: ComponentFixture<OffreStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteOffreComponent } from './confirm-delete-offre.component';

describe('ConfirmDeleteOffreComponent', () => {
  let component: ConfirmDeleteOffreComponent;
  let fixture: ComponentFixture<ConfirmDeleteOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

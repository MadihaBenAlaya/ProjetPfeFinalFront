import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRecruteurComponent } from './ajout-recruteur.component';

describe('AjoutRecruteurComponent', () => {
  let component: AjoutRecruteurComponent;
  let fixture: ComponentFixture<AjoutRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

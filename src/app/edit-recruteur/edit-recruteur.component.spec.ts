import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecruteurComponent } from './edit-recruteur.component';

describe('EditRecruteurComponent', () => {
  let component: EditRecruteurComponent;
  let fixture: ComponentFixture<EditRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePersonnelComponent } from './confirm-delete-personnel.component';

describe('ConfirmDeletePersonnelComponent', () => {
  let component: ConfirmDeletePersonnelComponent;
  let fixture: ComponentFixture<ConfirmDeletePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeletePersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeletePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

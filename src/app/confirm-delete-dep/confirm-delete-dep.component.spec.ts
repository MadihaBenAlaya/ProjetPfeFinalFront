import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteDepComponent } from './confirm-delete-dep.component';

describe('ConfirmDeleteDepComponent', () => {
  let component: ConfirmDeleteDepComponent;
  let fixture: ComponentFixture<ConfirmDeleteDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

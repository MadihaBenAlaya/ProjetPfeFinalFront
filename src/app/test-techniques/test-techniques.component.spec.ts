import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTechniquesComponent } from './test-techniques.component';

describe('TestTechniquesComponent', () => {
  let component: TestTechniquesComponent;
  let fixture: ComponentFixture<TestTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

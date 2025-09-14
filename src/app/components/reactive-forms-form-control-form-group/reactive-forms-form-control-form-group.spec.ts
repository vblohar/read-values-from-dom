import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsFormControlFormGroup } from './reactive-forms-form-control-form-group';

describe('ReactiveFormsFormControlFormGroup', () => {
  let component: ReactiveFormsFormControlFormGroup;
  let fixture: ComponentFixture<ReactiveFormsFormControlFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsFormControlFormGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlFormGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

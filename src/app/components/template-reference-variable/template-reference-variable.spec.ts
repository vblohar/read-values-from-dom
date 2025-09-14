import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariable } from './template-reference-variable';

describe('TemplateReferenceVariable', () => {
  let component: TemplateReferenceVariable;
  let fixture: ComponentFixture<TemplateReferenceVariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReferenceVariable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceVariable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAndRenderer2WithElementRef } from './view-child-and-renderer2-with-element-ref';

describe('ViewChildAndRenderer2WithElementRef', () => {
  let component: ViewChildAndRenderer2WithElementRef;
  let fixture: ComponentFixture<ViewChildAndRenderer2WithElementRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildAndRenderer2WithElementRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildAndRenderer2WithElementRef);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

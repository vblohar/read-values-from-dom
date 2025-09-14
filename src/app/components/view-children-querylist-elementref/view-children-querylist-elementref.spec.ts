import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenQuerylistElementref } from './view-children-querylist-elementref';

describe('ViewChildrenQuerylistElementref', () => {
  let component: ViewChildrenQuerylistElementref;
  let fixture: ComponentFixture<ViewChildrenQuerylistElementref>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenQuerylistElementref]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrenQuerylistElementref);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

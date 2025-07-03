import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wellcome1Component } from './wellcome1.component';

describe('Wellcome1Component', () => {
  let component: Wellcome1Component;
  let fixture: ComponentFixture<Wellcome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wellcome1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wellcome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

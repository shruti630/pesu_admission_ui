import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBar1Component } from './progress-bar1.component';

describe('ProgressBar1Component', () => {
  let component: ProgressBar1Component;
  let fixture: ComponentFixture<ProgressBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

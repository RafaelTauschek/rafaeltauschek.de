import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoductionSectionComponent } from './intoduction-section.component';

describe('IntoductionSectionComponent', () => {
  let component: IntoductionSectionComponent;
  let fixture: ComponentFixture<IntoductionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntoductionSectionComponent]
    });
    fixture = TestBed.createComponent(IntoductionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

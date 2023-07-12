import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPageComponent } from './loan-page.component';

describe('LoanPageComponent', () => {
  let component: LoanPageComponent;
  let fixture: ComponentFixture<LoanPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanPageComponent]
    });
    fixture = TestBed.createComponent(LoanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

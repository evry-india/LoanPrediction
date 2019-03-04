import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPredictionComponent } from './loan-prediction.component';

describe('LoanPredictionComponent', () => {
  let component: LoanPredictionComponent;
  let fixture: ComponentFixture<LoanPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

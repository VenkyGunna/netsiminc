import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityAssessmentComponent } from './cyber-security-assessment.component';

describe('CyberSecurityAssessmentComponent', () => {
  let component: CyberSecurityAssessmentComponent;
  let fixture: ComponentFixture<CyberSecurityAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurityAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberSecurityAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

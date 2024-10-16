import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChallengeComponent } from './ai-challenge.component';

describe('AiChallengeComponent', () => {
  let component: AiChallengeComponent;
  let fixture: ComponentFixture<AiChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

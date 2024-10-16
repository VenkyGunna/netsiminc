import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLocalTalentComponent } from './contract-local-talent.component';

describe('ContractLocalTalentComponent', () => {
  let component: ContractLocalTalentComponent;
  let fixture: ComponentFixture<ContractLocalTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractLocalTalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractLocalTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

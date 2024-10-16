import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityTestingComponent } from './cyber-security-testing.component';

describe('CyberSecurityTestingComponent', () => {
  let component: CyberSecurityTestingComponent;
  let fixture: ComponentFixture<CyberSecurityTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurityTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberSecurityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

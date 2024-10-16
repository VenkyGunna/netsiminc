import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityHomeComponent } from './cyber-security-home.component';

describe('CyberSecurityHomeComponent', () => {
  let component: CyberSecurityHomeComponent;
  let fixture: ComponentFixture<CyberSecurityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurityHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberSecurityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

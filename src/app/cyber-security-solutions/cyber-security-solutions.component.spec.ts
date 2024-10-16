import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecuritySolutionsComponent } from './cyber-security-solutions.component';

describe('CyberSecuritySolutionsComponent', () => {
  let component: CyberSecuritySolutionsComponent;
  let fixture: ComponentFixture<CyberSecuritySolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecuritySolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberSecuritySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

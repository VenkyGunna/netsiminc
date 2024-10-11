import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMobileSolutionsComponent } from './digital-mobile-solutions.component';

describe('DigitalMobileSolutionsComponent', () => {
  let component: DigitalMobileSolutionsComponent;
  let fixture: ComponentFixture<DigitalMobileSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMobileSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalMobileSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

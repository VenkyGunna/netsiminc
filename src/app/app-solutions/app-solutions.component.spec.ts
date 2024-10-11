import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSolutionsComponent } from './app-solutions.component';

describe('AppSolutionsComponent', () => {
  let component: AppSolutionsComponent;
  let fixture: ComponentFixture<AppSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

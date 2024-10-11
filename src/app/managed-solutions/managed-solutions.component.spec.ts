import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedSolutionsComponent } from './managed-solutions.component';

describe('ManagedSolutionsComponent', () => {
  let component: ManagedSolutionsComponent;
  let fixture: ComponentFixture<ManagedSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagedSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

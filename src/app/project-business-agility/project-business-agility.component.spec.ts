import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBusinessAgilityComponent } from './project-business-agility.component';

describe('ProjectBusinessAgilityComponent', () => {
  let component: ProjectBusinessAgilityComponent;
  let fixture: ComponentFixture<ProjectBusinessAgilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBusinessAgilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBusinessAgilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

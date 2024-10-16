import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreTalentComponent } from './offshore-talent.component';

describe('OffshoreTalentComponent', () => {
  let component: OffshoreTalentComponent;
  let fixture: ComponentFixture<OffshoreTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffshoreTalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffshoreTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

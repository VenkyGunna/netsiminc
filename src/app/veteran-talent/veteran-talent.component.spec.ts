import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranTalentComponent } from './veteran-talent.component';

describe('VeteranTalentComponent', () => {
  let component: VeteranTalentComponent;
  let fixture: ComponentFixture<VeteranTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeteranTalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeteranTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

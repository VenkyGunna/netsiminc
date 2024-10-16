import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentPlacementComponent } from './permanent-placement.component';

describe('PermanentPlacementComponent', () => {
  let component: PermanentPlacementComponent;
  let fixture: ComponentFixture<PermanentPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentPlacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

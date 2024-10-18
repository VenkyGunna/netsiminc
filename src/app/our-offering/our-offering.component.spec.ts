import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfferingComponent } from './our-offering.component';

describe('OurOfferingComponent', () => {
  let component: OurOfferingComponent;
  let fixture: ComponentFixture<OurOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurOfferingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

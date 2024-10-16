import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceProcurementComponent } from './source-procurement.component';

describe('SourceProcurementComponent', () => {
  let component: SourceProcurementComponent;
  let fixture: ComponentFixture<SourceProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceProcurementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

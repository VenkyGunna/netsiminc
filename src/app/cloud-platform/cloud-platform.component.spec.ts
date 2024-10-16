import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPlatformComponent } from './cloud-platform.component';

describe('CloudPlatformComponent', () => {
  let component: CloudPlatformComponent;
  let fixture: ComponentFixture<CloudPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudPlatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-offering',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './our-offering.component.html',
  styleUrl: './our-offering.component.scss'
})
export class OurOfferingComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Our Offering');
  }
}

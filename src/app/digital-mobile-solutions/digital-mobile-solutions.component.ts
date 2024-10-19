import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-mobile-solutions',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './digital-mobile-solutions.component.html',
  styleUrl: './digital-mobile-solutions.component.scss'
})
export class DigitalMobileSolutionsComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Digital mobile solutions');
  }
}

import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digital-mobile-solutions',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './digital-mobile-solutions.component.html',
  styleUrl: './digital-mobile-solutions.component.scss'
})
export class DigitalMobileSolutionsComponent {

}

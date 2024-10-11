import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-intelligence',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './data-intelligence.component.html',
  styleUrl: './data-intelligence.component.scss'
})
export class DataIntelligenceComponent {

}

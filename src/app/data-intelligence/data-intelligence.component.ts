import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-intelligence',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './data-intelligence.component.html',
  styleUrl: './data-intelligence.component.scss'
})
export class DataIntelligenceComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Data intelligence');
  }
}

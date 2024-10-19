import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-managed-solutions',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './managed-solutions.component.html',
  styleUrl: './managed-solutions.component.scss'
})
export class ManagedSolutionsComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Managed solutions');
  }
}

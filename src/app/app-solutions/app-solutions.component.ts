import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-solutions',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './app-solutions.component.html',
  styleUrl: './app-solutions.component.scss'
})
export class AppSolutionsComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('App Solutions');
  }
}

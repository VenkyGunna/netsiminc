import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-app-solutions',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './app-solutions.component.html',
  styleUrl: './app-solutions.component.scss'
})
export class AppSolutionsComponent {

}

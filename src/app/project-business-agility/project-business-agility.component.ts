import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-project-business-agility',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './project-business-agility.component.html',
  styleUrl: './project-business-agility.component.scss'
})
export class ProjectBusinessAgilityComponent {

}

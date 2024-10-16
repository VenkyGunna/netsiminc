import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-permanent-placement',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './permanent-placement.component.html',
  styleUrl: './permanent-placement.component.scss'
})
export class PermanentPlacementComponent {

}

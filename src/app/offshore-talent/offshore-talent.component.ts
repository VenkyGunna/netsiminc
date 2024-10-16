import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-offshore-talent',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './offshore-talent.component.html',
  styleUrl: './offshore-talent.component.scss'
})
export class OffshoreTalentComponent {

}

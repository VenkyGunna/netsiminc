import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-veteran-talent',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './veteran-talent.component.html',
  styleUrl: './veteran-talent.component.scss'
})
export class VeteranTalentComponent {

}

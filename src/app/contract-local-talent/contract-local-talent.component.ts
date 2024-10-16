import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-contract-local-talent',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './contract-local-talent.component.html',
  styleUrl: './contract-local-talent.component.scss'
})
export class ContractLocalTalentComponent {

}

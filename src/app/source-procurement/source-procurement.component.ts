import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-source-procurement',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './source-procurement.component.html',
  styleUrl: './source-procurement.component.scss'
})
export class SourceProcurementComponent {

}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-source-procurement',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './source-procurement.component.html',
  styleUrl: './source-procurement.component.scss'
})
export class SourceProcurementComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Source procurement');
  }
}

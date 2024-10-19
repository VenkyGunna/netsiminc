import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cloud-platform',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './cloud-platform.component.html',
  styleUrl: './cloud-platform.component.scss'
})
export class CloudPlatformComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Cloud Platform');
  }
}

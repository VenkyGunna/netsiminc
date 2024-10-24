import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ai-home',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './ai-home.component.html',
  styleUrl: './ai-home.component.scss'
})
export class AiHomeComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('AI Solutions Overview');
  }
}

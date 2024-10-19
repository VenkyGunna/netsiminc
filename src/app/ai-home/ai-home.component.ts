import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-home',
  standalone: true,
  imports: [],
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

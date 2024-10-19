import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-challenge',
  standalone: true,
  imports: [],
  templateUrl: './ai-challenge.component.html',
  styleUrl: './ai-challenge.component.scss'
})
export class AiChallengeComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('AI Opportunity and challenges');
  }
}

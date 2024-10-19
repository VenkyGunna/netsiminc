import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-methodology',
  standalone: true,
  imports: [],
  templateUrl: './ai-methodology.component.html',
  styleUrl: './ai-methodology.component.scss'
})
export class AiMethodologyComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('AI Methodology');
  }
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-solutions',
  standalone: true,
  imports: [],
  templateUrl: './ai-solutions.component.html',
  styleUrl: './ai-solutions.component.scss'
})
export class AiSolutionsComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('AI Solutions & Services');
  }
}

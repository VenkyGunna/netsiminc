import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-security-solutions',
  standalone: true,
  imports: [],
  templateUrl: './cyber-security-solutions.component.html',
  styleUrl: './cyber-security-solutions.component.scss'
})
export class CyberSecuritySolutionsComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Cybersecurity solutions');
  }
}

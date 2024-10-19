import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-security-assessment',
  standalone: true,
  imports: [],
  templateUrl: './cyber-security-assessment.component.html',
  styleUrl: './cyber-security-assessment.component.scss'
})
export class CyberSecurityAssessmentComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Cybersecurity assessment');
  }
}

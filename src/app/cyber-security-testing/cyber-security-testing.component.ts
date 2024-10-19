import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-security-testing',
  standalone: true,
  imports: [],
  templateUrl: './cyber-security-testing.component.html',
  styleUrl: './cyber-security-testing.component.scss'
})
export class CyberSecurityTestingComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Cybersecurity testing');
  }
}

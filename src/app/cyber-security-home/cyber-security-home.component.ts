import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-security-home',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './cyber-security-home.component.html',
  styleUrl: './cyber-security-home.component.scss'
})
export class CyberSecurityHomeComponent {
  constructor(public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Cybersecurity Overview');
  }
}

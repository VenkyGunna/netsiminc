import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public router:Router,public titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle('Netsim Inc Home');
  }
  gotoURL(url:any){
    this.router.navigate([url]);
  }

}

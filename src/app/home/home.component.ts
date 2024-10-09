import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public router:Router,public titleService:Title,public renderer:Renderer2){
  }
  ngOnInit() {
    this.titleService.setTitle('Netsim Inc Home');
  }
  gotoURL(url:any){
    this.router.navigate([url]);
  }
  prevSlide() {
    const carousel = document.getElementById('carouselExample');
    this.renderer.setProperty(carousel, 'carousel', 'prev');
  }

  nextSlide() {
    const carousel = document.getElementById('carouselExample');
    this.renderer.setProperty(carousel, 'carousel', 'next');
  }

}

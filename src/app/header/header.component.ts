import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,SharedModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public router:Router){

  }
  gotoURL(url:any){
    this.router.navigate([url]);
  }
  isMenuOpen = false;

  menuOpened() {
    this.isMenuOpen = true;
  }

  menuClosed() {
    this.isMenuOpen = false;
  }
}

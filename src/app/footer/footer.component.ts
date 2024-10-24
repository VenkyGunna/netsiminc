import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
dateVar:any;
constructor(){
  this.dateVar = new Date().getFullYear();
}
}

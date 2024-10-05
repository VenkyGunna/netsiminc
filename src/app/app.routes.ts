import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientsComponent } from './clients/clients.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'aboutus',
        component:AboutusComponent,
    },
    {
        path:'contactus',
        component:ContactusComponent,
    },
    {
        path:'clients',
        component:ClientsComponent,
    }
];

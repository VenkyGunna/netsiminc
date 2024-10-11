import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientsComponent } from './clients/clients.component';
import { ManagedSolutionsComponent } from './managed-solutions/managed-solutions.component';
import { AppSolutionsComponent } from './app-solutions/app-solutions.component';
import { DigitalMobileSolutionsComponent } from './digital-mobile-solutions/digital-mobile-solutions.component';
import { DataIntelligenceComponent } from './data-intelligence/data-intelligence.component';

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
    },
    {
        path:'managed-solutions',component:ManagedSolutionsComponent
    },
    {
        path:'app-solutions',component:AppSolutionsComponent
    },
    {
        path:'mobile-solutions',component:DigitalMobileSolutionsComponent
    },
    {
        path:'data-intelligence',component:DataIntelligenceComponent
    },
    {
        path:'**',
        redirectTo:'/'
    }
];

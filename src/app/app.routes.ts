import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientsComponent } from './clients/clients.component';
import { ManagedSolutionsComponent } from './managed-solutions/managed-solutions.component';
import { AppSolutionsComponent } from './app-solutions/app-solutions.component';
import { DigitalMobileSolutionsComponent } from './digital-mobile-solutions/digital-mobile-solutions.component';
import { DataIntelligenceComponent } from './data-intelligence/data-intelligence.component';
import { CloudPlatformComponent } from './cloud-platform/cloud-platform.component';
import { ProjectBusinessAgilityComponent } from './project-business-agility/project-business-agility.component';
import { SourceProcurementComponent } from './source-procurement/source-procurement.component';
import { ContractLocalTalentComponent } from './contract-local-talent/contract-local-talent.component';
import { OffshoreTalentComponent } from './offshore-talent/offshore-talent.component';
import { PermanentPlacementComponent } from './permanent-placement/permanent-placement.component';
import { VeteranTalentComponent } from './veteran-talent/veteran-talent.component';
import { CyberSecurityHomeComponent } from './cyber-security-home/cyber-security-home.component';
import { CyberSecurityAssessmentComponent } from './cyber-security-assessment/cyber-security-assessment.component';
import { CyberSecurityTestingComponent } from './cyber-security-testing/cyber-security-testing.component';
import { CyberSecuritySolutionsComponent } from './cyber-security-solutions/cyber-security-solutions.component';
import { AiMethodologyComponent } from './ai-methodology/ai-methodology.component';
import { AiHomeComponent } from './ai-home/ai-home.component';
import { AiChallengeComponent } from './ai-challenge/ai-challenge.component';
import { AiSolutionsComponent } from './ai-solutions/ai-solutions.component';
import { OurOfferingComponent } from './our-offering/our-offering.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent, pathMatch:'full'
    },
    {
        path:'aboutus', component:AboutusComponent,
    },
    {
        path:'contactus', component:ContactusComponent,
    },
    {
        path:'clients', component:ClientsComponent,
    },
    {
        path:'managed-solutions', component:ManagedSolutionsComponent
    },
    {
        path:'app-solutions', component:AppSolutionsComponent
    },
    {
        path:'mobile-solutions', component:DigitalMobileSolutionsComponent
    },
    {
        path:'data-intelligence', component:DataIntelligenceComponent
    },
    {
        path:'cloud-platform', component:CloudPlatformComponent
    },
    {
        path:'project-business-agility', component:ProjectBusinessAgilityComponent
    },
    {
        path:'source-procurement', component:SourceProcurementComponent
    },
    {
        path:'contract-local-talent', component:ContractLocalTalentComponent
    },
    {
        path:'offshore-talent', component:OffshoreTalentComponent
    },
    {
        path:'permanent-placement', component:PermanentPlacementComponent
    },
    {
        path:'veteran-talent', component:VeteranTalentComponent
    },
    {
        path:'cybersecurity-home', component:CyberSecurityHomeComponent
    },
    {
        path:'cybersecurity-assessment', component:CyberSecurityAssessmentComponent
    },
    {
        path:'cybersecurity-testing', component:CyberSecurityTestingComponent
    },
    {
        path:'cybersecurity-solution', component:CyberSecuritySolutionsComponent
    },
    {
        path:'ai-methodology', component:AiMethodologyComponent
    },
    {
        path:'ai-home', component:AiHomeComponent
    },
    {
        path:'ai-challenge', component:AiChallengeComponent
    },
    {
        path:'ai-solutions', component:AiSolutionsComponent
    },
    {
        path:'our-offering', component:OurOfferingComponent
    },
    {path:'terms-conditions', component:TermsConditionsComponent},
    {path:'privacy-policy', component:PrivacyPolicyComponent},
    {
        path:'**', redirectTo:'/'
    }
];

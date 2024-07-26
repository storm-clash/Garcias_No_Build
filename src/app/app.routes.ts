import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { HoIamComponent } from './Components/ho-iam/ho-iam.component';
import { AboutComponent } from './Components/about/about.component';

export const routes: Routes = [

    {
        path:'',component:MainComponent,
    },
    {
        path:'Iam', component:HoIamComponent,
    },
    {
        path:'About', component:AboutComponent,
    },
];

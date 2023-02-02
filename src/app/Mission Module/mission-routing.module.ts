import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyComponent } from '../Components/privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';
import {  MissionComponent } from './mission.component';



const routes: Routes = [
  {
    path: '',
    component: MissionComponent,
    children: [
      { path: '', component: HomeComponent },
      {path:'privacy-policy', component:PrivacyPolicyComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionRoutingModule {}

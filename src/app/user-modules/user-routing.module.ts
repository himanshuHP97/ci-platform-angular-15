
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from '../Components/privacy-policy/privacy-policy.component';
import { UserModulesComponent } from './user-modules.component';

const routes: Routes = [
  { path: '', component: UserModulesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

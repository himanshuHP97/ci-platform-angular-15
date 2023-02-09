import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { UserModulesComponent } from './user-modules.component';
import { StoryPageComponent } from './story-page/story-page.component';

const routes: Routes = [
  {
    path: '', component: UserModulesComponent,
    children: [
      { path: 'story-page', component: StoryPageComponent },
      { path: 'policy-page', component: PrivacyPolicyComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

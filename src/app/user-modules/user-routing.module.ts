import { VolunteeringMissionComponent } from './Mission Module/volunteering-mission/volunteering-mission.component';
import { HomeComponent } from './Mission Module/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { VolunteerPageComponent } from './volunteer-page/volunteer-page.component';
import { StoryDetailsComponent } from './story-page/story-details/story-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserModulesComponent } from './user-modules.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { StoryShareComponent } from './story-page/story-share/story-share.component';

const routes: Routes = [
  {
    path: '', component: UserModulesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'volunteering-mission', component: VolunteeringMissionComponent },
      { path: 'volunteering-mission/:id', component: VolunteeringMissionComponent },
      { path: 'story-page', component: StoryPageComponent },
      { path: 'story-detail', component: StoryDetailsComponent },
      { path: 'story-share', component: StoryShareComponent },
      { path: 'volunteer-page', component: VolunteerPageComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'policy-page', component: PrivacyPolicyComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

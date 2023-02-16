import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../Components/components.module';

import { HomeComponent } from './Mission Module/home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserModulesComponent } from './user-modules.component';
import { UserRoutingModule } from './user-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoryDetailsComponent } from './story-page/story-details/story-details.component';
import { StoryShareComponent } from './story-page/story-share/story-share.component';
import { VolunteerPageComponent } from './volunteer-page/volunteer-page.component';
import { VolunteeringMissionComponent } from './Mission Module/volunteering-mission/volunteering-mission.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserModulesComponent,
    UserProfileComponent,
    PrivacyPolicyComponent,
    StoryPageComponent,
    StoryDetailsComponent,
    StoryShareComponent,
    VolunteerPageComponent,
    VolunteeringMissionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    UserRoutingModule,
    NgxPaginationModule,
  ]
})
export class UserModulesModule { }

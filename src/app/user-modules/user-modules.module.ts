import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../Components/components.module';

import { HomeComponent } from './Mission Module/home/home.component';
import { UserProfileComponent } from './Mission Module/user-profile/user-profile.component';
import { UserModulesComponent } from './user-modules.component';
import { UserRoutingModule } from './user-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StoryPageComponent } from './story-page/story-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserModulesComponent,
    UserProfileComponent,
    PrivacyPolicyComponent,
    StoryPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    UserRoutingModule
  ]
})
export class UserModulesModule { }

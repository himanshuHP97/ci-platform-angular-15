import { CommonModule } from '@angular/common';
import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../Components/components.module';

import { HomeComponent } from './Mission Module/home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserModulesComponent } from './user-modules.component';
import { UserRoutingModule } from './user-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { StoryDetailsComponent } from './story-page/story-details/story-details.component';
import { StoryShareComponent } from './story-page/story-share/story-share.component';
import { VolunteerPageComponent } from './volunteer-page/volunteer-page.component';
import { VolunteeringMissionComponent } from './Mission Module/volunteering-mission/volunteering-mission.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ListBoxModule } from "@progress/kendo-angular-listbox";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EditorModule } from '@progress/kendo-angular-editor';
import {MatTabsModule} from '@angular/material/tabs';

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
    VolunteeringMissionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    NgSelectModule,
    EditorModule,
    ToolBarModule,
    ComponentsModule,
    UserRoutingModule,
    ButtonsModule,
    PopupModule,
    ListBoxModule,
    CarouselModule
  ]
})
export class UserModulesModule { }

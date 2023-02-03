import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MissionComponent } from './mission/mission.component';
import { MissionApplicationComponent } from './mission-application/mission-application.component';
import { MissionSkillsComponent } from './mission-skills/mission-skills.component';
import { MissionThemeComponent } from './mission-theme/mission-theme.component';
import { StoryComponent } from './story/story.component';
import { UsersComponent } from './users/users.component';
import { BannerComponent } from './banner/banner.component';
import { CmsPagesComponent } from './cms-pages/cms-pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    MissionComponent,
    MissionApplicationComponent,
    MissionSkillsComponent,
    MissionThemeComponent,
    StoryComponent,
    UsersComponent,
    BannerComponent,
    CmsPagesComponent
  ],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModulesModule { }

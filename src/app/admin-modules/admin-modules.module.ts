
import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';
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
import { AddCmsPageComponent } from './cms-pages/add-cms-page/add-cms-page.component';
import { EditCmsPageComponent } from './cms-pages/edit-cms-page/edit-cms-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditSkillsComponent } from './mission-skills/add-edit-skills/add-edit-skills.component';
import { AddEditThemeComponent } from './mission-theme/add-edit-theme/add-edit-theme.component';
import { AdminService } from '../service/adminservices.service';



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
    CmsPagesComponent,
    AddCmsPageComponent,
    EditCmsPageComponent,
    AddEditSkillsComponent,
    AddEditThemeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgxEditorModule,
    SharedModule
  ],
  providers: [AdminService],
})
export class AdminModulesModule { }

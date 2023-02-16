import { AddEditThemeComponent } from './mission-theme/add-edit-theme/add-edit-theme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../service/auth.guard';

import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MissionComponent } from './mission/mission.component';
import { CmsPagesComponent } from './cms-pages/cms-pages.component';
import { StoryComponent } from './story/story.component';
import { MissionThemeComponent } from './mission-theme/mission-theme.component';
import { AddEditSkillsComponent } from './mission-skills/add-edit-skills/add-edit-skills.component';
import { MissionSkillsComponent } from './mission-skills/mission-skills.component';
import { MissionApplicationComponent } from './mission-application/mission-application.component';
import { AddCmsPageComponent } from './cms-pages/add-cms-page/add-cms-page.component';
import { EditCmsPageComponent } from './cms-pages/edit-cms-page/edit-cms-page.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'users', component: UsersComponent },

      //cms-page routing
      { path: 'cms-page', component: CmsPagesComponent, },
      { path: 'add-cms-page', component: AddCmsPageComponent },
      { path: 'edit-cms-page/:id', component: EditCmsPageComponent, },

      { path: 'mission', component: MissionComponent },

      //mission-skill routing
      { path: 'mission-skills', component: MissionSkillsComponent },
      { path: 'add-edit-skill', component: AddEditSkillsComponent },
      { path: 'add-edit-skill/:id', component: AddEditSkillsComponent },

      //mission-theme routing
      { path: 'mission-themes', component: MissionThemeComponent },
      { path: 'add-edit-theme', component: AddEditThemeComponent },
      { path: 'add-edit-theme/:id', component: AddEditThemeComponent },

      { path: 'mission-application', component: MissionApplicationComponent },

      { path: 'story', component: StoryComponent },
      { path: 'banner', component: BannerComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

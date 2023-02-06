import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MissionComponent } from './mission/mission.component';
import { CmsPagesComponent } from './cms-pages/cms-pages.component';
import { StoryComponent } from './story/story.component';
import { MissionApplicationComponent } from './mission-application/mission-application.component';
import { AddCmsPageComponent } from './cms-pages/add-cms-page/add-cms-page.component';
import { EditCmsPageComponent } from './cms-pages/edit-cms-page/edit-cms-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'cms-page',
        component: CmsPagesComponent,
      },
      {
        path: 'add-cms-page',
        component: AddCmsPageComponent,
      },
      {
        path: 'edit-cms-page',
        component: EditCmsPageComponent,
      },
      {
        path: 'mission',
        component: MissionComponent,
      },
      {
        path: 'mission-application',
        component: MissionApplicationComponent,
      },
      {
        path: 'story',
        component: StoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/ci-platform', pathMatch: 'full' },
  {
    path: 'ci-platform',
    loadChildren: () =>
      import('./LoginRegister Module/platform-login.module').then(
        (m) => m.PlatformLoginModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./Mission Module/mission.module').then(
        (m) => m.MissionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

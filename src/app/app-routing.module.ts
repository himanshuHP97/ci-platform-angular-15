import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ci-platform', pathMatch: 'full' },
  {
    path: 'ci-platform',
    loadChildren: () =>
      import('./user-modules/LoginRegister Module/platform-login.module').then(
        (m) => m.PlatformLoginModule
      ),
  },
  {
    path: 'user-home',
    loadChildren: () =>
      import('./user-modules/user-modules.module').then(
        (m) => m.UserModulesModule
      ),
  },
  {
    path: 'admin-home',
    loadChildren: () =>
      import('./admin-modules/admin-modules.module').then(
        (m) => m.AdminModulesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

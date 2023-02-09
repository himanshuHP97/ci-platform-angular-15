import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { PlatformLoginComponent } from './platform-login.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformLoginComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        children: [
          { path: 'reset-password', component: ResetPasswordComponent },
        ],
      },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformLoginRoutingModule { }

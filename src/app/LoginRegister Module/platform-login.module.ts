import { PlatformLoginRoutingModule } from './platform-login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { PlatformLoginComponent } from './platform-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    PlatformLoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlatformLoginRoutingModule
  ],
})
export class PlatformLoginModule {}

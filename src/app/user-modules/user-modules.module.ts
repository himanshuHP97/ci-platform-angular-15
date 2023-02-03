import { HomeComponent } from './Mission Module/home/home.component';
import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../Components/components.module';

import { UserProfileComponent } from './Mission Module/user-profile/user-profile.component';
import { UserModulesComponent } from './user-modules.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    UserModulesComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    UserRoutingModule
  ]
})
export class UserModulesModule { }

import { SharedModule } from '../Shared/shared.module';
import { ComponentsModule } from '../Components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionRoutingModule } from './mission-routing.module';

import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission.component';


@NgModule({
  declarations: [MissionComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MissionRoutingModule,
    SharedModule,
  ],
})
export class MissionModule {}

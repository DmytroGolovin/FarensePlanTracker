import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    WorkoutComponent,
    NutritionComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ExerciseCardComponent } from './workout/exercise-card/exercise-card.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ExerciseComponent } from './workout/exercise/exercise.component';
import { FormsModule } from '@angular/forms';
import { ExerciseResolver } from '../shared/resolvers/exercise.resolver';
import { DashboardResolver } from '../shared/resolvers/dashboard.resolver';
import { WorkoutResolver } from '../shared/resolvers/workout.resolver';
import { PlanComponent } from './plan/plan.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    HomeComponent,
    WorkoutComponent,
    NutritionComponent,
    SettingsComponent,
    DashboardComponent,
    ExerciseCardComponent,
    NotificationsComponent,
    ExerciseComponent,
    PlanComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [
    ExerciseResolver,
    DashboardResolver,
    WorkoutResolver
  ]
})
export class ViewsModule { }

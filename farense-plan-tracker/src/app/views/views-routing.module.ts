import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkoutComponent } from './workout/workout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ExerciseComponent } from './workout/exercise/exercise.component';
import { ExerciseResolver } from '../shared/resolvers/exercise.resolver';
import { DashboardResolver } from '../shared/resolvers/dashboard.resolver';
import { WorkoutResolver } from '../shared/resolvers/workout.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        resolve: {
          dashboardData: DashboardResolver
        },
      },
      {
        path: 'exercise/:id',
        component: ExerciseComponent,
        resolve: {
          exerciseData: ExerciseResolver
        },
      },
      {
        path: 'workout/:id',
        component: WorkoutComponent,
        resolve: {
          workoutData: WorkoutResolver
        },
      },
      {
        path: 'nutrition',
        component: NutritionComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

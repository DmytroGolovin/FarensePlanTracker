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
import { ClientResolver } from '../shared/resolvers/client.resolver';
import { WorkoutResolver } from '../shared/resolvers/workout.resolver';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      clientData: ClientResolver
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'plan',
        component: PlanComponent,
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

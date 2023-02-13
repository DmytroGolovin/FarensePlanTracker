import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'workout',
    component: WorkoutComponent,
  },
  {
    path: 'nutrition',
    component: NutritionComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

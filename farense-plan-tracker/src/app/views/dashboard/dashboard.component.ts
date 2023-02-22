import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Constants } from 'src/app/shared/services/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public todaysWorkout: WorkoutModel | null = null;
  constructor(private _router: Router, private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['dashboardData'];
      if(!res.data.error) {
        console.log(res);
        this.todaysWorkout = res.data?.workouts.length > 0
          ? res.data?.workouts[0]
          : null;
      } else {
        console.log(res.data.error);
      }
    });
  }

  public navigateToNotifications(){
    this.navigateTo(Constants.clientRoutes.notifications.root);
  }

  public navigateToWorkout(){
    this.navigateTo(Constants.clientRoutes.workout.root + '/' + this.todaysWorkout?.id);
  }

  public navigateToNutrition(){
    this.navigateTo(Constants.clientRoutes.nutrition.root);
  }

  public navigateToWeight(){
    this.navigateTo(Constants.clientRoutes.exercise.root);
  }

  private navigateTo(url: string) {
    this._router.navigateByUrl(url);
  }
}

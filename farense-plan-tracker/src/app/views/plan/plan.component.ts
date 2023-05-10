import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlanWorkoutModel } from 'src/app/shared/models/entities/plan-workout.model';
import { Constants } from 'src/app/shared/services/constants';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  public workouts: Array<PlanWorkoutModel> | undefined = [];

  constructor(private _router: Router,){
  }

  ngOnInit(): void {
  }

  public navigateToPlanOverview(){
    this.navigateTo(Constants.clientRoutes.plan.overview);
  }

  public navigateToPlanWorkouts(){
    this.navigateTo(Constants.clientRoutes.plan.workouts);
  }

  private navigateTo(url: string) {
    this._router.navigateByUrl(url);
  }
}

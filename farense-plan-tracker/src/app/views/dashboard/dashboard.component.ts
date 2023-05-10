import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import DateHelper from 'src/app/shared/helpers/date.helper';
import { ClientModel } from 'src/app/shared/models/entities/client.model';
import { PlanWorkoutModel } from 'src/app/shared/models/entities/plan-workout.model';
import { PlanModel } from 'src/app/shared/models/entities/plan.model';
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
  public todaysWorkout: PlanWorkoutModel | undefined;
  public clientsPlan: PlanModel | undefined;
  constructor(private _router: Router, private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route.parent?.data.subscribe((res: any) => {
      const clientData = res.clientData;

      if(!clientData || clientData.error){
       return;
      }

      const currentClient: ClientModel = clientData.data['client'];

      const currentDate = new Date();
      const currentWeekDay = DateHelper.getDayOfWeekString(currentDate.getDay());

      this.todaysWorkout = currentClient?.plan?.workouts.find(x => x.weekDay == currentWeekDay);
      this.clientsPlan = currentClient?.plan;
    });
  }

  public navigateToNotifications(){
    this.navigateTo(Constants.clientRoutes.notifications.root);
  }

  public navigateToWorkout(){
    this.navigateTo(Constants.clientRoutes.workout.root + '/' + this.todaysWorkout?.workout?.id);
  }

  public navigateToNutrition(){
    this.navigateTo(Constants.clientRoutes.nutrition.root);
  }

  public navigateToWeight(){
    this.navigateTo(Constants.clientRoutes.weight.root);
  }

  public navigateToPlanOverview(){
    this.navigateTo(Constants.clientRoutes.plan.overview);
  }

  private navigateTo(url: string) {
    this._router.navigateByUrl(url);
  }
}

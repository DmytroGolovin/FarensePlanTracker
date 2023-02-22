import { Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable, of } from "rxjs";
import { WorkoutsService } from "../services/hygraph/workouts/workouts.service";
import { WorkoutModel } from "../models/entities/workout.model";
import { AuthService } from "../services/auth/auth.service";
import DateHelper from "../helpers/date.helper";

@Injectable()
export class DashboardResolver implements Resolve<Observable<ApolloQueryResult<WorkoutModel> | any>>{

    constructor(private _workoutsService: WorkoutsService, private _authService: AuthService, private _router: Router) {}

    resolve(): Observable<ApolloQueryResult<WorkoutModel> | any> {
      const user = this._authService.getCurrentUser();

      if(!user) {
        this._router.navigateByUrl('404', {skipLocationChange: true});
        return of(null);
      }

      const currentDate = new Date();
      const currentDayOfTheWeek = DateHelper.getDayOfWeekString(currentDate.getDay());

      return this._workoutsService.getUserWorkoutsByWeekDay(user, currentDayOfTheWeek);
    }
}

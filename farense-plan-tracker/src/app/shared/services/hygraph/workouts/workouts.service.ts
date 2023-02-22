import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER_WORKOUTS, GET_USER_WORKOUTS_BY_WEEK_DAY } from './workouts.queries';
import { UserModel } from 'src/app/shared/models/user.model';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private _apollo: Apollo,) { }

  public getUserWorkouts(user: UserModel) : Observable<ApolloQueryResult<WorkoutModel>> {
    return this._apollo.watchQuery<WorkoutModel>({
      query: GET_USER_WORKOUTS,
      variables: {
        clientId: user?.uid,
      },
    }).valueChanges;
  }

  public getUserWorkoutsByWeekDay(user: UserModel, weekDay: string) : Observable<ApolloQueryResult<WorkoutModel>> {
    return this._apollo.watchQuery<WorkoutModel>({
      query: GET_USER_WORKOUTS_BY_WEEK_DAY,
      variables: {
        clientEmail: user?.email,
        weekDay: weekDay
      },
    }).valueChanges;
  }
}

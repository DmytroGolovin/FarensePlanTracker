import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_WORKOUT_EXERCISES_BY_ID } from './workouts.queries';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { ResultModel } from 'src/app/shared/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private _apollo: Apollo,) { }

  public getWorkoutExercisesById(workoutId: string) : Observable<ApolloQueryResult<ResultModel<WorkoutModel>>> {
    return this._apollo.watchQuery<ResultModel<WorkoutModel>>({
      query: GET_WORKOUT_EXERCISES_BY_ID,
      variables: {
        workoutId: workoutId,
      },
    }).valueChanges;
  }
}

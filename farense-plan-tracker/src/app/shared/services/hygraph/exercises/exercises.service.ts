import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_WORKOUT_EXERCISES, GET_WORKOUT_EXERCISE_BY_ID } from './exercises.queries';
import { ResultModel } from 'src/app/shared/models/result.model';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';
import { WorkoutExerciseModel } from 'src/app/shared/models/entities/workout-exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private _apollo: Apollo) { }

  public getWorkoutExercises(workoutId: string) : Observable<ApolloQueryResult<ResultModel<WorkoutModel>>> {
    return this._apollo.watchQuery<ResultModel<WorkoutModel>>({
      query: GET_WORKOUT_EXERCISES,
      variables: {
        workoutId: workoutId
      },
    }).valueChanges;
  }

  public getWorkoutExerciseById(exerciseId: string) : Observable<ApolloQueryResult<ResultModel<WorkoutExerciseModel>>> {
    return this._apollo.watchQuery<ResultModel<WorkoutExerciseModel>>({
      query: GET_WORKOUT_EXERCISE_BY_ID,
      variables: {
        exerciseId: exerciseId
      },
    }).valueChanges;
  }
}

import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_EXERCISES, GET_WORKOUT_EXERCISES } from './exercises.queries';
import { ExerciseModel } from 'src/app/shared/models/entities/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private _apollo: Apollo) { }

  public getExercises() : Observable<ApolloQueryResult<ExerciseModel>> {
    return this._apollo.watchQuery<ExerciseModel>({
      query: GET_EXERCISES
    }).valueChanges;
  }

  public getWorkoutExercises(workoutId: string) : Observable<ApolloQueryResult<ExerciseModel>> {
    return this._apollo.watchQuery<ExerciseModel>({
      query: GET_WORKOUT_EXERCISES,
      variables: {
        workoutId: workoutId
      },
    }).valueChanges;
  }
}
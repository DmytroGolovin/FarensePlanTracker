import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ExercisesService } from "../services/hygraph/exercises/exercises.service";
import { ApolloQueryResult } from "@apollo/client/core";
import { ResultModel } from "../models/result.model";
import { WorkoutExerciseModel } from "../models/entities/workout-exercise.model";

@Injectable()
export class ExerciseResolver implements Resolve<Observable<ApolloQueryResult<ResultModel<WorkoutExerciseModel>>>>{

    constructor(private _exercisesService: ExercisesService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ApolloQueryResult<ResultModel<WorkoutExerciseModel>>> {
      const workoutExerciseId = route.params['id'];
      return this._exercisesService.getWorkoutExerciseById(workoutExerciseId);
    }
}

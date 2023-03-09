import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ApolloQueryResult } from "@apollo/client/core";
import { ResultModel } from "../models/result.model";
import { WorkoutModel } from "../models/entities/workout.model";
import { WorkoutsService } from "../services/hygraph/workouts/workouts.service";

@Injectable()
export class WorkoutResolver implements Resolve<Observable<ApolloQueryResult<ResultModel<WorkoutModel>>>>{

    constructor(private _workoutService: WorkoutsService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ApolloQueryResult<ResultModel<WorkoutModel>>> {
      const workoutId = route.params['id'];
      console.log(workoutId)
      return this._workoutService.getWorkoutExercisesById(workoutId);
    }
}

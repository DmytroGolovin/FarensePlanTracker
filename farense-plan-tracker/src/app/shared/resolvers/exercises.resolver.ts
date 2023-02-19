import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ExercisesService } from "../services/hygraph/exercises/exercises.service";
import { ExerciseModel } from "../models/entities/exercise.model";
import { ApolloQueryResult } from "@apollo/client/core";

@Injectable()
export class ExercisesResolver implements Resolve<Observable<ApolloQueryResult<ExerciseModel>>>{

    constructor(private _exercisesService: ExercisesService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ApolloQueryResult<ExerciseModel>> {
        return this._exercisesService.getExercises();
    }
}

import { Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable, catchError, of } from "rxjs";
import { WorkoutModel } from "../models/entities/workout.model";
import { AuthService } from "../services/auth/auth.service";
import DateHelper from "../helpers/date.helper";
import { PlanWorkoutModel } from "../models/entities/plan-workout.model";
import { ClientsService } from "../services/hygraph/clients/clients.service";
import { ClientModel } from "../models/entities/client.model";

@Injectable()
export class DashboardResolver implements Resolve<Observable<ApolloQueryResult<WorkoutModel> | any>>{

    constructor(private _authService: AuthService,
      private _clientService: ClientsService, private _router: Router) {}

    resolve(): Observable<PlanWorkoutModel | any> {
      const user = this._authService.getCurrentUser();

      if(!user) {
        this._router.navigateByUrl('404', {skipLocationChange: true});
        return of(null);
      }

      return this._clientService.getClientByEmail(user.email).pipe(
        catchError(error => {
          return of("No Data");
        })
      );
    }
}

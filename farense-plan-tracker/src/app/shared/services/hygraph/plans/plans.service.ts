import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { PlanModel } from 'src/app/shared/models/entities/plan.model';
import { GET_PLAN_BY_USER } from './plans.queries';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private _apollo: Apollo) { }

  public getPlanByUser(user: UserModel) : Observable<ApolloQueryResult<PlanModel>> {
    return this._apollo.watchQuery<PlanModel>({
      query: GET_PLAN_BY_USER,
      variables: {
        clientEmail: user?.email,
      },
    }).valueChanges;
  }
}

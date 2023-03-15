import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private _apollo: Apollo) { }

  public getUserPlan(userId: string) {

  }
}

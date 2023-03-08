import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_CLIENT_BY_EMAIL } from './clients.queries';
import { ClientModel } from 'src/app/shared/models/entities/client.model';
import { ResultModel } from 'src/app/shared/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private _apollo: Apollo) { }

  public getClientByEmail(userEmail: string) : Observable<ApolloQueryResult<ResultModel<ClientModel>>> {
    return this._apollo.watchQuery<ResultModel<ClientModel>>({
      query: GET_CLIENT_BY_EMAIL,
      variables: {
        userEmail: userEmail,
      },
    }).valueChanges;
  }
}

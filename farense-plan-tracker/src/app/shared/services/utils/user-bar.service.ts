import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserBarService {
  // Observable routeTitle source
  private _routeTitleSource = new BehaviorSubject<string>('');
  // Observable routeTitle stream
  routeTitle$ = this._routeTitleSource.asObservable();

  constructor() { }

  public setRouteTitle(routeTitle: string) {
    this._routeTitleSource.next(routeTitle);
  }
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserBarService } from '../../services/utils/user-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  public currentUser: UserModel | null = null;
  public currentDate: Date = new Date();
  public routeTitle: string | undefined = undefined;
  public navOpened: boolean = false;
  public isNavMenu: boolean = false;
  public hasHistory: boolean = false;

  private navMenus: Array<string> = ['/app/dashboard', '/app/plan', '/app/nutrition', '/app/settings', '/app/info'];
  private readonly homeRoute: string = '/app/dashboard';
  private routeTitleSubscription: Subscription | null = null;

  constructor(private _authService: AuthService, private _location: Location, private _router: Router,
    private _activatedRoute: ActivatedRoute, private _userBarService: UserBarService){
    this.currentUser = this._authService.getCurrentUser();
    _router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.isNavMenu = this.navMenus.includes(this._router.url);
        const locationState = _location.getState() as LoactionState;
        this.hasHistory = locationState.navigationId != 1;
        this.setRouteTitle("");
      }
    });
  }

  ngOnInit() {
    this.routeTitleSubscription = this._userBarService.routeTitle$
      .subscribe(title => this.setRouteTitle(title));
    this.isNavMenu = this.navMenus.includes(this._router.url);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.routeTitleSubscription?.unsubscribe();
  }

  public toggleNav(){
    this.navOpened = !this.navOpened;
  }

  public onBackClicked() {
    this._location.back();
  }

  public onSignOut(){
    this._authService.singOut();
  }

  private setRouteTitle(subscribedTitle: string) {
    if(this._router.url != this.homeRoute) {
      const dataRouteTitle = this._activatedRoute.snapshot?.firstChild?.data['routeTitle'];
      this.routeTitle = dataRouteTitle ? dataRouteTitle : subscribedTitle;
    } else {
      this.routeTitle = undefined;
    }
  }
}

interface LoactionState {
  navigationId: number;
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserBarService } from '../../services/helpers/user-bar.service';
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

  private navMenus: Array<string> = ['/app/dashboard', '/app/plan', '/app/nutrition', '/app/settings'];
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

        if(this._router.url != this.homeRoute) {
          this.routeTitle = this._activatedRoute.snapshot?.firstChild?.data['routeTitle']
        } else {
          this.routeTitle = undefined;
        }
      }
    });
  }

  ngOnInit() {
    this.routeTitleSubscription = this._userBarService.routeTitle$
      .subscribe(title => this.routeTitle = title);
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
}

interface LoactionState {
  navigationId: number;
}

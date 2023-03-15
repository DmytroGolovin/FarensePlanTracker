import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  public currentUser: UserModel | null = null;
  public currentDate: Date = new Date();
  public navOpened: boolean = false;
  public isHome: boolean = false;
  public hasHistory: boolean = false;

  constructor(private _authService: AuthService, private _location: Location, private _router: Router){
    this.currentUser = this._authService.getCurrentUser();
    _router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.isHome = this._router.url === '/app/dashboard';
        const locationState = _location.getState() as LoactionState;
        this.hasHistory = locationState.navigationId != 1;
      }
    });
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

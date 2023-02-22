import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  public currentUser: UserModel | null = null;
  public currentDate: Date = new Date();
  public navOpened: boolean = false;
  public hasHistory: boolean = false;

  constructor(private _authService: AuthService, private _location: Location){
    this.currentUser = this._authService.getCurrentUser();
  }

  public toggleNav(){
    this.navOpened = !this.navOpened;
  }

  public onBackClicked() {
    this._location.back();
  }
}

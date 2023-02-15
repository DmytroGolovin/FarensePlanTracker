import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  public currentUser: UserModel | null = null;
  public currentDate: Date = new Date();
  public constantsRef = Constants;

  constructor(private _authService: AuthService){
    this.currentUser = this._authService.getCurrentUser();
  }
}

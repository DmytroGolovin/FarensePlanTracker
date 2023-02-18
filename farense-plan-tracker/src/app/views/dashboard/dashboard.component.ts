import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Constants } from 'src/app/shared/services/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public currentUser: UserModel | null = null;
  public currentDate: Date = new Date();

  constructor(private _authService: AuthService, private _router: Router){
    this.currentUser = this._authService.getCurrentUser();
  }

  public navigateToNotifications(){
    this.navigateTo(Constants.clientRoutes.notifications.root);
  }

  public navigateToWorkout(){
    this.navigateTo(Constants.clientRoutes.workout.root);
  }

  public navigateToNutrition(){
    this.navigateTo(Constants.clientRoutes.nutrition.root);
  }

  public navigateToWeight(){
    this.navigateTo(Constants.clientRoutes.exercise.root);
  }

  private navigateTo(url: string) {
    this._router.navigateByUrl(url);
  }
}

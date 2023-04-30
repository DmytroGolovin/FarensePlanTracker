import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-no-client',
  templateUrl: './no-client.component.html',
  styleUrls: ['./no-client.component.scss']
})
export class NoClientComponent {
  public currentUser: UserModel | null = null;
  constructor(private _authService: AuthService){}

  ngOnInit(): void {
    this.currentUser = this._authService.getCurrentUser();
  }

  public onSignOut(){
    this._authService.singOut();
  }
}

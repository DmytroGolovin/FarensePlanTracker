import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthResultModel } from 'src/app/shared/models/firebase/auth-result.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public isSignInWithEmail: boolean = false;
  public email: string = "";
  public password: string = "";
  public signInStatus: AuthResultModel<string> | null = null;

  constructor(private _authService: AuthService, private _toastr: ToastrService){}

  public async onFacebookAuth() {
    this.signInStatus = await this._authService.signInWithFacebook();
    if(this.signInStatus.isSuccess) {
      this._toastr.success(this.signInStatus.data);
    }
    else {
      this._toastr.error(this.signInStatus.data);
    }
  }

  public async onGoogleAuth() {
    this.signInStatus = await this._authService.signInWithGoogle();
    if(this.signInStatus.isSuccess) {
      this._toastr.success(this.signInStatus.data);
    }
    else {
      this._toastr.error(this.signInStatus.data);
    }
  }

  public async onEmailPasswordAuth() {
    this.signInStatus = await this._authService.singInWithEmail(this.email, this.password);
    if(this.signInStatus.isSuccess) {
      this._toastr.success(this.signInStatus.data);
    }
    else {
      this._toastr.error(this.signInStatus.data);
    }
  }

  public onSignInWithEmail(){
    this.isSignInWithEmail = true;
  }

  public onBack(){
    this.isSignInWithEmail = false;
  }
}

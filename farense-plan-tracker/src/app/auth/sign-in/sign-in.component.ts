import { Component } from '@angular/core';
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

  constructor(private _authService: AuthService){}

  public onFacebookAuth() {
    this._authService.signInWithFacebook();
  }

  public onGoogleAuth() {
    this._authService.signInWithGoogle();
  }

  public async onEmailPasswordAuth() {
    var test = await this._authService.singInWithEmail(this.email, this.password);
  }

  public onSignInWithEmail(){
    this.isSignInWithEmail = true;
  }

  public onBack(){
    this.isSignInWithEmail = false;
  }
}

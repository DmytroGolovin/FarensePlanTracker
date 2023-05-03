import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { AuthResultModel } from '../../models/firebase/auth-result.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInRedirectUrl: string = "app";
  private signOutRedirectUrl: string = "auth/sign-in";
  private signInSuccessMsg: string = "Success! You are signed in!";

  constructor(private _fireAuth: AngularFireAuth, private _router: Router) { }

  public async singInWithEmail(email: string, password: string, redirectUrl: string = this.signInRedirectUrl): Promise<AuthResultModel<string>> {
    return await this._fireAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.setLoggedInUser(res.user);
      this._router.navigate([redirectUrl]);
      return {
        data: this.signInSuccessMsg,
        isSuccess: true
      };
    }).catch(error => {
      return {
        data: error.message,
        isSuccess: false
      };
    });
  }

  public async singUpWithEmail(email: string, password: string, redirectUrl: string = this.signInRedirectUrl): Promise<AuthResultModel<string>> {
    return await this._fireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.setLoggedInUser(res.user);
      this._router.navigate([redirectUrl]);
      return {
        data: this.signInSuccessMsg,
        isSuccess: true
      };
    }).catch(error => {
      return {
        data: error.message,
        isSuccess: false
      };
    });
  }

  public signInWithGoogle(redirectUrl: string = this.signInRedirectUrl) : Promise<AuthResultModel<string>> {
    return this._fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.setLoggedInUser(res.user);
      this._router.navigate([redirectUrl]);
      return {
        data: this.signInSuccessMsg,
        isSuccess: true
      };
    }).catch(error => {
      return {
        data: error.message,
        isSuccess: false
      };
    });
  }

  public signInWithFacebook(redirectUrl: string = this.signInRedirectUrl): Promise<AuthResultModel<string>> {
    return this._fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
      this.setLoggedInUser(res.user);
      this._router.navigate([redirectUrl]);
      return {
        data: this.signInSuccessMsg,
        isSuccess: true
      };
    }).catch(error => {
      return {
        data: error.message,
        isSuccess: false
      };
    });
  }

  public singOut(redirectUrl: string = this.signOutRedirectUrl): Promise<AuthResultModel<string>> {
    localStorage.removeItem('currentUser');
    return this._fireAuth.signOut().then(res => {
      this._router.navigate([redirectUrl]);
      return {
        data: this.signInSuccessMsg,
        isSuccess: true
      };
    }).catch(error => {
      return {
        data: error.message,
        isSuccess: false
      };
    });
  }

  public setLoggedInUser(user: any){
    let loggedUser: UserModel = {
      uid : user.uid,
      email : user.email,
      photoURL : user.photoURL,
      displayName : user.displayName
    }

    localStorage.setItem('currentUser', JSON.stringify(loggedUser));
  }

  public getCurrentUser(): UserModel | null {
    let userString = localStorage.getItem('currentUser');
    if(userString){
      let user: UserModel = JSON.parse(userString as string)
      return user;
    }
    return null;
  }
}

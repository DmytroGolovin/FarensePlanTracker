import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthResultModel } from 'src/app/shared/models/firebase/auth-result.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { PasswordValidators } from 'src/app/shared/validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  // public email: string = "";
  // public password: string = "";
  // public rePassword: string = "";
  public signInStatus: AuthResultModel<string> | null = null;

  public signUpForm!: FormGroup;
  public submitted = false;

  constructor(private _authService: AuthService, private _toastr: ToastrService, private _formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.signUpForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
          requiresDigit: true
        }),
        PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
          requiresUppercase: true
        }),
        PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
          requiresLowercase: true
        }),
        PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
          requiresSpecialChars: true
        })
      ])),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      // FormGroup validators go here.
      validators: PasswordValidators.MatchValidator
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  get passwordValid() {
    return this.signUpForm.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.signUpForm.controls["password"].hasError("required");
  }

  get minLengthValid() {
    return !this.signUpForm.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.signUpForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.signUpForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.signUpForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.signUpForm.controls["password"].hasError("requiresSpecialChars");
  }

  public async onEmailPasswordSignUp() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      this._toastr.error("Invalid form.");
      return;
    }

    this.signInStatus = await this._authService.singUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password']);
    if(this.signInStatus.isSuccess) {
      this._toastr.success(this.signInStatus.data);
    }
    else {
      this._toastr.error(this.signInStatus.data);
    }
  }
}

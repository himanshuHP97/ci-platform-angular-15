import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

import { LoginService } from './../../../service/login.service';
import { ConfirmPasswordValidator } from 'src/app/Shared/password-matcher';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  signUpForm!: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: NgToastService) { }

  ngOnInit() {
    this.signUpForm = this.formbuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])],
        confirmpassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])],
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmpassword")
      }
    );
  }
  get firstname() {
    return this.signUpForm.get('firstname') as FormControl;
  }
  get lastname() {
    return this.signUpForm.get('lastname') as FormControl;
  }
  get phone() {
    return this.signUpForm.get('phone') as FormControl;
  }
  get email() {
    return this.signUpForm.get('email') as FormControl;
  }
  get password() {
    return this.signUpForm.get('password') as FormControl;
  }
  get confirmpassword() {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }


  onSignUp() {
    this.submitted = true;

    if(this.signUpForm.value.password != this.signUpForm.value.confirmpassword){
      this.toastr.error({ detail: 'Error', summary: 'Password not match!', sticky: true, position: 'tr', duration: 1000 });
    }

    if (this.signUpForm.valid) {
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      this.isLoading = true;

      // this.isLoading = true;
      this.loginService.signup(email, password).subscribe(
        (response) => {
          if (response != null) {
            this.isLoading = false;
            this.router.navigate(['/ci-platform/login']);
            this.toastr.success({ detail: 'Success', summary: 'Register successful!', sticky: true, position: 'tr', duration: 1000 })
          }
        },
        errorMessage => {
          this.toastr.error({ detail: 'Error', summary: `${errorMessage}`, sticky: true, position: 'tr', duration: 1000 })
          this.isLoading = false;
        }
      );
    }
  }

  // backTologin() {
  //   this.router.navigate(['/ci-platform/login']);
  //   //  if(user.type === 'admin') {
  //   //      this.router.navigate(['/adminlogin']);
  //   //     } else if(user.type === 'user') {
  //   // this.router.navigate(['/login']);
  //   // }
  // }
}

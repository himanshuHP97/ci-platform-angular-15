import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordMatcher } from 'src/app/Shared/password-matcher';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  signUpForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.signUpForm = this.formbuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: PasswordMatcher.match }
    );
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      this.router.navigate(['/ci-platform/login']);
      console.log(this.signUpForm);
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

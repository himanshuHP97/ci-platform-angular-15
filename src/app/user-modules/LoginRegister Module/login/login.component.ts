import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/service/login.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: NgToastService
  ) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required])]
    });
  }
  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.isLoading = true;

      // this.isLoading = true;
      this.loginService.login(email, password).subscribe(
        (response) => {
          if (response.email == 'admin@ciplatform.com') {
            this.isLoading = false;
            this.router.navigate(['/admin-home']);
            this.toastr.success({ detail: 'Success', summary: 'Login successful!', sticky: true, position: 'tr', duration: 1000 })
          }
          else{
            this.isLoading = false;
            this.router.navigate(['/user-home']);
            this.toastr.success({ detail: 'Success', summary: 'Login successful!', sticky: true, position: 'tr', duration: 1000 })
          }
        },
        errorMessage => {
          this.toastr.error({ detail: 'Error', summary: `${errorMessage}`, sticky: true, position: 'tr', duration: 1000 })
          this.isLoading = false;
        }
      );
    }
  }
}


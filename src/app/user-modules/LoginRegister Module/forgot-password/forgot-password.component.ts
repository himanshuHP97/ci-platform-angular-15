import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  lostPassword!: FormGroup;
  isLoading = false;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: NgToastService
  ) { }

  ngOnInit() {
    this.lostPassword = this.formbuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }
  get email() {
    return this.lostPassword.get('email') as FormControl;
  }


  onSubmit() {
    this.submitted = true;
    if (this.lostPassword.valid) {
      const email = this.lostPassword.value.email;
      this.isLoading = true;

      // this.isLoading = true;
      this.loginService.resetPassword(email).subscribe(
        (response) => {
            this.isLoading = false;
            this.router.navigate(['/ci-platform']);
            this.toastr.success({ detail: 'Success', summary: 'Reset link has sent!', sticky: true, position: 'tr', duration: 1000 })
          },
        errorMessage => {
          this.toastr.error({ detail: 'Error', summary: `${errorMessage}`, sticky: true, position: 'tr', duration: 1000 })
          this.isLoading = false;
        }
      );
    }else{
      {
        this.toastr.error({ detail: 'Error', summary: 'Form is not valid!', sticky: true, position: 'tr', duration: 1000 })
        this.isLoading = false;
      }
    }
  }
}


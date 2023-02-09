import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email === 'admin@ciplatform.com' && password === 'Admin@123') {
        this.router.navigate(['/admin-home']);
        console.log(this.loginForm);
      } else if (email === 'user@ciplatform.com' && password === 'User@123') {
        this.router.navigate(['/user-home']);
        console.log(this.loginForm);
      } else {
        window.alert('You are not authorised person!');
        this.router.navigate(['/ci-platform']);
      }
    } else {
      window.alert('An error occurred');
    }
  }
}

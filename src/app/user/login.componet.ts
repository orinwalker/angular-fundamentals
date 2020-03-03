import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, Inject, forwardRef } from '@angular/core';

@Component
({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  userName: string;
  password: string;

  constructor( @Inject(forwardRef(() => AuthService)) private authService: AuthService,
               @Inject(forwardRef(() => Router)) private router: Router) {

  }

  login(formValues) {
    console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

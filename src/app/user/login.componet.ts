import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, Inject, forwardRef } from '@angular/core';

@Component
({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px }
    `]
})

export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid: boolean = false;

  constructor( @Inject(forwardRef(() => AuthService)) private authService: AuthService,
               @Inject(forwardRef(() => Router)) private router: Router) {

  }

  login(formValues) {
    console.log(formValues);
    console.log('THE USERNAME IS: ' + formValues.userName);

    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid = true;
          console.log('Invalid login received');
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

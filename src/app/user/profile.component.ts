import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component
({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C3C5; color:red; padding-left: 10px;}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor
    (
      @Inject(forwardRef(() => AuthService)) private authService: AuthService,
      @Inject(forwardRef(() => Router)) private router: Router
    ) {}

  ngOnInit() {
      let fn = '';
      let ln = '';
      if (this.authService.currentUser) {
        fn = this.authService.currentUser.firstName;
        ln = this.authService.currentUser.lastName;
      }
      this.firstName = new FormControl(fn, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(ln, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      })
  }

  validateFirstName() {
    if (!this.firstName)
      return false;
    return this.firstName.valid || this.firstName.touched;
  }

  validateLastName() {
    if (!this.lastName)
      return false;
    return this.lastName.valid || this.lastName.touched;
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      console.log("saveProfile: "+formValues.firstName + " "+formValues.lastName);
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    }
  }
}

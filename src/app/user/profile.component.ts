import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component
({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor
    (
      @Inject(forwardRef(() => AuthService)) private authService: AuthService,
      @Inject(forwardRef(() => Router)) private router: Router
    ) {}

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName);
    const lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    console.log("saveProfile: "+formValues.firstName + " "+formValues.lastName);
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
  }

}

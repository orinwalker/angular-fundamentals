import { LoginComponent } from './login.componet';
import { UserRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule
({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule {

}

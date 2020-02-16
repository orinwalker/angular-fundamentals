import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'angular-fundamentals';
}

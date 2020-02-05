import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
  <app-navbar></app-navbar>
  <app-events-list></app-events-list>
  `,
})
export class EventsAppComponent {
  title = 'angular-fundamentals';
}

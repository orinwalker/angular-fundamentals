
// import { EventListResolver } from './events/events-list-resolver.service';
// import { EventsListComponent } from './events/events-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail.component';
// import { EventService } from './events/shared/event.service';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { CreateEventComponent } from './events/create-event.component';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';

import { ProfileComponent } from './user/profile.component';
import { Error404Component } from './errors/404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';

// This is a barrel for 'events'
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],

    bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}


// import { EventListResolver } from './events/events-list-resolver.service';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { EventsListComponent } from './events/events-list.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { CreateEventComponent } from './events/create-event.component';

import { UserRoutes } from './user/user.routes';
import { Error404Component } from './errors/404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule} from './user/user.module';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // create a resolver for the events list component
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  // ORIN: I added this one
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

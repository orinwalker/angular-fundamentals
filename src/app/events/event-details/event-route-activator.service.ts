import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, Inject, forwardRef, OnInit, Injectable } from '@angular/core';
import { EventService } from './../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  // constructor(private eventService: EventService, private router: Router) {

  // }

  constructor(
    @Inject(forwardRef(() => EventService)) private eventService: EventService,
    @Inject(forwardRef(() => Router)) private router: Router) {
}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}

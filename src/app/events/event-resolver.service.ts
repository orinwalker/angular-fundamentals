import { Injectable, Inject, forwardRef } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {

  constructor(@Inject(forwardRef(() => EventService)) private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot)  {
    // This is the resolver; we get the events data from a pipe then we map the event so
    // that we can directly return the observable to the route
    return this.eventService.getEvent(route.params[`id`]);
  }
}

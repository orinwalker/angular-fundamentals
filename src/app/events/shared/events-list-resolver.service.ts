import { EventService } from './event.service';
import { Injectable, Inject, forwardRef } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(@Inject(forwardRef(() => EventService)) private eventService: EventService) { }

  resolve()  {
    // This is the rsolver, we get the data from a pipe then we map the event so
    // that we can directly return the observable to the route
    return this.eventService.getEvents().pipe(map(events => events));
  }
}

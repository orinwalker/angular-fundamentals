import { IEvent, ISession } from './../shared/event.model';
import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px; }
        a { cursor:pointer }
    `]
})

export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode: boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor( @Inject(forwardRef(() => EventService)) private eventService: EventService,
                 @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute) {
    }

    ngOnInit() {
        const eventId = +this.route.snapshot.params.id;
        console.log('EventId is: ' + eventId);
        this.event = this.eventService.getEvent(eventId);
    }

    addSession() {
      this.addMode = true;
    }

    saveNewSession(session: ISession) {
      // get the Id of the highest numbered session
      const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
      session.id = nextId + 1;
      this.event.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;
    }

    cancelAddSession() {
      this.addMode = false;
    }

    
}

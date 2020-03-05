import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';


@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(
            @Inject(forwardRef(() => EventService)) private eventService: EventService,
            @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute ) {
    }

    ngOnInit() {
        // get the data via an observable
        // this.eventService.getEvents().subscribe(events => { this.events = events; });

        // Now, instead of subscribing to the event like before, get the data directly from the route
        this.events = this.route.snapshot.data.events;
    }

}


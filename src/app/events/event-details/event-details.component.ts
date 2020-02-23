import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent implements OnInit {

    event: any;

    constructor( @Inject(forwardRef(() => EventService)) private eventService: EventService,
                 @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute) {
    }

    ngOnInit() {
        const x = +this.route.snapshot.params.id;
        console.log('EventId is: ' + x);
        this.event = this.eventService.getEvent(x);
    }
}

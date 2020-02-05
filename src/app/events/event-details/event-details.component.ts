import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component( {
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right:20px;}
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any;
    constructor( @Inject(forwardRef(() => EventService)) public eventService: EventService) { }
    ngOnInit() {
        this.event = this.eventService.getEvent(1);
    }
}

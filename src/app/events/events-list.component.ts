import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';


@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: any[];
    constructor(@Inject(forwardRef(() => EventService)) public eventService: EventService ) {
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
}


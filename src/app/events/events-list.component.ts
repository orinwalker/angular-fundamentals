import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

declare let toastr

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

    handleThumbnailClick(eventName) {
        toastr.success(eventName);
    }
}


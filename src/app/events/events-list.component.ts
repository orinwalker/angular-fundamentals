import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: any[];
            constructor(
            @Inject(forwardRef(() => EventService)) public eventService: EventService,
            @Inject(forwardRef(() => ToastrService)) public toastr: ToastrService) {
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        toastr.success(eventName);
    }
}


import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;
  newEvent;

  constructor(
    @Inject(forwardRef(() => Router)) private router: Router,
    @Inject(forwardRef(() => EventService)) private eventService: EventService

    ) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false; // bypass the route guard
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }

}

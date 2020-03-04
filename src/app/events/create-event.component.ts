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
  newEvent: any;

  constructor(
    @Inject(forwardRef(() => Router)) private router: Router,
    @Inject(forwardRef(() => EventService)) private eventService: EventService

    ) { }

  ngOnInit() {
    this.newEvent = {
      // name: 'Ng Spectacular',
      // date: '8/8/2028',
      // time: '10am',
      // price: 799.99,
      // location: {
      //   address: '456 Happy St',
      //   city: 'Felicity',
      //   country: 'Angularistan'
      // },
      // onlineUrl: 'http://ngSpectacular.com',
      // imageUrl: 'http://ngSpectacular.com/logo.png'

      name: '',
      date: '',
      time: '',
      price: 0.00,
      location: {
        address: '',
        city: '',
        country: ''
      },
      onlineUrl: '',
      imageUrl: ''

    }
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

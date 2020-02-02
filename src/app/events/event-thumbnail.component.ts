import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    console.log('handleClickMe called!');
    console.log('now emit the click event to the partent class as eventClick')
    this.eventClick.emit(this.event.name);
  }
}

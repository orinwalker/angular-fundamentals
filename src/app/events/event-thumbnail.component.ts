import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .pad-left { margin-left: 5px; }
    .well div { color: #bbb }
    `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  // @Output() eventClick = new EventEmitter();

  someProperty: any = 'some value';

  constructor() { }

  ngOnInit() {
  }

  // logFoo() {
  //   console.log('foo');
  // }

  // handleClickMe() {
  //   console.log('handleClickMe called!');
  //   console.log('now emit the click event to the partent class as eventClick')
  //   this.eventClick.emit(this.event.name);
  // }
}

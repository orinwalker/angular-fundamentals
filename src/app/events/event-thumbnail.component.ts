import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .thumbnail { min-height: 210px }
    .pad-left { margin-left: 5px; }
    .well div { color: #bbb }
    `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }
}

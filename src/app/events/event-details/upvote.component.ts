import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent implements OnInit {

  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({});
  }

}

import { Component, OnInit, Input, ViewChild, ElementRef, Inject, forwardRef } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(forwardRef(() => JQ_TOKEN)) private $: any) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }

}

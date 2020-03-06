import {Directive, Inject, ElementRef, forwardRef, OnInit} from '@angular/core';
import { JQ_TOKEN } from '.';

@Directive({
  selector: '[appModalTrigger]'
})

export class ModalTriggerDirective implements OnInit {

  private el: HTMLElement;

  constructor(
    @Inject(forwardRef(() => ElementRef)) public ref: ElementRef,
    @Inject(forwardRef(() => JQ_TOKEN)) private $: any ) {
      this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    });
  }

}

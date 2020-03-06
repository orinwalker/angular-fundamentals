import {Directive, Inject, ElementRef, forwardRef, OnInit, Input} from '@angular/core';
import { JQ_TOKEN } from '.';

@Directive({
  selector: '[appModalTrigger]'
})

export class ModalTriggerDirective implements OnInit {

  private el: HTMLElement;
  @Input('appModalTrigger') modalId: string;

  constructor(
    @Inject(forwardRef(() => ElementRef)) public ref: ElementRef,
    @Inject(forwardRef(() => JQ_TOKEN)) private $: any ) {
      this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}

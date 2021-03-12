import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  // Atributos
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  // Constructor
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
  }

  // Metodos
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }
}

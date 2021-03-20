import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  // Atributos
  _color: string = 'red';
  _mensaje: string = 'El campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string) {
    this._mensaje = valor; // Esto se hace para mantener el valor
    this.setMensaje();
  }
  @Input() set valido(valor: boolean) {
    valor
      ? this.htmlElement.nativeElement.classList.add('hidden')
      : this.htmlElement.nativeElement.classList.remove('hidden');
  }

  // Constructor
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  // Metodos
  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}

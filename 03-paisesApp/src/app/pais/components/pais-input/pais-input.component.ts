import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  // Atributos

  @Input() placeholder: string = '';

  @Output() emitEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitdebouncer: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  // Constructor
  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(this.emitdebouncer.emit);
  }

  // Metodos

  buscar(): void {
    this.emitEnter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.emitdebouncer.next(this.termino);
  }
}

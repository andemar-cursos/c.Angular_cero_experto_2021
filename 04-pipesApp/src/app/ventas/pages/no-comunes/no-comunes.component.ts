import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // Atributos I18nSelect
  nombre: string = 'Andemar';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // Atributos I18Plural
  clientes: string[] = ['Mashiro', 'Touko', 'Nanami', 'Tsukushi', 'Rui'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente(): void {
    this.nombre = this.nombre === 'Andemar' ? 'Susana' : 'Andemar';
    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';
  }

  eliminarCliente(): void {
    this.clientes.pop();
  }

  // KeyValuePipe

  persona = {
    nombre: 'Andemar',
    edad: 24,
    direccion: 'Palmira, Valle',
  };
}

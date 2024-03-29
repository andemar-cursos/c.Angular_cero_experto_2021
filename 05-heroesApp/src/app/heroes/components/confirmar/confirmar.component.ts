import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css'],
})
export class ConfirmarComponent implements OnInit {
  // Atributos

  // Constructor
  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public heroe: Heroe
  ) {}

  ngOnInit(): void {}

  // Metodos
  borrar(): void {
    this.dialogRef.close(true);
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}

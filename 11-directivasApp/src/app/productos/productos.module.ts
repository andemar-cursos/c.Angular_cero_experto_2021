import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharesModule } from '../shared/shares.module';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharesModule,
  ],
})
export class ProductosModule {}

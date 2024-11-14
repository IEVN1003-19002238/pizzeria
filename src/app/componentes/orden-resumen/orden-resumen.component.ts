import { CommonModule } from '@angular/common';
import { OrdenServicio } from '../../orden.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

export interface Orden {
  tamanio: string;
  ingredientes: string[];
  cantidad: number;  // Cambiado de numPizzas a cantidad
  subtotal: number;  // Cambiado de subTotal a subtotal
}

@Component({
  selector: 'app-orden-resumen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orden-resumen.component.html',
  styleUrls: ['./orden-resumen.component.css']
})
export class OrdenResumenComponent {
  constructor(public ordenServicio: OrdenServicio) {}
  
  guardaPedido() {
    this.ordenServicio.terminarPedido();
  }
}

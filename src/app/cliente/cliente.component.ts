import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/Cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  cliente: Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService){ }
  
  
  crearCliente(form: NgForm) {
 
    this.cliente.nombre=form.value.nombre;
    this.cliente.cedula = form.value.cedula;
    this.cliente.telefono = form.value.telefono;
    this.cliente.direccion = form.value.direccion;
    console.log("el cliente  es  " + JSON.stringify(this.cliente) )
    if (this.cliente != null) {
      this.clienteServicio.crearCliente(this.cliente).subscribe((data) => {

        alert("Cliente Creado exitosamente")
      }, error => {
        console.log(error);
        alert('Datos incorrectos')
      });
    }
  }
}

import { Component } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent {
  clientes: Cliente[]=[];



  constructor(private clientesServicio: ClienteService) { }

  ngOnInit(): void {  
    this.clientesServicio.obtenerClientes().subscribe((clientes:any[])=>{
      console.log("Lo que recupera es "+ JSON.stringify(clientes));  
      this.clientes = clientes;
      }
    )
  }
}

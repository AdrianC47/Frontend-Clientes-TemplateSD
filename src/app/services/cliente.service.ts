import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})


export class ClienteService {
  private url: string;
  constructor(private http: HttpClient ) {
    this.url=environment.url
 }

 obtenerClientes():Observable<any>{
  return this.http.get(`${this.url}/clientes`);
 }

 crearCliente(cliente:any){
 
  return this.http.post<Cliente>(`${this.url}/cliente/create`,cliente)
}

}

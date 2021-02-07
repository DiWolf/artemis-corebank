import { Client } from "pg";
import { Cliente } from "./domain/cliente";

export interface ClienteRepositoryMethods {
  obtenTodosClientesActivos(): Promise<Cliente[]>;
  crearNuevoCliente(cliente: Cliente): Promise<void>;
  actualizarCliente(cliente: Cliente, id: string): Promise<void>;
  eliminarCliente(id: string): Promise<void>;
}

import { Cliente } from "../repository/domain/cliente";
let _clienterepositorySql: any = null;
export class ClientService {
  constructor({ ClienteSQLRepository }: any) {
    _clienterepositorySql = ClienteSQLRepository;
  }

  public async obtenTodosClientesActivos(): Promise<Cliente[]> {
    //const data = await _clienterepository.obtenTodosClientesActivos();
    const data = await _clienterepositorySql.obtenTodosClientesActivos();
    return data;
  }

  public async crearNuevoCliente(cliente: Cliente): Promise<any> {
    const data = await _clienterepositorySql.crearNuevoCliente(cliente);
    return data;
  }

  public async actualizarCliente(cliente: Cliente, id: string): Promise<void> {
    const data = await _clienterepositorySql.actualizarCliente(cliente, id);
    return data;
  }
}

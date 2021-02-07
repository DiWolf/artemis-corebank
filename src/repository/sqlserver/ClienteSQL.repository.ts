import { ClienteRepositoryMethods } from "../cliente";
import { Cliente } from "../domain/cliente";
import cnx from "../../common/sql.persistence";
const uuid = require("uuid");
export class ClienteRepositorySQL implements ClienteRepositoryMethods {
  async obtenTodosClientesActivos(): Promise<Cliente[]> {
    const result = (await cnx)
      .query`SELECT CONCAT(nombre,' ',aPaterno,' ',aMaterno) as FullName, curp FROM clientes.clientes`;
    return (await result).recordset;
  }

  async crearNuevoCliente(cliente: Cliente): Promise<void> {
    const id = uuid.v4();
    await (await cnx)
      .query`INSERT INTO clientes.clientes(id,nombre, aPaterno, aMaterno, curp) VALUES (${id},${cliente.nombres},${cliente.aPaterno},${cliente.aMaterno},${cliente.curp})`;
  }

  async actualizarCliente(cliente: Cliente, id: string): Promise<any> {
    (await cnx)
      .query` UPDATE [clientes].[clientes] SET [nombre] = ${cliente.nombres}, [aPaterno] = ${cliente.aPaterno}, [aMaterno] =${cliente.aMaterno}, [curp] = ${cliente.curp} WHERE [id] = ${id}`;
  }

  //Eliminar un cliente de la base de datos.
  async eliminarCliente(id: string): Promise<void> {
    (await cnx).query`DELETE FROM clientes.clientes WHERE id=${id}`;
  }
}

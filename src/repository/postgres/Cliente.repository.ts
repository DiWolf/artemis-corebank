import { ClienteRepositoryMethods } from "../cliente";
import { Cliente } from "../domain/cliente";
import cnx from "../../common/postgres.persistence";
const uuid = require("uuid");
export class ClienteRepository implements ClienteRepositoryMethods {
  //Obtener todos los clientes activos de la entidad Clientes
  async obtenTodosClientesActivos(): Promise<Cliente[]> {
    return await cnx
      .query("SELECT $aPaterno FROM clientes.clientes")
      .then((res: any) => {
        return res.rows;
      })
      .catch((e) => {
        throw Error(e);
      });
  }

  //Crea un nuevo registro en la base de datos en el schema clientes entidad clientes
  async crearNuevoCliente(cliente: Cliente): Promise<any> {
    const id = uuid.v4();
    await cnx.query("BEGIN");
    return await cnx
      .query(
        'INSERT INTO clientes.clientes("id","nombres","aPaterno","aMaterno") VALUES($1,$2,$3,$4)',
        [id, cliente.nombres, cliente.aPaterno, cliente.aMaterno]
      )
      .then(async (res) => {
        await cnx.query("COMMIT");
        return true;
      })
      .catch(async (err) => {
        await cnx.query("ROLLBACK");
        return err.detail;
      });
  }

  //Actualizar el registro de un cliente. 
  async actualizarCliente(cliente: Cliente): Promise<any> {}
}

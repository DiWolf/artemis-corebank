import { Request, Response } from "express";
let _clienteService: any = null;

export class ClienteController {
  constructor({ ClienteService }: any) {
    _clienteService = ClienteService;
  }

  async obtenTodosClientesActivos(req: Request, res: Response) {
    try {
      const data = await _clienteService.obtenTodosClientesActivos();
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  }

  async crearNuevoCliente(req: Request, res: Response) {
    try {
      const { cliente } = req.body;
      const data = await _clienteService.crearNuevoCliente(cliente);
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  }

  async actualizarCliente(req: Request, res: Response) {
    try {
      const { cliente } = req.body;
      const { id } = req.params;
      const data = await _clienteService.actualizarCliente(cliente, id);
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  }

  async eliminarCliente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await _clienteService.eliminarCliente(id);
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  }
}

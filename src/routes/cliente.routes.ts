import { route } from "awilix-express";
import { Router } from "express";

module.exports = function ({ ClienteController }: any) {
  const router = Router();

  router.get("/", ClienteController.obtenTodosClientesActivos);
  router.post("/", ClienteController.crearNuevoCliente);
  router.put("/:id", ClienteController.actualizarCliente);
  return router;
};

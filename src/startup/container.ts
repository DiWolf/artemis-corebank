import { createContainer, asClass, asValue, asFunction } from "awilix";

import Server from "./index";
const config = require("../common/index");

import Repository from "../repository/index";
import Services from "../services/index";
import Controller from "../controllers/index";

const { ClienteRoutes } = require("../routes/index.routes");

const Ruta = require("../routes/index");
const container = createContainer();

container
  .register({
    app: asClass(Server).singleton(),
    router: asClass(Ruta).singleton(),
    config: asValue(config),
  })
  .register({
    ClienteService: asClass(Services.ClienteService).singleton(),
  })
  .register({
    ClienteService: asClass(Services.ClienteService).singleton(),
  })
  .register({
    ClienteController: asClass(
      Controller.ClienteController.bind(Controller.ClienteController)
    ).singleton(),
  })
  .register({
    ClienteRoutes: asFunction(ClienteRoutes).singleton(),
  })
  .register({
    ClienteRepository: asClass(Repository.ClienteRepository).singleton(),
    ClienteSQLRepository: asClass(Repository.ClienteSQLRepository).singleton(),
  });

module.exports = container;

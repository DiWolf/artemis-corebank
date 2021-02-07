import express from "express";
const cors = require("cors");
import helmet from "helmet";
const compression = require("compression");

module.exports = function ({ ClienteRoutes }: any) {
  const crm = express.Router();
  const router = express.Router();

  crm.use(express.json()).use(cors()).use(helmet()).use(compression());

  crm.use("/cliente", ClienteRoutes);
  router.use("/v1/api", crm);
  return router;
};

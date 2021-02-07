import { ClienteRepository } from "./postgres/Cliente.repository";
import { ClienteRepositorySQL } from "./sqlserver/ClienteSQL.repository";
export = {
  ClienteRepository: ClienteRepository,
  ClienteSQLRepository: ClienteRepositorySQL
};

import { ConnectionPool } from "mssql";

export default new ConnectionPool({
  user: process.env.DBUSER as string,
  password: process.env.DBPASS as string,
  server: "aurorati.mx" as string,
  database: process.env.DBNAME as string,
}).connect();
